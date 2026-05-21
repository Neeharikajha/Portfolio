import AboutCollage from "./AboutCollage.tsx";

export default function AboutPage() {
  console.log("AboutPage render");
  return (
    <main className="min-h-screen w-screen overflow-hidden bg-[#ebe3d1]">
      <AboutCollage />
    </main>
  );
}
