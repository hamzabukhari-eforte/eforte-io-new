"use client";

import diagram from "./agentic-platform-diagram.module.css";

export default function AgenticPlatformConnectors() {
  return (
    <div className={diagram.gutter} aria-hidden>
      <span className={`${diagram.dotLine} ${diagram.linePink}`} />
      <span className={`${diagram.dotLine} ${diagram.lineBlueIn}`} />
      <span className={diagram.lineBlueSpine} />
      <span className={`${diagram.dotLine} ${diagram.lineBlueA}`} />
      <span className={`${diagram.dotLine} ${diagram.lineBlueB}`} />
      <span className={`${diagram.dotLine} ${diagram.lineBlueC}`} />
      <span className={`${diagram.dotLine} ${diagram.lineCyan}`} />
    </div>
  );
}
