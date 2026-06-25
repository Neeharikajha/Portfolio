import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./styles/global.css";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer/Footer";
import AboutPage from "./pages/about";
import Projects from "./pages/Projects/Projects";

type Page = "home" | "projects" | "footer" | "about";
const MAX_DRAG = 140;

export default function App() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const startOffset = useRef({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<Page>("home");
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    setHideNavbar(false);
  }, [page]);

  const handleNavigate = (target: Page) => {
    setPage(target);
  };

  useLayoutEffect(() => {
    if (page === "home" && scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (page === "projects" && scrollRef.current && projectsRef.current) {
      scrollRef.current.scrollTo({
        top: projectsRef.current.offsetTop,
        behavior: "smooth",
      });
      return;
    }

    if (page === "footer" && scrollRef.current && footerRef.current) {
      scrollRef.current.scrollTo({
        top: footerRef.current.offsetTop,
        behavior: "smooth",
      });
      return;
    }

    if (page === "about" && aboutRef.current) {
      aboutRef.current.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
  }, [page]);

  useEffect(() => {
    if (heroRef.current) {
      setHeroHeight(heroRef.current.clientHeight);
    }

    const clamp = (val: number) => Math.max(-MAX_DRAG, Math.min(MAX_DRAG, val));

    const onMouseDown = (e: MouseEvent) => {
      dragStart.current = { x: e.clientX, y: e.clientY };
      startOffset.current = { ...offset };
      setIsClicking(true);
    };
    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!dragStart.current) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setOffset({
        x: clamp(startOffset.current.x + dx),
        y: clamp(startOffset.current.y + dy),
      });
    };
    const onMouseUp = () => {
      dragStart.current = null;
      setIsClicking(false);
    };
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      dragStart.current = { x: t.clientX, y: t.clientY };
      startOffset.current = { ...offset };
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!dragStart.current) return;
      const t = e.touches[0];
      setOffset({
        x: clamp(startOffset.current.x + (t.clientX - dragStart.current.x)),
        y: clamp(startOffset.current.y + (t.clientY - dragStart.current.y)),
      });
    };
    const onTouchEnd = () => {
      dragStart.current = null;
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [offset]);

  const handleScroll = () => {
    if (scrollRef.current) setScrollY(scrollRef.current.scrollTop);
  };

  const cursorSize = isClicking ? 32 : 48;

  const flowerIdle = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M24 22 C21 16 13 13 13 20 C13 26 20 27 24 26" stroke="#A01D15" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 22 C18 19 13 12 19 9 C24 6 27 13 24 22" stroke="#A01D15" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 22 C27 16 34 13 35 20 C36 26 29 28 24 22" stroke="#A01D15" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 22 C30 19 36 12 30 8 C25 5 21 13 24 22" stroke="#A01D15" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 22 C24 28 20 35 24 36 C28 37 28 29 24 22" stroke="#A01D15" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="24" cy="22" r="2.5" fill="#A01D15"/>
    <path d="M26 35 C28 38 33 40 36 38" stroke="#A01D15" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`;

  const flowerClick = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M16 15 C14 10 8 8 8 13 C8 18 13 18 16 15" stroke="#A01D15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 15 C11 12 8 7 13 5 C17 3 19 9 16 15" stroke="#A01D15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 15 C18 10 24 8 25 13 C26 18 20 19 16 15" stroke="#A01D15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 15 C21 12 25 7 20 4 C16 2 13 9 16 15" stroke="#A01D15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 15 C16 20 13 25 16 26 C19 27 19 21 16 15" stroke="#A01D15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="16" cy="15" r="2" fill="#A01D15"/>
  </svg>`;

  const pageContent =
    page === "about" ? (
      <div
        ref={aboutRef}
        style={{
          position: "fixed",
          inset: 0,
          overflowY: "auto",
          overflowX: "hidden",
          zIndex: 1,
        }}
      >
        <AboutPage />
      </div>
    ) : page === "projects" ? (
      <div
        style={{
          position: "fixed",
          inset: 0,
          overflowY: "auto",
          overflowX: "hidden",
          zIndex: 1,
        }}
      >
        <Projects onModalStateChange={setHideNavbar} />
      </div>
    ) : (
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          position: "fixed",
          inset: 0,
          overflowY: "auto",
          overflowX: "hidden",
          zIndex: 1,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <section
          ref={heroRef}
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        >
          <Page1 />
        </section>

        <section
          ref={projectsRef}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        >
          <Page2 />
        </section>

        <section
          ref={footerRef}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        >
          <Footer />
        </section>
      </div>
    );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        cursor: "none",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: "-1200px",
          backgroundColor: "#EBE3D1",
          backgroundImage: `radial-gradient(#d6cbb8 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          backgroundPosition: `calc(50% + ${offset.x}px) calc(50% + ${offset.y}px)`,
          zIndex: 0,
        }}
      />

      {pageContent}

      {!hideNavbar && (
        <Navbar
          scrollY={scrollY}
          heroHeight={heroHeight}
          page={page}
          onNavigate={handleNavigate}
        />
      )}

      <div
        style={{
          position: "fixed",
          left: mousePos.x - cursorSize / 2,
          top: mousePos.y - cursorSize / 2,
          width: cursorSize,
          height: cursorSize,
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.1s, height 0.1s",
        }}
        dangerouslySetInnerHTML={{
          __html: isClicking ? flowerClick : flowerIdle,
        }}
      />
    </div>
  );
}
