export default function Page1() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontFamily: "'Manic', serif",
          fontSize: "clamp(4rem, 12vw, 10rem)",
          color: "#A01D15",
          lineHeight: 1,
          letterSpacing: "0.02em",
          // Subtle text shadow for depth on the cream bg
          textShadow: "2px 4px 0px rgba(160, 29, 21, 0.15)",
        }}
      >
        Neeharika
      </h1>
    </div>
  );
}
