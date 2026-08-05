#!/usr/bin/env node
/**
 * Accès programmé à Légifrance, via l'API PISTE (module + CLI).
 *
 * Pourquoi ce module. Le 2026-08-05, le premier appel réel à l'API a montré que
 * deux textes publiés du site étaient faux : nous écrivions qu'une loi « a
 * supprimé » un régime que son article 21 n'abroge qu'à une date différée, et
 * nous laissions entendre qu'elle réglait une demande dont ses articles 6 et 12
 * disent plutôt l'inverse. Les appels de ce jour-là étaient jetables ; sans
 * module réutilisable, chaque vérification les réécrit et l'erreur revient.
 *
 * Ce qu'il faut retenir avant d'écrire une note d'obsolescence :
 *  - le titre d'une loi ne dit pas ce qu'elle fait → lire les articles
 *    (`texteIntegral`) ;
 *  - la date de signature n'est pas la date d'entrée en vigueur → `enVigueurLe`
 *    répond sur la date, pas sur le journal officiel.
 *
 * ⚠️ Les URLs `legifrance.gouv.fr` renvoient 403 aux requêtes automatisées même
 * quand la page existe : ne jamais conclure au lien mort sur ce domaine. Les
 * identifiants d'article viennent de l'API, ils font foi.
 *
 * Usage en module :
 *   import { chercherTexte, texteIntegral, articleADate, enVigueurLe } from "./legifrance.mjs";
 *
 * Usage en ligne de commande (npm run legifrance -- <commande> …) :
 *   acces                                    contrôle jeton + API
 *   texte    <numéro>                        ex. texte 2026-554
 *   integral <LEGITEXT… | numéro> [date]     ex. integral 2026-554
 *   article  <code> <numéro> [date]          ex. article "code de l'énergie" "L. 521-1"
 *   vigueur  <code> <numéro> [date]          ex. vigueur "code général des impôts" "885 A" 2017-06-01
 *
 * Les dates s'écrivent AAAA-MM-JJ et sont facultatives (défaut : aujourd'hui).
 * Interroger un article **à une date passée** est le moyen de vérifier ce qui
 * s'appliquait au moment où un programme a été écrit.
 *
 * Identifiants : PISTE_CLIENT_ID / PISTE_CLIENT_SECRET dans `.env.local`
 * (voir `.env.example`). Jamais de préfixe NEXT_PUBLIC_ : le site est un export
 * statique, aucune clé ne doit partir dans le navigateur.
 */
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const racine = join(dirname(fileURLToPath(import.meta.url)), "..");

const URL_JETON = "https://oauth.piste.gouv.fr/api/oauth/token";
const BASE = "https://api.piste.gouv.fr/dila/legifrance/lf-engine-app";

/** Les refus de ce module sont des situations prévues (identifiants absents, CGU non signées). */
class ErreurLegifrance extends Error {}

// --- Identifiants ----------------------------------------------------------

/**
 * Lit `.env.local` sans dépendance (le projet n'a pas dotenv, et `--env-file`
 * ne vaut qu'en ligne de commande : un agent qui importe le module y perdrait).
 * L'environnement du processus l'emporte, pour rester utilisable en CI.
 */
function identifiants() {
  let fichier = {};
  try {
    fichier = Object.fromEntries(
      readFileSync(join(racine, ".env.local"), "utf8")
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l && !l.startsWith("#") && l.includes("="))
        .map((l) => {
          const i = l.indexOf("=");
          return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")];
        })
    );
  } catch {
    /* pas de .env.local : on se rabat sur l'environnement */
  }
  const id = process.env.PISTE_CLIENT_ID || fichier.PISTE_CLIENT_ID;
  const secret = process.env.PISTE_CLIENT_SECRET || fichier.PISTE_CLIENT_SECRET;
  if (!id || !secret)
    throw new ErreurLegifrance(
      "Identifiants PISTE absents. Copier `.env.example` en `.env.local` et renseigner\n" +
        "PISTE_CLIENT_ID / PISTE_CLIENT_SECRET (compte sur https://piste.gouv.fr/registration)."
    );
  return { id, secret };
}

// --- Jeton -----------------------------------------------------------------

let cache = null; // { valeur, expire } — le jeton vaut 1 h, ne pas en demander un par requête.

