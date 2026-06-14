import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Elevare School Intelligence";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f8f5ef",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "#16231f",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#9a7338",
            marginBottom: 32,
          }}
        >
          Elevare School Intelligence
        </div>

        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          AI-enabled evaluation ecosystems for premium schools
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 30,
            color: "#4f5c56",
          }}
        >
          elevaresi.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}