import React from "react";

const cards = [
  { bg: "#C4A882", label: "Project 01", aspect: "portrait" },
  { bg: "#B8956A", label: "Project 02", aspect: "landscape" },
  { bg: "#8C6E52", label: "Project 03", aspect: "portrait" },
  { bg: "#6B4F38", label: "Project 04", aspect: "landscape" },
];

function Card({
  card,
  style,
}: {
  card: (typeof cards)[0];
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "relative",
        boxShadow: "3px 5px 18px rgba(100,50,30,0.18)",
        borderRadius: "2px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "none",
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform =
          (style?.transform ?? "") + " scale(1.03)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "6px 10px 28px rgba(100,50,30,0.28)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform =
          style?.transform ?? "";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "3px 5px 18px rgba(100,50,30,0.18)";
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(160deg, ${card.bg} 40%, rgba(160,29,21,0.2))`,
          display: "flex",
          alignItems: "flex-end",
          padding: "0.7rem",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            fontFamily: "'Manic', serif",
            fontSize: "0.82rem",
            color: "#EBE3D1",
            opacity: 0.75,
            letterSpacing: "0.06em",
          }}
        >
          {card.label}
        </span>
      </div>
    </div>
  );
}

export default function Page2() {
  // Dimensions matching image 4 proportions
  const tallW = 195;
  const tallH = 255;
  const landW = 255;
  const landH = 178;

  // Positions: left col x=0, right col x=tallW+40
  const col2X = tallW + 40;

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Manic', serif",
          fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
          color: "#A01D15",
          letterSpacing: "0.04em",
          WebkitTextStroke: "3px #D4A99A",
          paintOrder: "stroke fill",
          marginBottom: "3rem",
          lineHeight: 1,
          textTransform: "uppercase",
          alignSelf: "center",
        }}
      >
        My Projects
      </h2>

      {/*
        Exact layout from image 4:
        Left col: card1 (tall) top, card3 (tall) below — slightly offset right
        Right col: card2 (landscape) pushed down ~40px, card4 (landscape) below
        Total grid width = tallW + gap + landW
      */}
      <div
        style={{
          position: "relative",
          width: tallW + 40 + landW,
          height: tallH + 30 + tallH,
        }}
      >
        {/* Card 01 — top left, tall, slight left tilt */}
        <Card
          card={cards[0]}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: tallW,
            height: tallH,
            transform: "rotate(-1.2deg)",
          }}
        />

        {/* Card 02 — top right, landscape, pushed down */}
        <Card
          card={cards[1]}
          style={{
            position: "absolute",
            left: col2X,
            top: 42,
            width: landW,
            height: landH,
            transform: "rotate(0.7deg)",
          }}
        />

        {/* Card 03 — bottom left, tall, shifted right ~12% */}
        <Card
          card={cards[2]}
          style={{
            position: "absolute",
            left: Math.round(tallW * 0.12),
            top: tallH + 28,
            width: tallW,
            height: tallH,
            transform: "rotate(1deg)",
          }}
        />

        {/* Card 04 — bottom right, landscape */}
        <Card
          card={cards[3]}
          style={{
            position: "absolute",
            left: col2X,
            top: tallH + 50,
            width: landW,
            height: landH,
            transform: "rotate(-0.5deg)",
          }}
        />
      </div>
    </section>
  );
}
