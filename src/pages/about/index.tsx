import AboutCollage from "../../pages/about/AboutCollage";
import Footer from "../Footer/Footer";
// ⚠️ adjust path if your folder is different

export default function AboutPage() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "transparent",
        overflow: "hidden",
      }}
    >
      {/* 🧩 COLLAGE SECTION */}
      <AboutCollage />

      {/* FOOTER: placed below about section */}
      <div style={{ marginTop: "40px" }}>
        <Footer />
      </div>
    </main>
  );
}
