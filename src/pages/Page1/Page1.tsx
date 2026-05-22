import line from "../../assets/HeroUnderline.svg";
import OSL from "../../assets/HeroSparkOuter.svg";
import ISL from "../../assets/HeroSparkInner.svg";
import create from "../../assets/Create.svg";
import build from "../../assets/Build.svg";
import heroFlower from "../../assets/HeroFlower.svg";

export default function Page1() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        {/* 🌸 RIGHT FLOWER */}
        <img
          src={heroFlower}
          alt="flower"
          style={{
            position: "absolute",
            right: "-360px", // 👉 move left/right
            top: "-100%", // 👉 move up/down
            width: "280px", // 👉 size
            pointerEvents: "none",
          }}
        />

        {/* ✨ SPARK INNER (ISL) */}
        <img
          src={ISL}
          alt="spark inner"
          style={{
            position: "absolute",
            left: "-60px", // 👉 horizontal adjust
            top: "-50px", // 👉 vertical adjust
            width: "100px",
            zIndex: 1,
          }}
        />

        {/* ✨ SPARK OUTER (OSL) */}
        <img
          src={OSL}
          alt="spark outer"
          style={{
            position: "absolute",
            left: "-160px",
            top: "-140px",
            width: "160px",
            zIndex: 2,
          }}
        />

        {/* ✍️ CREATE (on top of sparks) */}
        <img
          src={create}
          alt="create"
          style={{
            position: "absolute",
            left: "-140px",
            top: "-150px",
            width: "90px",
            zIndex: 3,
          }}
        />

        {/* 📝 MAIN TEXT */}
        <h1
          style={{
            fontFamily: "'Manic', serif",
            fontSize: "clamp(5.5rem, 14vw, 11.5rem)",
            color: "#A01D15",
            lineHeight: 1,
            letterSpacing: "0.02em",
            WebkitTextStroke: "6px #D4A99A",
            paintOrder: "stroke fill",
            position: "relative",
            margin: 0,
          }}
        >
          Neeharika
        </h1>

        {/* ➖ LINE (under "harika") */}
        <img
          src={line}
          alt="underline"
          style={{
            position: "absolute",
            left: "50%", // 👉 controls where "harika" starts
            bottom: "-35px", // 👉 distance below text
            width: "360px",
          }}
        />

        {/* 🔨 BUILD (at end of line) */}
        <img
          src={build}
          alt="build"
          style={{
            position: "absolute",
            left: "100%", // 👉 aligns to end of line
            bottom: "-55px",
            width: "90px",
          }}
        />
      </div>
    </div>
  );
}
