export interface ProjectDetails {
  title: string;
  problemStatement: string;
  solution: string;
  techStack: string;
  images: {
    key: string;
    src: string;
    caption: string;
    width?: string;
  }[];
}

interface ProjectModalProps {
  projectDetails: ProjectDetails;
  onClose: () => void;
  width?: string;
  maxWidth?: string;
  height?: string;
}

export default function ProjectModal({
  projectDetails,
  onClose,
  width = "calc(100% - 40px)",
  maxWidth = "800px",
  height = "50vh",
}: ProjectModalProps) {
  // Parse and render the solution text with diagrams embedded in the flow
  const renderSolutionWithImages = () => {
    const remainingText = projectDetails.solution;
    const placeholderRegex = /\(\*\*insert ([a-zA-Z0-9 ]+)\*\*\)/g;

    let match;
    let lastIndex = 0;
    const elements: React.ReactNode[] = [];
    let keyCounter = 0;

    placeholderRegex.lastIndex = 0;

    while ((match = placeholderRegex.exec(remainingText)) !== null) {
      const matchIndex = match.index;
      const placeholderText = match[0];
      const imageKey = match[1].trim().toLowerCase().replace(/\s+/g, "");

      // Add preceding text
      if (matchIndex > lastIndex) {
        elements.push(
          <span key={`text-${keyCounter++}`}>
            {remainingText.substring(lastIndex, matchIndex)}
          </span>,
        );
      }

      // Look up corresponding image specification
      const imageObj = projectDetails.images.find(
        (img) => img.key.toLowerCase().replace(/\s+/g, "") === imageKey,
      );

      if (imageObj) {
        elements.push(
          <div
            key={`img-container-${keyCounter++}`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "28px 0",
              width: "100%",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
                width: imageObj.width || "100%",
                maxWidth: "100%",
              }}
            >
              <img
                src={imageObj.src}
                alt={imageObj.caption}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.3rem",
                fontWeight: "bold",
                color: "#A01D15",
                marginTop: "10px",
                letterSpacing: "0.05em",
              }}
            >
              {imageObj.caption}
            </span>
          </div>,
        );
      } else {
        elements.push(
          <span key={`fallback-${keyCounter++}`}>{placeholderText}</span>,
        );
      }

      lastIndex = placeholderRegex.lastIndex;
    }

    // Add trailing text
    if (lastIndex < remainingText.length) {
      elements.push(
        <span key={`text-${keyCounter++}`}>
          {remainingText.substring(lastIndex)}
        </span>,
      );
    }

    return elements;
  };

  return (
    <>
      {/* BLURRED BACKGROUND OVERLAY */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(4px)",
          zIndex: 999,
        }}
      />

      {/* BOTTOM SHEET MODAL */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: width,
          maxWidth: maxWidth,
          height: height,
          backgroundColor: "#F5F1ED",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          zIndex: 1000,
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* CLOSE BUTTON */}
        <div
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "36px",
            height: "36px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            color: "#A01D15",
            zIndex: 1010,
            backgroundColor: "rgba(245, 241, 237, 0.85)",
            borderRadius: "50%",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
          }}
        >
          ✕
        </div>

        {/* SCROLLABLE INNER CONTAINER */}
        <div
          style={{
            height: "100%",
            width: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            padding: "40px 32px 50px 32px",
            boxSizing: "border-box",
            textAlign: "left",
          }}
        >
          {/* PROJECT TITLE */}
          <h1
            style={{
              fontFamily: "'Manic', serif",
              fontSize: "clamp(1.8rem, 4vh, 3.2rem)",
              color: "#A01D15",
              letterSpacing: "0.04em",
              WebkitTextStroke: "2px #D4A99A",
              paintOrder: "stroke fill",
              lineHeight: 1.1,
              textTransform: "uppercase",
              margin: "0 0 32px 0",
              textAlign: "center",
            }}
          >
            {projectDetails.title}
          </h1>

          {/* PROBLEM STATEMENT */}
          <div style={{ marginBottom: "28px" }}>
            <h3
              style={{
                fontFamily: "'Manic', serif",
                fontSize: "1.45rem",
                color: "#A01D15",
                margin: "0 0 10px 0",
                letterSpacing: "0.02em",
              }}
            >
              Problem Statement:
            </h3>
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.35rem",
                color: "#6b6375",
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              {projectDetails.problemStatement}
            </p>
          </div>

          {/* SOLUTION */}
          <div style={{ marginBottom: "28px" }}>
            <h3
              style={{
                fontFamily: "'Manic', serif",
                fontSize: "1.45rem",
                color: "#A01D15",
                margin: "0 0 10px 0",
                letterSpacing: "0.02em",
              }}
            >
              Solution:
            </h3>
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.35rem",
                color: "#6b6375",
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              {renderSolutionWithImages()}
            </div>
          </div>

          {/* TECH STACK */}
          <div>
            <h3
              style={{
                fontFamily: "'Manic', serif",
                fontSize: "1.45rem",
                color: "#A01D15",
                margin: "0 0 10px 0",
                letterSpacing: "0.02em",
              }}
            >
              Tech Stack:
            </h3>
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.35rem",
                color: "#6b6375",
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              {projectDetails.techStack}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
