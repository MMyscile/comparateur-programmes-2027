import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        eelv: "#3f9c35",
        lfi: "#cc2443",
        reel: "#334155",
      },
    },
  },
  plugins: [],
};

export default config;
