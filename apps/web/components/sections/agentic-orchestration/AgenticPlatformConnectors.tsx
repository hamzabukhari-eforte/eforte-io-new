"use client";

import {
  useCallback,
  useEffect,
  useState,
  type RefObject,
} from "react";

type Point = { x: number; y: number };

type Segment = {
  id: string;
  color: string;
  d: string;
  arrow?: boolean;
};

type Dot = {
  id: string;
  color: string;
  x: number;
  y: number;
};

function centerRight(rect: DOMRect, root: DOMRect): Point {
  return {
    x: rect.right - root.left,
    y: rect.top + rect.height / 2 - root.top,
  };
}

function centerLeft(rect: DOMRect, root: DOMRect): Point {
  return {
    x: rect.left - root.left,
    y: rect.top + rect.height / 2 - root.top,
  };
}

function query(root: HTMLElement, name: string) {
  return root.querySelector<HTMLElement>(`[data-connector="${name}"]`);
}

function clearDesktopLayout(root: HTMLElement) {
  const column = query(root, "ellipse-column");
  if (column) {
    column.style.height = "";
    column.style.minHeight = "";
    column.style.position = "";
  }
  for (const name of ["ellipse-client", "ellipse-platform", "ellipse-infra"]) {
    const el = query(root, name);
    if (!el) continue;
    el.style.position = "";
    el.style.left = "";
    el.style.top = "";
    el.style.transform = "";
    el.style.margin = "";
    el.style.width = "";
  }
}

/**
 * Keep equal card-row spacing, then move each oval so its center
 * matches the target box-row center (centered professional links).
 */
function placeOvalsOnBoxCenters(root: HTMLElement) {
  const column = query(root, "ellipse-column");
  const cards = query(root, "cards-column");
  const client = query(root, "ellipse-client");
  const platform = query(root, "ellipse-platform");
  const infra = query(root, "ellipse-infra");
  const apps = query(root, "row-apps");
  const agents3 = query(root, "row-agents-3");
  const agents4 = query(root, "row-agents-4");
  const orchestrator = query(root, "row-orchestrator");
  const infraRow = query(root, "row-infra");

  if (
    !column ||
    !cards ||
    !client ||
    !platform ||
    !infra ||
    !apps ||
    !agents3 ||
    !agents4 ||
    !orchestrator ||
    !infraRow
  ) {
    return;
  }

  clearDesktopLayout(root);

  const cardsHeight = cards.getBoundingClientRect().height;
  column.style.position = "relative";
  column.style.height = `${cardsHeight}px`;
  column.style.minHeight = `${cardsHeight}px`;

  const columnTop = column.getBoundingClientRect().top;

  const targets: Array<{ oval: HTMLElement; midY: number }> = [
    {
      oval: client,
      midY:
        apps.getBoundingClientRect().top +
        apps.getBoundingClientRect().height / 2 -
        columnTop,
    },
    {
      // Align platform oval to the middle agents row center
      oval: platform,
      midY:
        agents4.getBoundingClientRect().top +
        agents4.getBoundingClientRect().height / 2 -
        columnTop,
    },
    {
      oval: infra,
      midY:
        infraRow.getBoundingClientRect().top +
        infraRow.getBoundingClientRect().height / 2 -
        columnTop,
    },
  ];

  for (const { oval, midY } of targets) {
    const h = oval.getBoundingClientRect().height || 120;
    oval.style.position = "absolute";
    oval.style.left = "50%";
    oval.style.width = "100%";
    oval.style.transform = "translateX(-50%)";
    oval.style.top = `${Math.max(0, midY - h / 2)}px`;
    oval.style.margin = "0";
  }
}