/** Jeton OAuth `client_credentials`, mis en cache mémoire jusqu'à 60 s avant expiration. */
export async function jeton() {
  if (cache && Date.now() < cache.expire) return cache.valeur;
  const { id, secret } = identifiants();
  const reponse = await fetch(URL_JETON, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: id,
      client_secret: secret,
      scope: "openid",
    }),
  });
  if (!reponse.ok) {
    const corps = await reponse.text();
    throw new ErreurLegifrance(
      `Jeton refusé (HTTP ${reponse.status}). ${corps.slice(0, 300)}\n` +
        "Identifiants invalides, ou environnement sandbox/production confondus."
    );
  }
  const data = await reponse.json();
  cache = { valeur: data.access_token, expire: Date.now() + (data.expires_in - 60) * 1000 };
  return cache.valeur;
}

/** Appel authentifié à l'API. `chemin` commence par « / ». */
async function appel(chemin, corps) {
  const reponse = await fetch(BASE + chemin, {
    method: corps === undefined ? "GET" : "POST",
    headers: {
      Authorization: `Bearer ${await jeton()}`,
      Accept: "application/json",
      ...(corps === undefined ? {} : { "Content-Type": "application/json" }),
    },
    ...(corps === undefined ? {} : { body: JSON.stringify(corps) }),
  });
  const texte = await reponse.text();
  if (!reponse.ok) {
    const indice =
      reponse.status === 403
        ? "\n→ 403 avec des identifiants valides = consentement aux CGU non donné sur piste.gouv.fr (API > Consentement CGU API)."
        : "";
    throw new ErreurLegifrance(`${chemin} : HTTP ${reponse.status}. ${texte.slice(0, 300)}${indice}`);
  }
  try {
    return JSON.parse(texte);
  } catch {
    return texte; // /consult/ping répond « pong » en texte brut.
  }
}

/**
 * Contrôle d'accès de bout en bout : jeton + une recherche dont on connaît la réponse.
 *
 * On n'utilise pas `/consult/ping` : le 2026-08-05 il renvoyait 500 alors que tout
 * le reste de l'API répondait. Un diagnostic qui échoue quand l'accès est bon fait
 * chercher une panne qui n'existe pas.
 */
export async function verifierAcces() {
  await jeton();
  const [texte] = await chercherTexte("2026-554");
  if (!texte) throw new ErreurLegifrance("Jeton obtenu, mais la recherche de contrôle ne renvoie rien.");
  return texte;
}

// --- Outils ----------------------------------------------------------------

const AUJOURDHUI = () => new Date().toISOString().slice(0, 10);

/** Les facettes de date de l'API attendent un horodatage en millisecondes. */
const enMillisecondes = (date) => Date.parse(`${date}T00:00:00Z`);

/** AAAA-MM-JJ depuis les formats de l'API (horodatage ms ou ISO), sinon null. */
function enJour(valeur) {
  if (valeur === null || valeur === undefined || valeur === "") return null;
  const ms = typeof valeur === "number" ? valeur : Date.parse(valeur);
  // L'API pose 2999-01-01 pour « sans terme » et 0 pour « inconnu » : ni l'un ni l'autre n'est une date.
  if (!Number.isFinite(ms) || ms <= 0 || ms > Date.parse("2900-01-01T00:00:00Z")) return null;
  return new Date(ms).toISOString().slice(0, 10);
}

