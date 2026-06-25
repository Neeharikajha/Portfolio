import leftFlower from "../../assets/myprojectleft.svg";
import rightFlower from "../../assets/myprojectright.svg";
import VideoPreview from "./components/VideoPreview";
import { type ProjectDetails } from "./components/ProjectModal";

const pomodoroDetails: ProjectDetails = {
  title: "POMODORO",
  sections: [
    {
      heading: "Problem Statement:",
      content:
        "People studying or working alone, especially from different locations, often find it boring and isolating, which reduces productivity. Additionally, some individuals experience loneliness, and even friends may struggle to find time to connect and spend time together.",
    },
    {
      heading: "Solution:",
      content:
        "We developed a gamified Pomodoro-based application where users can create or join virtual study rooms (**insert diag1**). Within these rooms, users interact in a shared game-like UI that makes studying feel more engaging and less monotonous. The platform enables real-time communication and synchronized video watching, allowing users to stay connected and motivated while working (**insert pic 2**). It also provides customizable controls for audio, video, and screen layout, giving users flexibility to personalize their collaborative experience (**insert pic 3**).",
    },
    {
      heading: "Tech Stack:",
      content: "TypeScript, Tailwind CSS, Socket.IO",
    },
  ],
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
      width: "480px",
    },
  ],
  links: [{ label: "Live Link", url: "https://pomoverse.onrender.com/lobby" }],
};

const farmGrowDetails: ProjectDetails = {
  title: "FARMGROW",
  sections: [
    {
      heading: "Problem Statement:",
      content:
        "Farmers are often exploited by middlemen, which reduces their profits and limits fair pricing. At the same time, consumers end up paying higher prices for products that may not always be fresh or organic.",
    },
    {
      heading: "Solution:",
      content:
        "FarmGrow is a direct farmer-to-consumer platform that enables farmers to sell their produce without intermediaries, ensuring better earnings and transparency. Users can browse and purchase organic products based on quality grades, allowing them to choose according to their needs and budget.\n\nThe platform also provides simple visual analytics to help farmers understand their sales performance and user demand (**insert diag1**), followed by additional insights and tracking (**insert pic 2**).",
    },
    {
      heading: "User Side:",
      content:
        "Users can access healthier, better-quality food options, negotiate directly with farmers, and make more informed purchasing decisions based on grading and transparency.\n\n(**insert video3**)",
    },
    {
      heading: "Additional Features:",
      content:
        "• Crop Calendar: Helps farmers understand which crops are best to grow and sell based on timing and demand.\n• Chat System: Enables direct communication and negotiation between farmers and users.\n• SnapFinder: Users can upload an image of a dish, and the system suggests related vegetables available in the marketplace.",
    },
    {
      heading: "Tech Stack:",
      content: "Node.js, Socket.IO, React, Tailwind CSS, MongoDB",
    },
  ],
  images: [
    {
      key: "diag1",
      src: new URL("../../projects/photos/Farmer1.png", import.meta.url).href,
      caption: "diag 1", // label under picture: "diag 1"
      width: "500px",
    },
    {
      key: "pic2",
      src: new URL("../../projects/photos/Farmer2.png", import.meta.url).href,
      caption: "diag 2", // label under picture: "diag 2"
      width: "500px",
    },
    {
      key: "video3",
      src: new URL("../../projects/videos/FarmerUser2.mp4", import.meta.url)
        .href,
      caption: "diag 3", // label under picture: "diag 3" (FarmerUser2.mp4 video file)
      width: "520px",
    },
  ],
  links: [
    { label: "GitHub Link", url: "https://github.com/Neeharikajha/farmGrow" },
  ],
};

const spotDetails: ProjectDetails = {
  title: "SPOT (Work in Progress)",
  sections: [
    {
      heading: "Problem Statement:",
      content:
        "People often struggle to understand what their skin is going through, and random online searches can make things worse. Additionally, inconsistent routines related to skincare and diet negatively affect skin health and confidence.",
    },
    {
      heading: "Solution:",
      content:
        "Spot is an application that analyzes a user’s skin through an image and identifies possible conditions, along with suggested actions (e.g., icing) to improve it. It provides the top three results with confidence scores, helping users make better and more informed decisions.\n\nAdditionally, users can build and follow personalized routines supported by calming background audio to encourage consistency. The app also includes reminders for routines and medications. A built-in calorie tracker helps identify if certain foods are negatively affecting skin health.",
    },
    {
      heading: "Tech Stack:",
      content: "Flutter, Firebase",
    },
  ],
  images: [],
  links: [
    { label: "GitHub Link", url: "https://github.com/Neeharikajha/spot" },
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
        paddingBottom: "80px",
        overflow: "visible",
      }}
    >
      {/* LEFT FLOWER */}
      <img
        src={leftFlower}
        alt="left decoration"
        style={{
          position: "absolute",
          left: "410px",
          top: "12%",
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

        {/* VIDEO PREVIEW 1: POMODORO */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <VideoPreview
            height={360}
            width={750}
            overlayText="POMODORO"
            overlayTextColor="#A01D15"
            overlayTextSize="clamp(2.5rem, 2.5vw, 1.8rem)"
            modalWidth="calc(100% - 40px)"
            modalMaxWidth="1130px"
            modalHeight="calc(60vh + 180px)"
            projectDetails={pomodoroDetails}
            onModalStateChange={onModalStateChange}
          />
        </div>

        {/* VIDEO PREVIEW 2: FARMGROW */}
        <div
          style={{
            marginTop: "120px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <VideoPreview
            height={360}
            width={750}
            videoSrc={
              new URL("../../projects/videos/Farmer1.mp4", import.meta.url).href
            }
            overlayText="FarmGrow"
            overlayTextColor="#A01D15"
            overlayTextSize="clamp(1.2rem, 2.5vw, 1.8rem)"
            modalWidth="calc(100% - 40px)"
            modalMaxWidth="1130px"
            modalHeight="calc(60vh + 180px)"
            projectDetails={farmGrowDetails}
            onModalStateChange={onModalStateChange}
          />
        </div>

        {/* VIDEO PREVIEW 3: SPOT */}
        <div
          style={{
            marginTop: "120px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <VideoPreview
            height={360}
            width={750}
            videoSrc={
              new URL(
                "../../projects/photos/WorkUnderProgress.jpg",
                import.meta.url,
              ).href
            }
            overlayText="Spot"
            overlayTextColor="#A01D15"
            overlayTextSize="clamp(1.2rem, 2.5vw, 1.8rem)"
            modalWidth="calc(100% - 40px)"
            modalMaxWidth="1130px"
            modalHeight="calc(60vh + 180px)"
            projectDetails={spotDetails}
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
          right: "420px",
          top: "12%",
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
