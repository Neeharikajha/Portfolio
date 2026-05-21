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
        <span style={{ position: "relative", display: "inline-flex" }}>
          <button
            type="button"
            onClick={() => onNavigate("footer")}
            style={{
              ...linkStyle,
              padding: "0.45rem 0.9rem",
              position: "relative",
              zIndex: 2,
              border: "none",
              background: "transparent",
              lineHeight: 1.05,
              marginTop: "4px",
            }}
          >
            contact
          </button>

          {/* Oval */}
          <svg
            viewBox="0 0 96 38"
            style={{
              position: "absolute",
              left: "-8px",
              top: "-8px",
              width: 104,
              height: 46,
              pointerEvents: "none",
            }}
          >
            <path
              d="M48 4 C22 2, 5 9, 4 19 C3 29, 20 35, 48 34 C76 33, 93 27, 92 18 C91 8, 74 3, 48 4Z"
              stroke="#6F0F0A"
              strokeWidth="1.7"
              fill="none"
            />
          </svg>

          {/* Star top right */}
          <svg
            viewBox="0 0 16 16"
            style={{
              position: "absolute",
              top: "-14px",
              right: "-12px",
              width: 13,
              pointerEvents: "none",
            }}
          >
            <path
              d="M8 1 L9.2 6.2 L14 8 L9.2 9.8 L8 15 L6.8 9.8 L2 8 L6.8 6.2Z"
              stroke="#6F0F0A"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>

          {/* Star bottom left */}
          <svg
            viewBox="0 0 16 16"
            style={{
              position: "absolute",
              bottom: "-14px",
              left: "-14px",
              width: 11,
              pointerEvents: "none",
            }}
          >
            <path
              d="M8 1 L9.2 6.2 L14 8 L9.2 9.8 L8 15 L6.8 9.8 L2 8 L6.8 6.2Z"
              stroke="#6F0F0A"
              strokeWidth="1.1"
              fill="none"
            />
          </svg>
        </span>
      </div>
    </nav>
  );
}
