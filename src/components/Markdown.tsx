import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const PROSE =
  "prose prose-sm prose-slate max-w-none prose-headings:font-semibold prose-h2:text-base prose-h3:text-sm";

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        table: ({ node: _node, ...props }) => (
          <div className="overflow-x-auto">
            <table {...props} />
          </div>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
