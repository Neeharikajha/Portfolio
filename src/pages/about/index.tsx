import AboutCollage from "../../pages/about/AboutCollage";
// ⚠️ adjust path if your folder is different

export default function AboutPage() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f5efe6", // soft paper bg (optional)
        overflow: "hidden",
      }}
    >
      {/* 🧩 COLLAGE SECTION */}
      <AboutCollage />
    </main>
  );
}
