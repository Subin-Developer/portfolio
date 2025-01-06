"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <button
      onClick={toggleMenu}
      className="relative flex items-center justify-center w-12 h-12 bg-transparent border-none focus:outline-none"
      aria-label="Toggle Menu"
    >
      {/* Top Line */}
      <motion.span
        className="absolute block w-8 h-[1px] bg-white rounded"
        animate={{
          rotate: isOpen ? 45 : 0, // Rotate to form the top diagonal of the cross
          y: isOpen ? 0 : -8, // Move up or reset to original position
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      {/* Middle Line */}
      <motion.span
        className="absolute block w-8 h-[1px] bg-white rounded"
        animate={{
          opacity: isOpen ? 0 : 1, // Hide when toggled open
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      {/* Bottom Line */}
      <motion.span
        className="absolute block w-8 h-[1px] bg-white rounded"
        animate={{
          rotate: isOpen ? -45 : 0, // Rotate to form the bottom diagonal of the cross
          y: isOpen ? 0 : 8, // Move down or reset to original position
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </button>
  );
};

export default HamburgerButton;
