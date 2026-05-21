// Replace these URLs with your own images later
const photoUrls = [
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
];

interface PhotoConfig {
  url: string;
  style: {
    top: number;
    left: number;
    width: number;
    height: number;
    rotate: number;
    zIndex: number;
  };
  clip: "red" | "yellow" | null;
}

const photos: PhotoConfig[] = [
  {
    url: photoUrls[0],
    style: {
      top: 120,
      left: 80,
      width: 160,
      height: 200,
      rotate: -12,
      zIndex: 2,
    },
    clip: "red",
  },
  {
    url: photoUrls[1],
    style: {
      top: 90,
      left: 200,
      width: 150,
      height: 190,
      rotate: 8,
      zIndex: 5,
    },
    clip: null,
  },
  {
    url: photoUrls[2],
    style: {
      top: 160,
      left: 310,
      width: 140,
      height: 180,
      rotate: -5,
      zIndex: 3,
    },
    clip: null,
  },
  {
    url: photoUrls[3],
    style: {
      top: 100,
      left: 420,
      width: 155,
      height: 200,
      rotate: 6,
      zIndex: 6,
    },
    clip: null,
  },
  {
    url: photoUrls[4],
    style: {
      top: 140,
      left: 540,
      width: 145,
      height: 185,
      rotate: -8,
      zIndex: 4,
    },
    clip: "yellow",
  },
  {
    url: photoUrls[5],
    style: {
      top: 110,
      left: 650,
      width: 160,
      height: 205,
      rotate: 10,
      zIndex: 7,
    },
    clip: null,
  },
  {
    url: photoUrls[6],
    style: {
      top: 180,
      left: 770,
      width: 140,
      height: 175,
      rotate: -3,
      zIndex: 3,
    },
    clip: null,
  },
  {
    url: photoUrls[7],
    style: {
      top: 130,
      left: 880,
      width: 150,
      height: 195,
      rotate: 7,
      zIndex: 5,
    },
    clip: null,
  },
];

export default function AboutCollage() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#ebe3d1",
      }}
    >
      {/* Grain */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          mixBlendMode: "multiply",
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Top title */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 62,
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
        }}
      >
        <h1
          style={{
            fontFamily: "'Manic', serif",
            fontSize: 26,
            textTransform: "uppercase",
            letterSpacing: "0.32em",
            color: "#A01D15",
            margin: 0,
          }}
        >
          It&apos;s a pleasure to meet you!
        </h1>
      </div>

      {/* Subtitle + dash + arrow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 108,
          transform: "translateX(-8%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <p
            style={{
              fontFamily: "'Manic', serif",
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: "0.26em",
              color: "#A01D15",
              margin: 0,
            }}
          >
            Neeharika, Software Developer
          </p>
          <div
            style={{
              height: 5,
              width: 80,
              borderRadius: 9999,
              backgroundColor: "#A01D15",
              transform: "rotate(-1deg)",
            }}
          />
        </div>
        <svg
          style={{ position: "absolute", left: 110, top: 28 }}
          width="42"
          height="60"
          viewBox="0 0 42 60"
          fill="none"
        >
          <path
            d="M10 8C10 8 22 24 22 48"
            stroke="#A01D15"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M15 41L22 49L29 41"
            stroke="#A01D15"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Photo collage */}
      <div
        style={{
          position: "relative",
          margin: "0 auto",
          minHeight: "100vh",
          width: 760,
        }}
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: photo.style.top,
              left: photo.style.left,
              width: photo.style.width,
              height: photo.style.height,
              backgroundColor: "rgba(255,255,255,0.85)",
              padding: 9,
              boxShadow: "0 10px 28px rgba(0,0,0,0.13)",
              zIndex: photo.style.zIndex,
              transform: `rotate(${photo.style.rotate}deg)`,
              transition: "transform 0.35s ease, box-shadow 0.35s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = `rotate(${photo.style.rotate}deg) scale(1.05)`;
              el.style.boxShadow = "0 22px 44px rgba(0,0,0,0.22)";
              el.style.zIndex = "20";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = `rotate(${photo.style.rotate}deg) scale(1)`;
              el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.13)";
              el.style.zIndex = String(photo.style.zIndex);
            }}
          >
            <img
              src={photo.url}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(1)",
              }}
            />

            {photo.clip === "red" && (
              <div
                style={{
                  position: "absolute",
                  left: -18,
                  top: 18,
                  height: 12,
                  width: 40,
                  borderRadius: 9999,
                  border: "4px solid #c52d2d",
                  transform: "rotate(-16deg)",
                }}
              />
            )}
            {photo.clip === "yellow" && (
              <div
                style={{
                  position: "absolute",
                  left: -14,
                  top: 16,
                  height: 12,
                  width: 40,
                  borderRadius: 9999,
                  border: "4px solid #efbc2d",
                  transform: "rotate(18deg)",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Bottom left — Location */}
      <div style={{ position: "absolute", bottom: 100, left: 160 }}>
        <p
          style={{
            fontFamily: "'Manic', serif",
            fontSize: 20,
            textTransform: "uppercase",
            letterSpacing: "0.24em",
            color: "#A01D15",
            marginBottom: 10,
            textDecoration: "underline",
            textUnderlineOffset: 4,
            margin: "0 0 10px 0",
          }}
        >
          Location:
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 8,
          }}
        >
          <p
            style={{
              fontFamily: "'Manic', serif",
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#A01D15",
              margin: 0,
            }}
          >
            India
          </p>
          <div
            style={{
              height: 5,
              width: 90,
              borderRadius: 9999,
              backgroundColor: "#A01D15",
              transform: "rotate(-2deg)",
            }}
          />
        </div>
      </div>

      {/* Bottom right — molecule scribble */}
      <svg
        style={{ position: "absolute", bottom: 95, right: 160 }}
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
      >
        <path
          d="M10 50C10 50 18 28 35 28C52 28 52 55 70 55C83 55 80 30 80 30"
          stroke="#A01D15"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="10" cy="50" r="5" stroke="#A01D15" strokeWidth="2.2" />
        <circle cx="35" cy="28" r="5" stroke="#A01D15" strokeWidth="2.2" />
        <circle cx="70" cy="55" r="5" stroke="#A01D15" strokeWidth="2.2" />
        <circle cx="80" cy="30" r="5" stroke="#A01D15" strokeWidth="2.2" />
      </svg>

      {/* Right — triple offset circles */}
      <div
        style={{
          position: "absolute",
          right: 220,
          top: 340,
          transform: "rotate(-15deg)",
          width: 44,
          height: 44,
        }}
      >
        {[
          { x: 0, y: 0 },
          { x: 6, y: -4 },
          { x: -5, y: 5 },
        ].map((offset, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "2px solid #A01D15",
              transform: `translate(${offset.x}px, ${offset.y}px)`,
            }}
          />
        ))}
      </div>

      {/* Left — leaf scribble */}
      <svg
        style={{
          position: "absolute",
          bottom: 165,
          left: 205,
          transform: "rotate(-14deg)",
        }}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M10 22C12 10 25 10 27 20C29 30 12 30 10 22Z"
          stroke="#A01D15"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M8 12L20 24"
          stroke="#A01D15"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
}
