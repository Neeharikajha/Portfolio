export interface ProjectSection {
  heading: string;
  content: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectDetails {
  title: string;
  sections: ProjectSection[];
  images: {
    key: string;
    src: string;
    caption: string;
    width?: string;
  }[];
  links?: ProjectLink[];
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
  // Parse and render content with images and videos embedded inline
  const renderContentWithMedia = (contentString: string) => {
    const remainingText = contentString;
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

      // Look up corresponding image/video specification
      const mediaObj = projectDetails.images.find(
        (img) => img.key.toLowerCase().replace(/\s+/g, "") === imageKey,
      );

      if (mediaObj) {
        const isVideo = mediaObj.src.toLowerCase().endsWith(".mp4");
        elements.push(
          <div
            key={`media-container-${keyCounter++}`}
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
                width: mediaObj.width || "100%",
                maxWidth: "100%",
              }}
            >
              {isVideo ? (
                <video
                  src={mediaObj.src}
                  controls
                  autoPlay
                  loop
                  muted
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              ) : (
                <img
                  src={mediaObj.src}
                  alt={mediaObj.caption}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              )}
            </div>
            <span
              style={{
                fontFamily: "'Manic', serif",
                fontSize: "calc(1rem + 2px)",
                fontWeight: "bold",
                color: "#A01D15",
                marginTop: "10px",
                letterSpacing: "0.02em",
              }}
            >
              {mediaObj.caption}
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
          backgroundColor: "#EBE3D1",
          backgroundImage: "radial-gradient(#d6cbb8 1px, transparent 1px)",
          backgroundSize: "20px 20px",
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
            fontSize: "26px",
            color: "#A01D15",
            zIndex: 1010,
            backgroundColor: "rgba(235, 227, 209, 0.85)",
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
            fontFamily: "'Manic', serif",
          }}
        >
          {/* PROJECT TITLE */}
          <h1
            style={{
              fontFamily: "'Manic', serif",
              fontSize: "calc(clamp(1.8rem, 4vh, 2.6rem) + 2px)",
              fontWeight: "bold",
              color: "#A01D15",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              textTransform: "uppercase",
              margin: "0 0 16px 0",
              textAlign: "center",
            }}
          >
            {projectDetails.title}
          </h1>

          {/* PROJECT LINKS */}
          {projectDetails.links && projectDetails.links.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                marginBottom: "32px",
              }}
            >
              {projectDetails.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'Manic', serif",
                    fontSize: "calc(0.95rem + 2px)",
                    fontWeight: "600",
                    color: "#A01D15",
                    textDecoration: "none",
                    padding: "6px 18px",
                    border: "1.5px solid rgba(160, 29, 21, 0.4)",
                    borderRadius: "999px",
                    backgroundColor: "rgba(235, 227, 209, 0.5)",
                    cursor: "pointer",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(160, 29, 21, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(235, 227, 209, 0.5)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* DYNAMIC SECTIONS */}
          {projectDetails.sections.map((section, idx) => (
            <div key={idx} style={{ marginBottom: "28px" }}>
              <h3
                style={{
                  fontFamily: "'Manic', serif",
                  fontSize: "calc(1.2rem + 2px)",
                  fontWeight: "bold",
                  color: "#A01D15",
                  margin: "0 0 10px 0",
                  letterSpacing: "-0.01em",
                }}
              >
                {section.heading}
              </h3>
              <div
                style={{
                  fontFamily: "'Manic', serif",
                  fontSize: "calc(1.05rem + 2px)",
                  color: "#6b6375",
                  lineHeight: 1.5,
                  margin: 0,
                  whiteSpace: "pre-line",
                }}
              >
                {renderContentWithMedia(section.content)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
