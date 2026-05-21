export default function Navbar({
  scrollY,
  heroHeight,
}: {
  scrollY: number;
  heroHeight: number;
}) {
  const visible = scrollY > heroHeight; // 👈 KEY FIX

  const linkStyle: React.CSSProperties = {
    fontFamily: "'Manic', serif",
    fontSize: "1.45rem", // 🔼 increased size
    color: "#A01D15",
    textDecoration: "none",
    letterSpacing: "0.03em",
    opacity: 0.95,
    cursor: "none",
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
        <a href="#projects" style={linkStyle}>
          projects
        </a>
        <a href="#about" style={linkStyle}>
          about
        </a>
      </div>

      <div style={{ width: "90px" }} />

      {/* CENTER NAME */}
      <span
        style={{
          fontFamily: "'Manic', serif",
          fontSize: "2rem", // 🔼 bigger name
          color: "#A01D15",
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
        }}
      >
        Neeharika
      </span>

      <div style={{ width: "90px" }} />

      {/* RIGHT */}
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <a href="#resume" style={linkStyle}>
          resume
        </a>

        {/* Contact */}
        <span style={{ position: "relative", display: "inline-flex" }}>
          <a
            href="#contact"
            style={{
              ...linkStyle,
              padding: "0.15rem 0.7rem",
              position: "relative",
              zIndex: 2,
            }}
          >
            contact
          </a>

          {/* Oval */}
          <svg
            viewBox="0 0 96 38"
            style={{
              position: "absolute",
              left: "-4px",
              top: "-5px",
              width: 96,
              height: 38,
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
