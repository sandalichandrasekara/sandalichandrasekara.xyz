import { ImageResponse } from "next/og";

export const alt = "Sandali Chandrasekara — DevOps Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 32,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#2563eb",
            fontWeight: 600,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#0f172a",
            marginTop: 16,
            lineHeight: 1.05,
          }}
        >
          Sandali Chandrasekara
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#475569",
            marginTop: 24,
            maxWidth: 900,
          }}
        >
          DevOps Engineer — cloud infrastructure, CI/CD automation, and
          reliable, scalable systems.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 16,
            background: "linear-gradient(90deg, #2563eb, #60a5fa)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