function buildDiagram(root: HTMLElement): { segments: Segment[]; dots: Dot[] } {
  placeOvalsOnBoxCenters(root);

  const rootRect = root.getBoundingClientRect();
  const client = query(root, "ellipse-client");
  const platform = query(root, "ellipse-platform");
  const infra = query(root, "ellipse-infra");
  const apps = query(root, "row-apps");
  const agents3 = query(root, "row-agents-3");
  const agents4 = query(root, "row-agents-4");
  const orchestrator = query(root, "row-orchestrator");
  const infraRow = query(root, "row-infra");

  const segments: Segment[] = [];
  const dots: Dot[] = [];

  const addDot = (id: string, color: string, x: number, y: number) => {
    dots.push({ id, color, x, y });
  };

  // Vertical flow arrows between ovals
  if (client && platform && infra) {
    const clientBox = client.getBoundingClientRect();
    const platformBox = platform.getBoundingClientRect();
    const infraBox = infra.getBoundingClientRect();
    const x = clientBox.left + clientBox.width / 2 - rootRect.left;

    const mkArrow = (id: string, y1: number, y2: number) => {
      const tip = 7;
      segments.push({
        id,
        color: "#d3287a",
        arrow: true,
        d: `M ${x} ${y1} L ${x} ${y2 - tip} M ${x - 5} ${y2 - tip} L ${x} ${y2} L ${x + 5} ${y2 - tip}`,
      });
    };

    mkArrow(
      "arrow-1",
      clientBox.bottom - rootRect.top,
      platformBox.top - rootRect.top
    );
    mkArrow(
      "arrow-2",
      platformBox.bottom - rootRect.top,
      infraBox.top - rootRect.top
    );
  }

  if (client && apps) {
    const start = centerRight(client.getBoundingClientRect(), rootRect);
    const end = centerLeft(apps.getBoundingClientRect(), rootRect);
    segments.push({
      id: "pink",
      color: "#d3287a",
      d: `M ${start.x} ${end.y} L ${end.x} ${end.y}`,
    });
    addDot("pink-start", "#d3287a", start.x, end.y);
    addDot("pink-end", "#d3287a", end.x, end.y);
  }

  if (platform && agents3 && agents4 && orchestrator) {
    const oval = centerRight(platform.getBoundingClientRect(), rootRect);
    const a = centerLeft(agents3.getBoundingClientRect(), rootRect);
    const b = centerLeft(agents4.getBoundingClientRect(), rootRect);
    const c = centerLeft(orchestrator.getBoundingClientRect(), rootRect);

    // Platform oval is placed on the middle row center — connect there (2 dots)
    const joinY = b.y;
    const midX = oval.x + (Math.min(a.x, b.x, c.x) - oval.x) * 0.5;
    const yMin = Math.min(a.y, b.y, c.y);
    const yMax = Math.max(a.y, b.y, c.y);

    segments.push({
      id: "blue-in",
      color: "#426cff",
      d: `M ${oval.x} ${joinY} L ${b.x} ${joinY}`,
    });
    segments.push({
      id: "blue-spine",
      color: "#426cff",
      d: `M ${midX} ${yMin} L ${midX} ${yMax}`,
    });

    for (const [id, point] of [
      ["a", a],
      ["c", c],
    ] as const) {
      segments.push({
        id: `blue-${id}`,
        color: "#426cff",
        d: `M ${midX} ${point.y} L ${point.x} ${point.y}`,
      });
      addDot(`blue-${id}-end`, "#426cff", point.x, point.y);
      addDot(`blue-${id}-join`, "#426cff", midX, point.y);
    }

    addDot("blue-oval", "#426cff", oval.x, joinY);
    addDot("blue-box", "#426cff", b.x, joinY);
  }

  if (infra && infraRow) {
    const start = centerRight(infra.getBoundingClientRect(), rootRect);
    const end = centerLeft(infraRow.getBoundingClientRect(), rootRect);
    segments.push({
      id: "cyan",
      color: "#643595",
      d: `M ${start.x} ${end.y} L ${end.x} ${end.y}`,
    });
    addDot("cyan-start", "#643595", start.x, end.y);
    addDot("cyan-end", "#643595", end.x, end.y);
  }

  return { segments, dots };
}

export default function AgenticPlatformConnectors({
  containerRef,
}: {
  containerRef: RefObject<HTMLElement | null>;
}) {
  const [segments, setSegments] = useState<Segment[]>([]);
  const [dots, setDots] = useState<Dot[]>([]);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const measure = useCallback(() => {
    const root = containerRef.current;
    if (!root) return;

    if (window.matchMedia("(max-width: 1023px)").matches) {
      clearDesktopLayout(root);
      setSegments([]);
      setDots([]);
      setSize({ width: 0, height: 0 });
      return;
    }

    const rect = root.getBoundingClientRect();
    setSize({ width: rect.width, height: rect.height });
    const next = buildDiagram(root);
    setSegments(next.segments);
    setDots(next.dots);
  }, [containerRef]);

  useEffect(() => {
    measure();

    const root = containerRef.current;
    if (!root) return;

    const resizeObserver = new ResizeObserver(() => {
      measure();
    });
    resizeObserver.observe(root);

    window.addEventListener("resize", measure);
    const fontsReady = document.fonts?.ready?.then(() => measure());
    const t1 = window.setTimeout(measure, 350);
    const t2 = window.setTimeout(measure, 700);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      clearDesktopLayout(root);
      void fontsReady;
    };
  }, [containerRef, measure]);

  if (size.width === 0 || segments.length === 0) return null;

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      aria-hidden
    >
      {segments.map((segment) => (
        <path
          key={segment.id}
          d={segment.d}
          fill="none"
          stroke={segment.color}
          strokeWidth="2"
          strokeDasharray={segment.arrow ? undefined : "3 5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {dots.map((dot) => (
        <circle
          key={dot.id}
          cx={dot.x}
          cy={dot.y}
          r="4.5"
          fill={dot.color}
          style={{ filter: `drop-shadow(0 0 6px ${dot.color})` }}
        />
      ))}
    </svg>
  );
}
