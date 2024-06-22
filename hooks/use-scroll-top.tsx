import { useState, useEffect } from "react"; // Bring in tools to manage state and side effects

// This function checks if we've scrolled past a certain point
export const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false); // Create a state to track if we've scrolled past the threshold

  useEffect(() => {
    // This function runs whenever the user scroll then I write a if statment
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        // If we've scrolled down more than the threshold
        setScrolled(true); // Mark that we've scrolled past the threshold
      } else {
        setScrolled(false); // Mark that we haven't scrolled past the threshold
      }
    };

    window.addEventListener("scroll", handleScroll); // Start watching for scroll events
    return () => window.removeEventListener("scroll", handleScroll); // Stop watching for scroll events when done object represents the browser window or tab that contains the web page.
  }, [threshold]); // Run this effect when the component mounts and whenever the threshold changes

  return scrolled; // Return whether we've scrolled past the threshold
};
