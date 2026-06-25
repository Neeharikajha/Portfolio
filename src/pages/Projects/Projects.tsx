import leftFlower from "../../assets/myprojectleft.svg";
import rightFlower from "../../assets/myprojectright.svg";
import VideoPreview from "./components/VideoPreview";
import { type ProjectDetails } from "./components/ProjectModal";

const pomodoroDetails: ProjectDetails = {
  title: "POMODORO",
  problemStatement:
    "People studying or working alone, especially from different locations, often find it boring and isolating, which reduces productivity. Additionally, some individuals experience loneliness, and even friends may struggle to find time to connect and spend time together.",
  solution:
    "We developed a gamified Pomodoro-based application where users can create or join virtual study rooms (**insert diag1**)Within these rooms, users interact in a shared game-like UI that makes studying feel more engaging and less monotonous. The platform enables real-time communication and synchronized video watching, allowing users to stay connected and motivated while working (**insert pic 2**)It also provides customizable controls for audio, video, and screen layout, giving users flexibility to personalize their collaborative experience (**insert pic 3**)",
  techStack: "TypeScript, Tailwind CSS, Socket.IO",
  images: [
    {
      key: "diag1",
      src: new URL("../../projects/photos/POMODORO_Lobby.png", import.meta.url)
        .href,
      caption: "diag 1", // label under picture: "diag 1"
      width: "520px",
    },
    {
      key: "pic2",
      src: new URL(
        "../../projects/photos/Pomodoro_entire_screen.jpeg",
        import.meta.url,
      ).href,
      caption: "diag 2", // label under picture: "diag 2"
      width: "600px",
    },
    {
      key: "pic3",
      src: new URL(
        "../../projects/photos/Pomodoro_timer_inside.jpeg",
        import.meta.url,
      ).href,
      caption: "diag 3", // label under picture: "diag 3"
      width: "1000px",
    },
  ],
};

export default function Projects({
  onModalStateChange,
}: {
  onModalStateChange?: (open: boolean) => void;
}) {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "60px",
        overflow: "visible",
      }}
    >
      {/* LEFT FLOWER */}
      <img
        src={leftFlower}
        alt="left decoration"
        style={{
          position: "absolute",
          left: "480px",
          top: "22%",
          transform: "translateY(-50%)",
          width: "170px",
          pointerEvents: "none",
        }}
      />

      {/* MY PROJECTS SECTION WITH FLOWERS */}
      <div
        style={{
          position: "relative",
          display: "block",
          width: "100%",
          textAlign: "center",
          paddingTop: "80px",
          paddingBottom: "40px",
        }}
      >
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
          My
          <br />
          Projects
        </h2>

        {/* VIDEO PREVIEW */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <VideoPreview
            height={400} // Increased from 250 to 330 (+40px on top & bottom = +80px total)
            width={800} // Increased from 400 to 480 (+40px on left & right = +80px total)
            overlayText="POMODORO"
            overlayTextColor="#A01D15"
            overlayTextSize="clamp(2.5rem, 2.5vw, 1.8rem)"
            modalWidth="calc(100% - 40px)"
            modalMaxWidth="1400px" // Increased max-width by 120px (from 1010px to 1130px)
            modalHeight="calc(60vh + 220px )" // Increased height by 120px (from calc(60vh + 60px) to calc(60vh + 180px))
            projectDetails={pomodoroDetails}
            onModalStateChange={onModalStateChange}
          />
        </div>
      </div>

      {/* RIGHT FLOWER */}
      <img
        src={rightFlower}
        alt="right decoration"
        style={{
          position: "absolute",
          right: "480px",
          top: "22%",
          transform: "translateY(-50%)",
          width: "170px",
          pointerEvents: "none",
        }}
      />

      {/* PROJECTS CONTENT - EMPTY FOR YOU TO ADD */}
      <div style={{ paddingTop: "40px" }} />
    </div>
  );
}
