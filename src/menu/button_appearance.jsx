import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../components/common/button";
import MenuButton from './menu_icon'
 
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
          className="fixed top-10 right-10 bg-transparent text-white rounded-full flex items-center justify-center"
          style={{ zIndex: 1000, width: "60px", height: "60px" }} // Set fixed size and make it round
          animate={{ scale: scale }} // Animate the scale property
          initial={{ scale: 0.2 }} // Start with a very small scale
          transition={{ duration: 0.2 }} // Faster scaling transition
        >
          <MagneticButton
            size="sm"
            variant="ghost"
            className="border border-solid border-muted-foreground w-16 h-16 rounded-full flex items-center justify-center"
          >
                                <MenuButton />
</MagneticButton>

        </motion.button>
      )}
    </>
  );
}

export default ScrollButton;
