import { useEffect, useRef, useState } from "react";
import "./styles/global.css";
import Page1 from "./pages/Page1/Page1";

const MAX_DRAG = 140;

export default function App() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const startOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const clamp = (val: number) => Math.max(-MAX_DRAG, Math.min(MAX_DRAG, val));

    const onMouseDown = (e: MouseEvent) => {
      dragStart.current = { x: e.clientX, y: e.clientY };
      startOffset.current = { ...offset };
      document.body.classList.add("dragging");
    };

    const onMouseMove = (e: MouseEvent) => {
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
      document.body.classList.remove("dragging");
    };

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      dragStart.current = { x: t.clientX, y: t.clientY };
      startOffset.current = { ...offset };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!dragStart.current) return;
      const t = e.touches[0];
      const dx = t.clientX - dragStart.current.x;
      const dy = t.clientY - dragStart.current.y;
      setOffset({
        x: clamp(startOffset.current.x + dx),
        y: clamp(startOffset.current.y + dy),
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

  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden" }}>
      {/* Layer 1: Dot grid — only backgroundPosition moves, no transform */}
      <div
        style={{
          position: "absolute",
          inset: "-300px",
          backgroundColor: "#EBE3D1",
          backgroundImage: `radial-gradient(circle, #B32218 1.5px, transparent 1.5px)`,
          backgroundSize: "100px 100px",
          backgroundPosition: `calc(50% + ${offset.x}px) calc(50% + ${offset.y}px)`,
        }}
      />

      {/* Layer 2: Content — transform matches the dot pan so text rides with grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        <Page1 />
      </div>
    </div>
  );
}
