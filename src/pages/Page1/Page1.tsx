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
          marginTop: "40px",
        }}
      >
        {/* 🌸 RIGHT FLOWER */}
        <img
          src={heroFlower}
          alt="flower"
          style={{
            position: "absolute",
            right: "-360px",
            top: "-100%",
            width: "280px",
            pointerEvents: "none",
          }}
        />

        {/* ✨ SPARK INNER */}
        <img
          src={ISL}
          alt="spark inner"
          style={{
            position: "absolute",
            left: "-60px",
            top: "-50px",
            width: "100px",
            zIndex: 1,
          }}
        />

        {/* ✨ SPARK OUTER */}
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

        {/* ✍️ CREATE */}
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

        {/* 🔼 ABOVE H → WEB */}
        <div
          style={{
            position: "absolute",
            left: "38%", // tweak if needed
            top: "-40px",
            fontFamily: "'Manic', serif",
            fontSize: "32px",
            color: "#A01D15",
          }}
        >
          web
        </div>

        {/* 🔼 ABOVE A → APP */}
        <div
          style={{
            position: "absolute",
            left: "100%", // tweak if needed
            top: "15px",
            fontFamily: "'Manic', serif",
            fontSize: "32px",
            color: "#A01D15",
          }}
        >
          app
        </div>

        {/* ➖ LINE */}
        <img
          src={line}
          alt="underline"
          style={{
            position: "absolute",
            left: "50%",
            bottom: "-35px",
            width: "360px",
          }}
        />

        {/* 🔨 BUILD */}
        <img
          src={build}
          alt="build"
          style={{
            position: "absolute",
            left: "100%",
            bottom: "-55px",
            width: "90px",
          }}
        />

        {/* 🔽 BELOW SCRIBBLE → & MORE */}
        <div
          style={{
            position: "absolute",
            left: "65%",
            bottom: "-85px",
            fontFamily: "'Manic', serif",
            fontSize: "16px",
            color: "#A01D15",
          }}
        >
          & more
        </div>

        {/* 👇 BELOW "N" → SUBTEXT */}
        <div
          style={{
            position: "absolute",
            left: "0%",
            bottom: "-120px",
            fontFamily: "Manic",
            fontSize: "32px",
            color: "#A01D15",
            lineHeight: "1",
          }}
        >
          Developer & <br /> designer
        </div>
      </div>
    </div>
  );
}
