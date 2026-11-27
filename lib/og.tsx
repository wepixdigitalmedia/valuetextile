import { ImageResponse } from "next/og";

/** Social share image drawn from text, so it needs no logo file. Swap in the new logo when it exists. */
export function renderShareImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111111",
          color: "#FFFFFF",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, letterSpacing: 6 }}>
          <div style={{ width: 56, height: 6, background: "#CF3A1B" }} />
          <div>KNIT TO SHIPPED</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3 }}>VALUE TEXTILES.</div>
          <div style={{ marginTop: 28, fontSize: 40, color: "#D7D7D2", lineHeight: 1.25 }}>
            One partner, from knit to shipped. Integrated knitwear production in Tiruppur, India.
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
