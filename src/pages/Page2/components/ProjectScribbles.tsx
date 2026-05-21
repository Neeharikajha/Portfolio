export default function ProjectScribbles() {
  return (
    <>
      {/* Top left — zigzag scribble like image 2 */}
      <svg
        viewBox="0 0 70 120"
        style={{
          position: "absolute",
          top: "3rem",
          left: "-1rem",
          width: 55,
          opacity: 0.75,
          pointerEvents: "none",
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 5 C60 20 20 30 45 50 C65 65 15 80 40 100 C55 112 30 118 20 115"
          stroke="#A01D15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Top right — scratchy cluster like image 2 top right */}
      <svg
        viewBox="0 0 80 90"
        style={{
          position: "absolute",
          top: "2rem",
          right: "1rem",
          width: 70,
          opacity: 0.7,
          pointerEvents: "none",
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 10 C30 5 45 12 40 22 C35 32 20 28 18 38 C16 48 28 52 35 45 C42 38 38 25 48 20 C55 15 65 22 60 32 C55 42 42 40 44 50"
          stroke="#A01D15"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44 50 C46 58 55 62 58 55"
          stroke="#A01D15"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M25 70 C32 65 42 68 40 75 C38 82 28 80 25 70Z"
          stroke="#A01D15"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Middle left between card 1 and card 3 — loopy scribble */}
      <svg
        viewBox="0 0 65 65"
        style={{
          position: "absolute",
          top: "52%",
          left: "22%",
          width: 55,
          opacity: 0.65,
          pointerEvents: "none",
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 50 C5 38 8 22 20 16 C32 10 45 18 48 30 C51 42 42 54 30 56 C18 58 8 50 12 40 C16 30 30 28 36 36 C40 42 36 52 28 52"
          stroke="#A01D15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Between card 2 and 4 — small scribbly marks */}
      <svg
        viewBox="0 0 55 55"
        style={{
          position: "absolute",
          top: "58%",
          right: "20%",
          width: 48,
          opacity: 0.6,
          pointerEvents: "none",
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 30 C12 20 20 14 28 18 C36 22 38 34 30 40 C22 46 10 42 8 30Z"
          stroke="#A01D15"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M30 40 C34 46 40 50 45 46"
          stroke="#A01D15"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 8 C24 4 30 6 28 12"
          stroke="#A01D15"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>

      {/* Bottom centre — diagonal swoosh lines */}
      <svg
        viewBox="0 0 160 40"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "30%",
          width: 150,
          opacity: 0.55,
          pointerEvents: "none",
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 32 C40 20 90 28 155 12"
          stroke="#A01D15"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M10 38 C48 26 95 33 152 18"
          stroke="#A01D15"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    </>
  );
}
