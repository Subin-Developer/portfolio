import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { Preloader } from "./preloader"; // Assuming Preloader is your loading component

/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();

  // Set a timeout to simulate loading and finish transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
      window.scrollTo(0, 0); // Reset scroll position (optional)
    }, 3000); // Adjust the duration of the transition as needed

    return () => clearTimeout(timer); // Clean up timeout if component unmounts
  }, [pathname]); // Depend on pathname to trigger the effect on route change

  return (
    <div key={pathname} className="overflow-hidden scroll-smooth">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />} {/* Show preloader while loading */}
      </AnimatePresence>
      {!isLoading && (
        <div>
          {children}{" "}
          {/* Render the rest of the page once loading is finished */}
        </div>
      )}
    </div>
  );
}
