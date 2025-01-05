import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ScrollButton() {
  const [showButton, setShowButton] = useState(false);
  const [scale, setScale] = useState(0.2); // Start very small

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true); // Show the button when scrolling down
    } else {
      setShowButton(false); // Hide the button when near the top
    }

    // Update the scale based on scroll position (faster growth)
    const newScale = Math.min(1.5, 0.2 + window.scrollY / 100); // Scale grows faster
    setScale(newScale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <motion.button
          className="fixed top-10 right-10 bg-blue-500 text-white rounded-full flex items-center justify-center"
          style={{ zIndex: 1000, width: "60px", height: "60px" }} // Set fixed size and make it round
          animate={{ scale: scale }} // Animate the scale property
          initial={{ scale: 0.2 }} // Start with a very small scale
          transition={{ duration: 0.2 }} // Faster scaling transition
        >
          <span className="text-xl">↑</span> {/* Up arrow icon */}
        </motion.button>
      )}
    </>
  );
}

export default ScrollButton;
