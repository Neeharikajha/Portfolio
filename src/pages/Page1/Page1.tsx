import { useEffect, useState } from "react";

function DriftingWord({ children }: { children: string }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const animate = (now: number) => {
      const t = (now - start) / 1000;
      setPos({
        x: Math.sin(t * 0.4) * 18,
        y: Math.cos(t * 0.3) * 12,
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <span
      style={{
        fontFamily: "'Caveat', cursive",
        fontSize: "1.1rem",
        color: "#A01D15",
        opacity: 0.75,
        position: "absolute",
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: "transform 0.05s linear",
        whiteSpace: "nowrap",
        pointerEvents: "none",
      }}
    >
      {children}
    </span>
  );
}

function StillWord({
  children,
  style,
}: {
  children: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      style={{
        fontFamily: "'Caveat', cursive",
        fontSize: "1.1rem",
        color: "#A01D15",
        opacity: 0.7,
        position: "absolute",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export default function Page1() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* ── LEFT FLOWER DOODLE — 1.5x, irregular ── */}
      <svg
        viewBox="0 0 160 480"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          left: "-16rem",
          top: "-6rem",
          width: "150px",
          height: "450px",
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        <g
          stroke="#A01D15"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* wobbly stem */}
          <path
            d="M80 470 C77 430, 83 400, 74 363 C67 333, 63 302, 66 268 C69 238, 64 208, 68 175 C71 150, 65 123, 69 96"
            strokeWidth="1.8"
          />
          {/* left leaf — irregular blob */}
          <path
            d="M68 288 C50 272, 27 254, 15 233 C5 216, 7 198, 17 190 C27 183, 41 191, 51 203 C60 214, 65 240, 68 288"
            strokeWidth="1.6"
          />
          {/* left leaf vein */}
          <path
            d="M68 288 C47 260, 27 228, 17 200"
            strokeWidth="0.9"
            opacity="0.55"
          />
          {/* right leaf — uneven */}
          <path
            d="M68 232 C88 214, 107 197, 116 182 C124 170, 123 156, 115 149 C106 142, 94 148, 84 159 C74 170, 67 194, 68 232"
            strokeWidth="1.6"
          />
          {/* right leaf vein */}
          <path
            d="M68 232 C90 204, 110 174, 116 154"
            strokeWidth="0.9"
            opacity="0.55"
          />
          {/* petal 1 — left lean */}
          <path
            d="M66 98 C53 83, 38 66, 30 50 C24 38, 26 27, 35 23 C44 19, 54 28, 60 42 C64 53, 65 76, 66 98"
            strokeWidth="1.5"
          />
          {/* petal 2 — slightly off-top */}
          <path
            d="M66 98 C67 79, 70 58, 76 43 C82 30, 92 24, 99 30 C106 37, 104 50, 96 61 C89 71, 76 86, 66 98"
            strokeWidth="1.5"
          />
          {/* petal 3 — far right drooping */}
          <path
            d="M66 98 C82 83, 97 70, 105 55 C111 43, 110 32, 102 27 C94 23, 83 31, 76 44 C70 55, 67 78, 66 98"
            strokeWidth="1.4"
            opacity="0.85"
          />
          {/* petal 4 — far left irregular */}
          <path
            d="M66 98 C50 85, 34 75, 26 60 C20 48, 22 37, 30 33 C38 29, 49 37, 55 50 C60 61, 64 81, 66 98"
            strokeWidth="1.4"
            opacity="0.85"
          />
          {/* flower centre — slightly off-circle */}
          <path
            d="M66 70 C73 66, 79 70, 80 77 C81 84, 77 90, 70 91 C63 92, 58 87, 57 80 C56 73, 60 72, 66 70Z"
            strokeWidth="1.4"
          />
          {/* centre hatch */}
          <path
            d="M60 75 C64 72, 70 71, 75 74"
            strokeWidth="0.8"
            opacity="0.65"
          />
          <path
            d="M59 82 C63 87, 70 88, 75 85"
            strokeWidth="0.8"
            opacity="0.65"
          />
          {/* lower side bud */}
          <path
            d="M72 355 C88 338, 98 320, 91 305 C85 293, 73 297, 72 355"
            strokeWidth="1.5"
          />
          <path
            d="M72 355 C62 336, 54 318, 60 303"
            strokeWidth="0.9"
            opacity="0.5"
          />
          {/* extra wobbly bump on stem */}
          <path
            d="M67 172 C55 158, 48 143, 55 132"
            strokeWidth="1.2"
            opacity="0.55"
          />
        </g>
      </svg>

      {/* ── TOP-RIGHT HEART DOODLE — 1.5x, scrawly ── */}
      <svg
        viewBox="0 0 120 110"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "-5.5rem",
          right: "-9rem",
          width: "108px",
          height: "100px",
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        <g
          stroke="#A01D15"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* heart outline — uneven halves */}
          <path
            d="M60 34 C56 21, 45 11, 33 13 C21 15, 13 26, 15 39 C17 50, 26 61, 37 70 C44 77, 52 83, 60 92 C68 83, 77 77, 84 70 C95 61, 103 50, 103 38 C103 25, 94 14, 83 14 C71 14, 64 25, 60 34Z"
            strokeWidth="1.8"
          />
          {/* inner wobbly texture line */}
          <path
            d="M60 42 C57 33, 50 27, 43 29 C36 31, 34 40, 38 49 C42 56, 50 64, 60 73"
            strokeWidth="0.9"
            opacity="0.5"
          />
          {/* left decorative leaf */}
          <path
            d="M22 21 C10 10, -2 2, 0 -8 C2 -16, 13 -13, 18 -2 C22 6, 22 15, 22 21"
            strokeWidth="1.5"
          />
          {/* left leaf vein */}
          <path d="M22 21 C12 7, 4 -5, 3 -10" strokeWidth="0.8" opacity="0.6" />
          {/* right decorative leaf */}
          <path
            d="M98 20 C110 9, 122 1, 120 -9 C118 -17, 107 -14, 102 -3 C98 5, 98 14, 98 20"
            strokeWidth="1.5"
          />
          {/* right leaf vein */}
          <path
            d="M98 20 C108 6, 116 -6, 117 -11"
            strokeWidth="0.8"
            opacity="0.6"
          />
          {/* extra wobbly curl near bottom left of heart */}
          <path
            d="M28 55 C20 64, 16 75, 20 82"
            strokeWidth="1.1"
            opacity="0.55"
          />
        </g>
      </svg>

      {/* Floating labels */}
      <StillWord style={{ top: "-2.5rem", left: "-6rem" }}>app</StillWord>
      <StillWord style={{ top: "-1.8rem", right: "-5rem" }}>sketches</StillWord>
      <StillWord style={{ bottom: "2rem", right: "-6rem" }}>graphics</StillWord>
      <div style={{ position: "absolute", bottom: "2.2rem", left: "-5rem" }}>
        <DriftingWord>web</DriftingWord>
      </div>

      {/* ── MAIN NAME ── */}
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
          marginBottom: "0.2em",
        }}
      >
        Neeeharika
        {/* Hand-drawn underline */}
        <svg
          viewBox="0 0 500 40"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            bottom: "-0.15em",
            left: "0",
            width: "110%",
            height: "40px",
            overflow: "visible",
          }}
        >
          <path
            d="M4 12 C45 5, 100 18, 155 10 C210 3, 265 16, 320 10 C360 6, 395 14, 430 8"
            stroke="#A01D15"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M8 16 C52 10, 108 20, 162 14 C218 8, 272 18, 328 13 C365 10, 398 17, 432 12"
            stroke="#A01D15"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M390 8 C420 -2, 455 12, 478 2 C492 -4, 500 8, 496 14"
            stroke="#A01D15"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M400 13 C428 20, 460 8, 480 18 C490 24, 494 14, 497 20"
            stroke="#A01D15"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </h1>

      {/* ── SUBTITLES ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0.15rem",
          marginTop: "1.6rem",
          alignSelf: "flex-start",
          paddingLeft: "0.3rem",
        }}
      >
        <p
          style={{
            fontFamily: "'Manic', serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
            fontWeight: 700,
            color: "#A01D15",
            letterSpacing: "0.04em",
            opacity: 0.95,
            margin: 0,
          }}
        >
          Software developer
        </p>
        <p
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
            color: "#A01D15",
            letterSpacing: "0.06em",
            opacity: 0.65,
            margin: 0,
          }}
        >
          designs too ✦
        </p>
      </div>
    </div>
  );
}
