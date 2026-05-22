import React from "react";

type Props = {
  label: string;
  bg?: string;
  tornVariant?: number;
  style?: React.CSSProperties;

  image?: string;
  imageScale?: string; // 👈 NEW (e.g. "80%", "cover", "contain")
  innerPadding?: string; // 👈 NEW (controls border look)
};

export default function PolaroidCard({
  label,
  bg = "#C4A882",
  tornVariant = 1,
  style,
  image,
  imageScale = "cover", // default
  innerPadding = "4px", // default border
}: Props) {
  const tornStyles: Record<number, string> = {
    1: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
    2: "polygon(0% 0%, 100% 8%, 100% 100%, 0% 92%)",
    3: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
    4: "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)",
    5: "polygon(3% 8%, 100% 0%, 97% 92%, 0% 100%)",
    6: "polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)",
    7: "polygon(2% 10%, 98% 2%, 100% 90%, 4% 100%)",
    8: "polygon(0% 0%, 100% 5%, 95% 100%, 2% 95%)",
    9: "polygon(4% 0%, 100% 3%, 96% 100%, 0% 96%)",
  };

  return (
    <div
      onMouseDown={(e) => e.stopPropagation()}
      style={{
        position: "absolute",
        padding: "6px",
        background: "#f3e8d2",
        clipPath: tornStyles[tornVariant],
        boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
        userSelect: "none",
        ...style,
      }}
    >
      {/* 📸 INNER FRAME */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fff",
          padding: innerPadding, // 👈 customizable border
          boxSizing: "border-box",
        }}
      >
        {/* 📷 IMAGE / BG */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: image
              ? `url(${image})`
              : `linear-gradient(160deg, ${bg}, #a07c5b)`,
            backgroundSize: imageScale, // 👈 customizable size
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            filter: image
              ? "grayscale(100%) brightness(1.05) contrast(0.95)"
              : undefined,
            opacity: image ? 0.92 : 1,
            display: "flex",
            alignItems: "flex-end",
            padding: "4px",
          }}
        >
          <span style={{ fontSize: "10px", color: "#fff", opacity: 0.8 }}>
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
