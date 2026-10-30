import type { ReactNode } from "react";

/** Renders text with **bold** markers as <strong> elements. */
export function renderBoldText(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const bold = part.slice(2, -2);
      return (
        <strong key={`b-${bold}`} className="font-semibold text-default">
          {bold}
        </strong>
      );
    }
    return <span key={`t-${part}`}>{part}</span>;
  });
}
