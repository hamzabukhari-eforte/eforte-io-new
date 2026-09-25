import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "eForte Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#0A0A1A",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#D3287A",
            marginBottom: 24,
          }}
        >
          eForte Solutions
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          AI-augmented software and intelligent workflows
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#A0A0C0",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Data, AI, and enterprise delivery for regulated industries
        </div>
      </div>
    ),
    { ...size }
  );
}
