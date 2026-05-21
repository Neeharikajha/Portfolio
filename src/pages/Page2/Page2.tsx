import React from "react";
import flower from "../../assets/flower.svg";
import leftFlower from "../../assets/myprojectleft.svg";
import rightFlower from "../../assets/myprojectright.svg";
import MPM from "../../assets/myprojectmid.svg";
import MPB from "../../assets/myprojectside.svg";

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
  const tallW = 450;
  const tallH = 550;
  const landW = 400;
  const landH = 500;

  const card2W = 400;
  const card2H = 300;

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
      <div
        style={{
          position: "relative",
          display: "inline-block",
          marginBottom: "3rem",
        }}
      >
        {/* LEFT SVG */}
        <img
          src={leftFlower}
          alt="left decoration"
          style={{
            position: "absolute",
            left: "-220px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "170px",
            pointerEvents: "none",
          }}
        />

        {/* HEADING */}
        <h2
          style={{
            fontFamily: "'Manic', serif",
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            color: "#A01D15",
            letterSpacing: "0.04em",
            WebkitTextStroke: "3px #D4A99A",
            paintOrder: "stroke fill",
            lineHeight: 1,
            textTransform: "uppercase",
            textAlign: "center",
            margin: 0,
          }}
        >
          My
          <br />
          Projects
        </h2>

        {/* RIGHT SVG */}
        <img
          src={rightFlower}
          alt="right decoration"
          style={{
            position: "absolute",
            right: "-220px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "170px",
            pointerEvents: "none",
          }}
        />
      </div>

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
        <div
          style={{
            position: "absolute",
            left: -90,
            top: 0,
            width: tallW,
            height: tallH,
            transform: "rotate(0deg)",
            zIndex: 1,
          }}
        >
          <Card card={cards[0]} style={{ width: "100%", height: "100%" }} />

          {/* 🌸 Flower SVG */}
          <img
            src={flower}
            alt="flower"
            style={{
              position: "absolute",
              bottom: -60, // push slightly outside
              left: -90, // push slightly outside
              width: "120px",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Card 02 — top right, landscape, pushed down */}
        <Card
          card={cards[1]}
          style={{
            position: "absolute",
            left: col2X,
            top: 42,
            width: card2W,
            height: card2H,
            transform: "rotate(0deg)",
            zIndex: 4,
          }}
        />

        {/* Card 03 — bottom left, tall, shifted right ~12% */}
        <div
          style={{
            position: "absolute",
            left: Math.round(tallW * 0.12),
            top: tallH + 28,
            width: tallW,
            height: tallH,
            zIndex: 2,
          }}
        >
          <Card card={cards[2]} style={{ width: "100%", height: "100%" }} />

          {/* 🌿 Side SVG */}
          <img
            src={MPB}
            alt="side decoration"
            style={{
              position: "absolute",
              right: -310, // hangs slightly outside
              top: "50%",
              transform: "translateY(-50%)",
              width: "890px",
              pointerEvents: "none",
              zIndex: -1,
            }}
          />
        </div>

        {/* Card 04 — bottom right, landscape */}
        <Card
          card={cards[3]}
          style={{
            position: "absolute",
            left: col2X + 90,
            top: tallH - 280,
            width: landW,
            height: landH,
            transform: "rotate(-0.5deg)",
            zIndex: 3,
          }}
        />

        <img
          src={MPM}
          alt="middle decoration"
          style={{
            position: "absolute",
            left: col2X - 40,
            top: tallH - 100,
            transform: "translate(-50%, -50%)",
            width: "180px",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      </div>
    </section>
  );
}
