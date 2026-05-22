import React, { useState } from "react";
import PolaroidCard from "./PolaroidCard";

import arrow from "../../assets/AboutArrow.svg";
import star from "../../assets/AboutStar.svg";
import scratch from "../../assets/virarscribble.svg";
import pin from "../../assets/newpin.svg";
import cherry from "../../assets/AboutStar.svg"; // ⚠️ replace if you have real cherry svg

export default function AboutCollage() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  return (
    <div
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onMouseMove={(e) => {
        if (!dragging) return;

        setOffset((prev) => ({
          x: prev.x + e.movementX,
          y: prev.y + e.movementY,
        }));
      }}
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        cursor: dragging ? "grabbing" : "grab",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundImage: "radial-gradient(#d6cbb8 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        {/* ✨ TOP TEXT */}
        <div
          style={{
            position: "absolute",
            top: "120px",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "'Manic', serif",
            fontSize: "28px",
            letterSpacing: "0.05em",
            color: "#A01D15",
          }}
        >
          NICE TO HAVE YOU HERE !
        </div>

        {/* 🧾 SUB TEXT */}
        <div
          style={{
            position: "absolute",
            top: "190px",
            left: "70%",
            transform: "translateX(-50%)",
            fontFamily: "'Manic', serif",
            fontSize: "20px",
            letterSpacing: "0.12em",
            color: "#A01D15",
          }}
        >
          NEEHARIKA, 2005, BIHAR
          {/* ➡️ ARROW */}
          <img
            src={arrow}
            alt="arrow"
            style={{
              position: "absolute",
              top: "40px", // 👈 move up/down
              left: "100px", // 👈 move left/right
              width: "90px", // 👈 resize
            }}
          />
        </div>

        {/* 🎯 CENTER CLUSTER */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "400px",
          }}
        >
          {/* CARD 1 */}
          <PolaroidCard
            label="1"
            tornVariant={1}
            style={{ top: 50, left: -70, width: 250, height: 200 }}
          />

          {/* CARD 2 */}
          <PolaroidCard
            label="2"
            tornVariant={2}
            style={{ top: 60, left: 200, width: 250, height: 210 }}
          />

          {/* CARD 3 + 📌 PIN */}
          <div style={{ position: "absolute", top: 110, left: -260 }}>
            <PolaroidCard
              label="3"
              tornVariant={3}
              style={{ width: 190, height: 145 }}
            />

            <img
              src={pin}
              alt="pin"
              style={{
                position: "absolute",
                top: "-25px", // 👈 adjust
                left: "-10px", // 👈 adjust
                width: "80px",
              }}
            />
          </div>

          {/* CARD 4 */}
          <PolaroidCard
            label="4"
            tornVariant={4}
            style={{ top: 240, left: -160, width: 240, height: 110 }}
          />

          {/* CARD 5 */}
          <PolaroidCard
            label="5"
            tornVariant={5}
            style={{ top: 200, left: 120, width: 250, height: 200 }}
          />

          {/* CARD 6 + ⭐ + 🍒 */}
          <div style={{ position: "absolute", top: 310, left: 260 }}>
            <PolaroidCard
              label="6"
              tornVariant={6}
              style={{ width: 210, height: 185 }}
            />

            {/* ⭐ STAR */}
            <img
              src={star}
              alt="star"
              style={{
                position: "absolute",
                top: "-10px",
                left: "-15px",
                width: "40px",
              }}
            />

            {/* 🍒 CHERRY */}
            <img
              src={cherry}
              alt="cherry"
              style={{
                position: "absolute",
                bottom: "-210px",
                right: "-300px",
                width: "40px",
              }}
            />
          </div>

          {/* CARD 8 */}
          <PolaroidCard
            label="8"
            tornVariant={8}
            style={{ top: 350, left: 50, width: 200, height: 180 }}
          />

          {/* CARD 9 */}
          <PolaroidCard
            label="9"
            tornVariant={9}
            style={{ top: 250, left: 400, width: 110, height: 110 }}
          />
        </div>

        {/* 📍 LOCATION */}
        <div
          style={{
            position: "absolute",
            top: "80%",
            left: "20%",
            transform: "translateX(-50%)",
            fontFamily: "'Manic', serif",
            fontSize: "20px",
            letterSpacing: "0.14em",
            color: "#A01D15",
            lineHeight: "1.6",
          }}
        >
          CURRENT LOCATION:
          <br />
          VIRAR, MUMBAI, MAHARASHTRA
          {/* ✂️ SCRIBBLE */}
          <img
            src={scratch}
            alt="scribble"
            style={{
              position: "absolute",
              bottom: "-5px", // 👈 move under text
              left: "0px",
              width: "70px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
