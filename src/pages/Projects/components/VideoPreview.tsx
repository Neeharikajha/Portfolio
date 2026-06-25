import { useState } from "react";
import ProjectModal, { type ProjectDetails } from "./ProjectModal.tsx";

interface VideoPreviewProps {
  height?: number;
  width?: number;
  left?: number;
  right?: number;
  videoSrc?: string;
  overlayText?: string;
  overlayTextColor?: string;
  overlayTextSize?: string;
  projectDetails: ProjectDetails;
  modalWidth?: string;
  modalMaxWidth?: string;
  modalHeight?: string;
  onModalStateChange?: (open: boolean) => void;
}

export default function VideoPreview({
  height = 40,
  width = 120,
  left,
  right,
  videoSrc = new URL(
    "../../../projects/videos/POMODORO_DEFAUTL.mp4",
    import.meta.url,
  ).href,
  overlayText = "POMODORO",
  overlayTextColor = "#A01D15",
  overlayTextSize = "clamp(1.2rem, 2.5vw, 1.8rem)",
  projectDetails,
  modalWidth,
  modalMaxWidth,
  modalHeight,
  onModalStateChange,
}: VideoPreviewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    if (onModalStateChange) onModalStateChange(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (onModalStateChange) onModalStateChange(false);
  };

  const style: React.CSSProperties = {
    position: "relative",
    height: `${height}px`,
    width: `${width}px`,
    cursor: "pointer",
    overflow: "visible",
    borderRadius: "4px",
    ...(left !== undefined && { marginLeft: `${left}px` }),
    ...(right !== undefined && { marginRight: `${right}px` }),
  };

  const isImagePreview = videoSrc
    .toLowerCase()
    .match(/\.(jpg|jpeg|png|webp|svg)$/);

  return (
    <>
      <div style={style} onClick={handleOpenModal}>
        {isImagePreview ? (
          <img
            src={videoSrc}
            alt={overlayText}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
        {/* OVERLAY TEXT */}
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
            fontFamily: "'Manic', serif",
            fontSize: overlayTextSize,
            color: overlayTextColor,
            letterSpacing: "0.04em",
            WebkitTextStroke: `1px ${overlayTextColor === "#A01D15" ? "#D4A99A" : "transparent"}`,
            paintOrder: "stroke fill",
            lineHeight: 1,
            textTransform: "uppercase",
            pointerEvents: "none",
          }}
        >
          {overlayText}
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal
          projectDetails={projectDetails}
          onClose={handleCloseModal}
          width={modalWidth}
          maxWidth={modalMaxWidth}
          height={modalHeight}
        />
      )}
    </>
  );
}
