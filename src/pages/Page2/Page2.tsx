import leftFlower from "../../assets/myprojectleft.svg";
import rightFlower from "../../assets/myprojectright.svg";

export default function Page2() {
  return (
    <section
      id="experience"
      style={{
        minHeight: "80vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <div
        style={{
          position: "relative",
          display: "inline-block",
          marginBottom: "5rem",
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
          Experience
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

      {/* Timeline Wrapper */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          padding: "0 24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        {/* FactWise */}
        <div
          style={{
            borderLeft: "2.5px solid transparent", // removed timeline line
            paddingLeft: "32px",
            position: "relative",
            textAlign: "left",
          }}
        >
          {/* Timeline Node dot */}
          <div
            style={{
              position: "absolute",
              left: "-11px",
              top: "4px",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "#EBE3D1",
              border: "2.5px solid #A01D15",
            }}
          />
          <h3
            style={{
              fontFamily: "'Manic', serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
              color: "#A01D15",
              margin: "0 0 6px 0",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            FactWise
          </h3>
          <div
            style={{
              fontFamily: "'Manic', serif", // changed to manic
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#A01D15",
              lineHeight: 1.2,
              marginBottom: "6px",
            }}
          >
            Software Developer
          </div>
          <div
            style={{
              fontFamily: "'Manic', serif", // changed to manic
              fontSize: "1rem",
              color: "#A01D15",
              opacity: 0.85,
            }}
          >
            Jan 1, 2026 onwards
          </div>
        </div>

        {/* Fortem Bioscience Pvt Ltd */}
        <div
          style={{
            borderLeft: "2.5px solid transparent", // removed timeline line
            paddingLeft: "32px",
            position: "relative",
            textAlign: "left",
          }}
        >
          {/* Timeline Node dot */}
          <div
            style={{
              position: "absolute",
              left: "-11px",
              top: "4px",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "#EBE3D1",
              border: "2.5px solid #A01D15",
            }}
          />
          <h3
            style={{
              fontFamily: "'Manic', serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
              color: "#A01D15",
              margin: "0 0 6px 0",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            Fortem Bioscience Pvt Ltd
          </h3>
          <div
            style={{
              fontFamily: "'Manic', serif", // changed to manic
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#A01D15",
              lineHeight: 1.2,
              marginBottom: "6px",
            }}
          >
            Web Developer
          </div>
        </div>
      </div>
    </section>
  );
}