/** Entités HTML → caractères. Les titres de section en sont truffés (« &gt; »). */
export function decoderEntites(texte) {
  if (!texte) return "";
  return texte
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&(#39|apos|rsquo);/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&amp;/g, "&"); // en dernier, sinon « &amp;lt; » se décode deux fois
}

/** Le texte des articles arrive en HTML : on le rend lisible sans rien retirer du fond. */
export function detagger(html) {
  if (!html) return "";
  return decoderEntites(
    html
      .replace(/<br\s*\/?>/gi, "\n")
      // Les renvois d'article sont imbriqués dans des <blockquote> : sans saut de ligne
      // à la fermeture, « Art. L131-2 » se colle au « 2° » suivant et devient illisible.
      .replace(/<\/(p|div|li|tr|h[1-6]|blockquote)>/gi, "\n")
      .replace(/<[^>]+>/g, "")
  )
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// --- Recherche d'un texte (loi, décret, ordonnance) -------------------------

/**
 * Cherche un texte par son numéro dans le fond LODA_DATE (lois, ordonnances,
 * décrets, arrêtés) et retourne son identifiant LEGITEXT.
 *
 * @param {string} numero  ex. « 2026-554 » (loi n° 2026-554)
 * @param {{ nature?: string[], date?: string }} options  nature ∈ LOI, ORDONNANCE, DECRET, ARRETE
 * @returns {Promise<Array<{ id, titre, nature, date, etat }>>} résultats, le plus pertinent d'abord
 */
export async function chercherTexte(numero, { nature, date = AUJOURDHUI() } = {}) {
  const data = await appel("/search", {
    fond: "LODA_DATE",
    recherche: {
      filtres: [
        { facette: "DATE_VERSION", singleDate: enMillisecondes(date) },
        ...(nature?.length ? [{ facette: "NATURE", valeurs: nature }] : []),
      ],
      champs: [
        {
          typeChamp: "NUM",
          operateur: "ET",
          criteres: [{ typeRecherche: "EXACTE", valeur: numero, operateur: "ET" }],
        },
      ],
      pageNumber: 1,
      pageSize: 10,
      operateur: "ET",
      sort: "PERTINENCE",
      typePagination: "DEFAUT",
    },
  });
  // L'identifiant renvoyé porte un suffixe de version (LEGITEXT…_01-07-2026) que
  // /consult/lawDecree n'accepte pas : on garde les deux, `id` étant l'utilisable.
  return (data.results ?? []).map((r) => ({
    id: (r.titles?.[0]?.id ?? r.id ?? "").split("_")[0],
    idVersion: r.titles?.[0]?.id ?? r.id,
    cid: r.titles?.[0]?.cid, // JORFTEXT… — l'identifiant du texte au Journal officiel
    titre: r.titles?.[0]?.title ?? r.title,
    nature: r.nature,
    etat: r.etat,
    // Deux dates distinctes, et les confondre est l'erreur du 05/08 :
    // `datePublication` = parution au JO ; `dateVersion` = version consultée.
    datePublication: enJour(r.datePublication),
    dateVersion: enJour(r.date),
  }));
}

// --- Texte intégral d'une loi ou d'un décret --------------------------------

/**
 * Aplatit l'arborescence sections/articles que renvoie /consult/lawDecree.
 *
 * L'API ne rend ni les sections ni les articles dans l'ordre du texte (le premier
 * essai a sorti la loi n° 2026-554 en 18, 19, 20, 21, 22, 12…). Lire une loi dans
 * le désordre est une invitation à la citer de travers : on rétablit l'ordre du
 * document avec `intOrdre`, le rang que l'API porte elle-même sur chaque nœud.
 */
function aplatir(noeud, chemin = [], sortie = []) {
  const parOrdre = (a, b) => (a.intOrdre ?? 0) - (b.intOrdre ?? 0);
  for (const article of [...(noeud.articles ?? [])].sort(parOrdre))
    sortie.push({
      id: article.id,
      numero: article.num,
      etat: article.etat,
      section: chemin.join(" > "),
      dateDebut: enJour(article.dateDebut),
      dateFin: enJour(article.dateFin),
      texte: detagger(article.content ?? article.texte ?? ""),
      nota: detagger(article.nota ?? ""),
      html: article.content ?? "", // source non retouchée : le détaggage n'est jamais la source
    });
  for (const section of [...(noeud.sections ?? [])].sort(parOrdre))
    aplatir(section, [...chemin, section.title ?? section.titre ?? ""], sortie);
  return sortie;
}

/**
 * Texte intégral d'une loi ou d'un décret, article par article, détaggé.
 *
 * C'est la fonction à utiliser avant toute affirmation sur ce que fait un texte :
 * le 05/08, le titre et le résumé de la loi n° 2026-554 disaient l'inverse de ses
 * articles 6 et 12.
 *
 * @param {string} texteId  identifiant LEGITEXT (voir `chercherTexte`)
 * @returns {Promise<{ id, titre, articles: Array<{ numero, etat, section, texte }> }>}
 */
export async function texteIntegral(texteId, { date = AUJOURDHUI() } = {}) {
  const data = await appel("/consult/lawDecree", { textId: texteId, date, searchedString: "" });
  return {
    id: texteId,
    titre: data.title,
    nature: data.nature,
    etat: data.etat,
    nor: data.nor,
    dateParution: enJour(data.dateParution), // parution au JO — pas la date d'entrée en vigueur
    dateTexte: enJour(data.dateTexte), // date de signature — pas la date d'entrée en vigueur non plus
    visa: detagger(data.visa ?? ""),
    nota: detagger(data.nota ?? ""),
    // Les signataires ne sont pas un détail protocolaire : ils rattachent un texte
    // au ministre dont il porte familièrement le nom. C'est ce champ qui a permis
    // de sourcer « réforme Darmanin » (décret n° 2023-1013, signé par le ministre
    // de l'intérieur Gérald Darmanin) là où la fiche pédagogique citée jusque-là
    // ne mentionnait ce nom nulle part.
    signataires: detagger(data.signers ?? ""),
    articles: aplatir(data),
  };
}

// --- Article de code à une date donnée --------------------------------------

/**
 * Libellé canonique d'un code, tel que la facette NOM_CODE l'exige.
 *
 * Cette facette n'est pas tolérante : elle ne connaît que « Code de l'énergie ».
 * « code de l'énergie », « CODE DE L'ENERGIE » ou la même chaîne avec une
 * apostrophe courbe (celle que produit un copier-coller depuis une page web)
 * renvoient zéro résultat, sans erreur — donc un « article introuvable » qui
 * ressemble à un fait juridique alors que c'est une faute de frappe. On demande
 * son nom à l'API plutôt que de le deviner.
 *
 * @param {string} code  nom approchant, ex. « code de l'énergie »
 * @returns {Promise<string>} libellé exact
 */
export async function nomCodeCanonique(code) {
  const droite = code.replace(/[’‘`]/g, "'");
  const data = await appel("/suggest", { supplies: ["ALL"], searchText: droite, documentsDits: false });
  const codes = (data.results ?? []).filter((r) => r.nature === "code" && r.label);
  const sansCasse = (s) => s.toLowerCase().replace(/[’‘`]/g, "'");
  const exact = codes.find((r) => sansCasse(r.label) === sansCasse(droite));
  if (exact) return exact.label;
  if (codes.length === 1) return codes[0].label;
  if (codes.length)
    throw new ErreurLegifrance(
      `« ${code} » est ambigu. Codes possibles :\n  - ${codes.map((r) => r.label).join("\n  - ")}`
    );
  throw new ErreurLegifrance(`Aucun code ne correspond à « ${code} ».`);
}

/**
 * Un article de code **tel qu'il est à une date donnée** : texte, état de
 * vigueur et bornes de vigueur.
 *
 * C'est la fonction qui a attrapé l'erreur du 05/08 : l'article L. 521-1 du code
 * de l'énergie ressortait en `ABROGE_DIFF` — encore en vigueur, abrogation
 * différée. Écrire « la loi a supprimé » était donc faux au présent.
 *
 * @param {string} code    nom du code, ex. « code de l'énergie »
 * @param {string} numero  numéro d'article, ex. « L521-1 » ou « L. 521-1 »
 * @param {string} [date]  AAAA-MM-JJ (défaut : aujourd'hui)
 * @returns {Promise<null | { id, numero, etat, dateDebut, dateFin, texte, code }>}
 */
export async function articleADate(code, numero, date = AUJOURDHUI()) {
  const nomCode = await nomCodeCanonique(code);
  // Le champ NUM_ARTICLE veut le numéro **tel qu'il est indexé**, et l'indexation
  // n'est pas uniforme : « L521-1 » sans espace pour le code de l'énergie, mais
  // « 885 A » avec espace pour le CGI. Normaliser dans un sens casse l'autre —
  // et un numéro mal écrit ne renvoie pas d'erreur, seulement zéro résultat, ce
  // qui se lit comme « article abrogé ». On essaie donc les écritures plausibles.
  const variantes = [...new Set([numero.trim(), numero.replace(/\./g, "").trim(), numero.replace(/[\s.]/g, "")])];
  const cle = (s) => (s ?? "").replace(/[\s.]/g, "").toUpperCase();

  for (const valeur of variantes) {
    const data = await appel("/search", {
      fond: "CODE_DATE",
      recherche: {
        filtres: [
          { facette: "NOM_CODE", valeurs: [nomCode] },
          { facette: "DATE_VERSION", singleDate: enMillisecondes(date) },
        ],
        champs: [
          {
            typeChamp: "NUM_ARTICLE",
            operateur: "ET",
            criteres: [{ typeRecherche: "EXACTE", valeur, operateur: "ET" }],
          },
        ],
        pageNumber: 1,
        pageSize: 10,
        operateur: "ET",
        sort: "PERTINENCE",
        typePagination: "ARTICLE",
      },
    });

    // Le numéro d'article est dans `extracts[].title` (et non `num`, vide ici).
    for (const resultat of data.results ?? [])
      for (const section of resultat.sections ?? [])
        for (const extrait of section.extracts ?? []) {
          if (cle(extrait.title ?? extrait.num) !== cle(numero)) continue;
          const detail = await appel("/consult/getArticle", { id: extrait.id });
          const article = detail.article ?? {};
          return {
            id: extrait.id,
            numero: article.num ?? extrait.title,
            code: nomCode,
            section: decoderEntites(article.fullSectionsTitre ?? section.title ?? ""),
            // ⚠️ `etat` est l'état ACTUEL de cette version de l'article, pas son
            // état à `date` : l'article 885 A (ISF) consulté au 01/06/2017 sort
            // en `ABROGE` alors qu'il s'appliquait ce jour-là. Ce sont les bornes
            // de vigueur qui répondent à « en vigueur le … » — voir `enVigueurLe`.
            etat: article.etat ?? extrait.legalStatus,
            dateDebut: enJour(article.dateDebut ?? extrait.dateDebut),
            dateFin: enJour(article.dateFin ?? extrait.dateFin),
            texte: detagger(article.texte ?? article.texteHtml ?? ""),
            nota: detagger(article.nota ?? ""),
            url: `https://www.legifrance.gouv.fr/codes/article_lc/${extrait.id}`,
          };
        }
  }
  return null;
}

/**
 * Réponse binaire : cet article est-il en vigueur à cette date, et jusqu'à quand ?
 *
 * À appeler avant d'écrire au passé qu'un texte a supprimé quelque chose.
 * La réponse est tirée des **bornes de vigueur**, pas de l'étiquette d'état :
 * un article `ABROGE_DIFF` est encore en vigueur, et lire l'étiquette de travers
 * est exactement l'erreur du 05/08. L'étiquette est renvoyée en plus, pour dire
 * ce qui est *prévu* — sachant qu'une abrogation différée peut elle-même dépendre
 * d'un décret non paru : `dateFin` est une date prévue, pas un fait acquis.
 *
 * @returns {Promise<{ enVigueur: boolean, etat: string, dateFin: string|null, differe: boolean, article: object }>}
 */
export async function enVigueurLe(code, numero, date = AUJOURDHUI()) {
  const article = await articleADate(code, numero, date);
  if (!article) {
    // Un article absent à une date donnée n'est pas forcément un numéro erroné :
    // c'est le plus souvent qu'il n'existait pas encore, ou plus. Le dire, plutôt
    // que de laisser l'appelant conclure à une faute de frappe.
    throw new ErreurLegifrance(
      `Aucune version de l'article ${numero} de « ${code} » au ${date}.\n` +
        "Deux lectures possibles, à trancher et non à supposer :\n" +
        `  - l'article a été abrogé avant cette date, ou n'existait pas encore → « article "${code}" ${numero} <autre date> » ;\n` +
        "  - le numéro ou le nom du code est faux."
    );
  }
  return {
    enVigueur: (!article.dateDebut || article.dateDebut <= date) && (!article.dateFin || date < article.dateFin),
    etat: article.etat ?? "INCONNU",
    dateFin: article.dateFin,
    differe: article.etat === "ABROGE_DIFF" || article.etat === "VIGUEUR_DIFF",
    article,
  };
}

// --- Ligne de commande ------------------------------------------------------

const CLI = {
  async acces() {
    const texte = await verifierAcces();
    console.log(`✅ Accès Légifrance opérationnel.\n   Recherche de contrôle : ${texte.titre}`);
  },
  async texte(numero) {
    if (!numero) throw new ErreurLegifrance("Usage : texte <numéro>   ex. texte 2026-554");
    const resultats = await chercherTexte(numero);
    if (!resultats.length) return console.log(`Aucun texte n° ${numero}.`);
    for (const r of resultats)
      console.log(`${r.id}  ${r.etat ?? "—"}  JO ${r.datePublication ?? "—"}  ${r.titre}`);
  },
  async integral(reference, date) {
    if (!reference) throw new ErreurLegifrance("Usage : integral <LEGITEXT|numéro> [date]");
    let id = reference;
    if (!/^LEGITEXT/.test(reference)) {
      const [premier] = await chercherTexte(reference);
      if (!premier) return console.log(`Aucun texte n° ${reference}.`);
      id = premier.id;
      console.log(`→ ${premier.titre}\n`);
    }
    const texte = await texteIntegral(id, date ? { date } : {});
    console.log(`${texte.titre}`);
    // `/consult/lawDecree` laisse `etat` et `dateTexte` vides : ne pas afficher
    // « null » ni « ? », qui se lisent comme un fait alors qu'ils n'en sont pas.
    const entete = [texte.nature, texte.etat, texte.dateTexte && `signé le ${texte.dateTexte}`,
      texte.dateParution && `paru au JO le ${texte.dateParution}`].filter(Boolean);
    console.log(entete.join(" — "));
    console.log(`⚠️ La date de parution n'est pas la date d'entrée en vigueur : la chercher dans les dispositions finales.`);
    if (texte.signataires) console.log(`\nSignataires :\n${texte.signataires}`);
    console.log(`\n${texte.articles.length} articles\n`);
    for (const a of texte.articles) {
      console.log(`── Article ${a.numero ?? "?"} [${a.etat ?? "—"}]${a.section ? `  (${a.section})` : ""}`);
      console.log(`${a.texte}\n`);
      if (a.nota) console.log(`   NOTA : ${a.nota}\n`);
    }
  },
  async article(code, numero, date) {
    if (!code || !numero) throw new ErreurLegifrance('Usage : article <code> <numéro> [date]   ex. article "code de l\'énergie" L521-1');
    const a = await articleADate(code, numero, date);
    if (!a) return console.log(`Article ${numero} introuvable dans « ${code} »${date ? ` au ${date}` : ""}.`);
    console.log(`${a.code} — article ${a.numero}  [${a.etat}]`);
    console.log(`vigueur : ${a.dateDebut ?? "—"} → ${a.dateFin ?? "sans terme"}`);
    console.log(`${a.section ?? ""}\n${a.url}\n`);
    console.log(a.texte);
    if (a.nota) console.log(`\nNOTA : ${a.nota}`);
  },
  async vigueur(code, numero, date = AUJOURDHUI()) {
    if (!code || !numero) throw new ErreurLegifrance("Usage : vigueur <code> <numéro> [date]");
    const v = await enVigueurLe(code, numero, date);
    console.log(`${v.article.code} — article ${v.article.numero}, au ${date}`);
    console.log(`${v.enVigueur ? "✅ EN VIGUEUR" : "❌ PAS EN VIGUEUR"}  [état actuel : ${v.etat}]`);
    console.log(`vigueur : ${v.article.dateDebut ?? "—"} → ${v.article.dateFin ?? "sans terme"}`);
    // L'étiquette décrit l'article AUJOURD'HUI ; la réponse porte sur `date`.
    // Les afficher côte à côte sans le dire produit une contradiction apparente.
    if (v.enVigueur && v.etat === "ABROGE")
      console.log(
        `\nℹ️ « ABROGE » est l'état d'aujourd'hui, pas celui du ${date} :\n` +
          `   à cette date l'article s'appliquait, il a été abrogé depuis.`
      );
    if (v.enVigueur && v.etat === "VIGUEUR_DIFF")
      console.log(
        `\nℹ️ « VIGUEUR_DIFF » est l'état d'aujourd'hui : cette version n'est pas encore entrée\n` +
          `   en vigueur, mais elle s'appliquera bien au ${date}.`
      );
    if (v.etat === "ABROGE_DIFF")
      console.log(
        `\n⚠️ Abrogation différée au ${v.dateFin ?? "?"} : l'article s'applique encore.\n` +
          `   Ne pas écrire « a supprimé » — et vérifier que le décret d'entrée en vigueur est bien paru,\n` +
          `   car cette date peut elle-même en dépendre.`
      );
    if (!v.enVigueur && v.etat === "VIGUEUR_DIFF")
      console.log(`\n⚠️ Entrée en vigueur différée : l'article existe mais ne s'applique pas encore.`);
    if (v.dateFin)
      console.log(
        `\nℹ️ Une date de fin n'est pas toujours une abrogation : elle borne souvent une VERSION,\n` +
          `   remplacée par la suivante. Vérifier à une date postérieure avant de conclure à la fin\n` +
          `   du dispositif (piège rencontré sur la CVAE le 2026-08-05).`
      );
    console.log(`\n${v.article.url}`);
  },
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [commande, ...arguments_] = process.argv.slice(2);
  const action = CLI[commande];
  if (!action) {
    console.error(`Commandes : ${Object.keys(CLI).join(", ")}\nDétail en tête de scripts/legifrance.mjs.`);
    process.exit(1);
  }
  try {
    await action(...arguments_);
  } catch (erreur) {
    console.error(erreur instanceof ErreurLegifrance ? `\n${erreur.message}\n` : erreur);
    process.exit(1);
  }
}
