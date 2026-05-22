import FooterCurl from "../../assets/FooterCurl.svg";

export default function Footer() {
  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 16px)",
        paddingTop: "16px",
        // paddingLeft: "160px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        fontFamily: "'Manic', serif",
        color: "#A01D15",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "160px",
          top: 0,
          height: "100%",
          width: "140px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <img
          src={FooterCurl}
          alt="footer curl"
          style={{
            height: "100%",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Top-left */}
      <span
        style={{
          position: "absolute",
          top: "2.5rem",
          left: "3rem",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          opacity: 0.6,
          fontFamily: "'Caveat', cursive",
        }}
      >
        THANK YOU!
      </span>

      {/* Top-right */}
      <div
        style={{
          position: "absolute",
          top: "2.5rem",
          right: "3rem",
          textAlign: "right",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          opacity: 0.6,
          fontFamily: "'Caveat', cursive",
          lineHeight: 1.6,
        }}
      >
        <div>Check Github</div>
        <div>Neeharikajha</div>
      </div>

      {/* Two-person credits */}
      <div
        style={{
          display: "flex",
          gap: "1.8rem",
          alignItems: "flex-start",
          marginBottom: "1.8rem",
        }}
      >
        {/* Me */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {/* Avatar circle */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              backgroundColor: "#C4A882",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Replace src with your actual photo */}
            <span style={{ fontSize: "1.6rem", opacity: 0.5 }}>N</span>
          </div>
          <span
            style={{
              fontFamily: "'Manic', serif",
              fontSize: "1.05rem",
              letterSpacing: "0.06em",
              color: "#A01D15",
              marginTop: "0.2rem",
            }}
          >
            NEEHARIKA
          </span>
          <span
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "0.9rem",
              color: "#A01D15",
              opacity: 0.65,
              letterSpacing: "0.03em",
            }}
          >
            designer / developer
          </span>
        </div>

        {/* LinkedIn */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {/* LinkedIn circle */}
          <a
            href="https://www.linkedin.com/in/neeharikajha/"
            target="_blank"
            rel="noreferrer"
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              backgroundColor: "#0A66C2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              cursor: "none",
              flexShrink: 0,
            }}
          >
            {/* LinkedIn "in" SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <span
            style={{
              fontFamily: "'Manic', serif",
              fontSize: "1.05rem",
              letterSpacing: "0.06em",
              color: "#A01D15",
              marginTop: "0.2rem",
            }}
          >
            LINKEDIN
          </span>
          <span
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "0.9rem",
              color: "#A01D15",
              opacity: 0.65,
              letterSpacing: "0.03em",
            }}
          >
            connect
          </span>
        </div>
      </div>

      {/* Big headline */}
      <h2
        style={{
          fontFamily: "'Manic', serif",
          fontSize: "clamp(2rem, 5vw, 3.4rem)",
          color: "#A01D15",
          letterSpacing: "0.06em",
          WebkitTextStroke: "2px #D4A99A",
          paintOrder: "stroke fill",
          textTransform: "uppercase",
          margin: 0,
          marginBottom: "1.2rem",
          textAlign: "center",
        }}
      >
        Open for new projects!
      </h2>

      {/* Email */}
      <a
        href="mailto:neeharikajha05@gmail.com"
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: "0.85rem",
          letterSpacing: "0.12em",
          color: "#A01D15",
          opacity: 0.65,
          textDecoration: "none",
          cursor: "none",
        }}
      >
        NEEHARIKAJHA05@GMAIL.COM
      </a>

      {/* Bottom-right explore arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "0.3rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "1rem",
            color: "#A01D15",
            opacity: 0.7,
            letterSpacing: "0.04em",
          }}
        >
          with love
        </span>
      </div>
    </div>
  );
}
