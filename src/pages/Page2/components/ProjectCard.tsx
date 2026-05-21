import React from "react";

interface ProjectCardProps {
  index: number;
  style?: React.CSSProperties;
}

// Placeholder image colours — warm tones matching palette
const placeholders = [
  { bg: "#C4A882", label: "Project 01" },
  { bg: "#B8956A", label: "Project 02" },
  { bg: "#8C6E52", label: "Project 03" },
  { bg: "#6B4F38", label: "Project 04" },
];

export default function ProjectCard({ index, style }: ProjectCardProps) {
  const p = placeholders[index] ?? placeholders[0];

  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
        ...style,
      }}
    >
      {/* Card image area */}
      <div
        style={{
          width: "100%",
          aspectRatio:
            index === 0
              ? "4/5"
              : index === 1
                ? "3/2"
                : index === 2
                  ? "4/5"
                  : "3/2",
          backgroundColor: p.bg,
          borderRadius: "2px",
          overflow: "hidden",
          boxShadow: "3px 5px 18px rgba(100,50,30,0.18)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform =
            "scale(1.03) rotate(0.5deg)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "6px 10px 28px rgba(100,50,30,0.28)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform =
            "scale(1) rotate(0deg)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "3px 5px 18px rgba(100,50,30,0.18)";
        }}
      >
        {/* Placeholder content — replace src with real image later */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            padding: "0.8rem",
            background: `linear-gradient(160deg, ${p.bg} 40%, rgba(160,29,21,0.25))`,
          }}
        >
          <span
            style={{
              fontFamily: "'Manic', serif",
              fontSize: "0.85rem",
              color: "#EBE3D1",
              opacity: 0.7,
              letterSpacing: "0.06em",
            }}
          >
            {p.label}
          </span>
        </div>
      </div>
    </div>
  );
}
