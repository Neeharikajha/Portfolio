export default function Navbar({
  scrollY,
  heroHeight,
  page,
  onNavigate,
}: {
  scrollY: number;
  heroHeight: number;
  page: "home" | "projects" | "footer" | "about";
  onNavigate: (page: "home" | "projects" | "footer" | "about") => void;
}) {
  const visible = page !== "home" || scrollY > heroHeight;

  const linkStyle: React.CSSProperties = {
    fontFamily: "'Manic', serif",
    fontSize: "1.45rem", // 🔼 increased size
    color: "#A01D15",
    textDecoration: "none",
    letterSpacing: "0.03em",
    opacity: 0.95,
    cursor: "pointer",
    background: "transparent",
    border: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0.9rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.5s ease",
      }}
    >
      {/* LEFT */}
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <button
          type="button"
          onClick={() => onNavigate("projects")}
          style={{
            ...linkStyle,
            background: "transparent",
            border: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
          }}
        >
          projects
        </button>
        <button
          type="button"
          onClick={() => onNavigate("about")}
          style={{
            ...linkStyle,
            background: "transparent",
            border: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
          }}
        >
          about
        </button>
      </div>

      <div style={{ width: "90px" }} />

      {/* CENTER NAME */}
      <button
        type="button"
        onClick={() => onNavigate("home")}
        style={{
          fontFamily: "'Manic', serif",
          fontSize: "2rem",
          color: "#A01D15",
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
          border: "none",
          background: "transparent",
          cursor: "none",
        }}
      >
        Neeharika
      </button>

      <div style={{ width: "90px" }} />

      {/* RIGHT */}
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <a href="#resume" style={linkStyle}>
          resume
        </a>

        {/* Contact */}
        <span
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.2rem 0.4rem",
          }}
        >
          <button
            type="button"
            onClick={() => onNavigate("footer")}
            style={{
              ...linkStyle,
              position: "relative",
              zIndex: 2,
              border: "none",
              background: "transparent",
              lineHeight: 1,
              color: "#A01D15",
            }}
          >
            contact
          </button>

          {/* MAIN SCRIBBLE */}
          <svg
            viewBox="0 0 140 80"
            style={{
              position: "absolute",
              width: "160px",
              height: "80px",
              left: "-30px",
              top: "-20px",
              pointerEvents: "none",
              overflow: "visible",
            }}
          >
            {/* TOP OVAL */}
            <path
              d="M32 28
         C45 8, 98 6, 112 24
         C120 36, 108 48, 76 50
         C42 52, 18 44, 20 30
         C21 22, 24 18, 32 28Z"
              stroke="#A01D15"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* SECOND OVAL */}
            <path
              d="M24 36
         C36 20, 96 18, 110 34
         C116 44, 102 56, 70 58
         C36 60, 14 52, 15 40
         C16 32, 18 28, 24 36Z"
              stroke="#A01D15"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
              opacity="0.95"
            />

            {/* UNDERLINE 1 */}
            <path
              d="M40 63 C58 68, 86 66, 118 60"
              stroke="#A01D15"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* UNDERLINE 2 */}
            <path
              d="M46 70 C70 72, 96 69, 126 64"
              stroke="#A01D15"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* TOP STAR */}
          <svg
            viewBox="0 0 16 16"
            style={{
              position: "absolute",
              top: "-16px",
              right: "-14px",
              width: 13,
              pointerEvents: "none",
            }}
          >
            <path
              d="M8 1 L9.2 6.2 L14 8 L9.2 9.8 L8 15 L6.8 9.8 L2 8 L6.8 6.2Z"
              stroke="#A01D15"
              strokeWidth="1.3"
              fill="none"
            />
          </svg>

          {/* BOTTOM STAR */}
          <svg
            viewBox="0 0 16 16"
            style={{
              position: "absolute",
              bottom: "-16px",
              left: "-14px",
              width: 11,
              pointerEvents: "none",
            }}
          >
            <path
              d="M8 1 L9.2 6.2 L14 8 L9.2 9.8 L8 15 L6.8 9.8 L2 8 L6.8 6.2Z"
              stroke="#A01D15"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
        </span>
      </div>
    </nav>
  );
}
