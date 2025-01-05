"use client";

import { motion } from "framer-motion";
import { ParallaxSlider } from "../slider/index";
import { slideUp } from "./variants";

export function Header() {
  const hexagonStyle = {
    background: `#ffffff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 1.732'%3E%3Cpath d='M0 0.866h1L1.5 0h1L3 0.866L2.5 1.732h-1L1 0.866' stroke='%23A9A9A9' stroke-width='0.05' fill='none'/%3E%3C/svg%3E")`,
    backgroundSize: `${10 * 3}px ${10 * 1.732}px`,
    width: "100vw",
    height: "100vh",
    position: "fixed", // Fix the background to the viewport
    top: 0,
    left: 0,
    zIndex: -1, // Make sure background stays behind content
  };

  return (
    <motion.header
      style={hexagonStyle}
      className="relative h-screen overflow-hidden bg-secondary-foreground text-background"
      variants={slideUp}
      initial="initial"
      animate="enter"
    >
      {/* Image placed in front of the background */}
      <img
        src="src/assets/image-removebg.png" // Replace with your image URL
        alt="Header Image"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[50vh] sm:h-[90vh] z-30 object-cover"
      />

      <div className="relative flex h-full flex-col justify-center gap-2 md:flex-col-reverse md:justify-center z-20">
        <div className="select-none">
          <h1 className="text-[max(9em,21vw)]">
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className="pe-12 text-black">
                SUBIN
                <span className="spacer">—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>
      </div>
    </motion.header>
  );
}
