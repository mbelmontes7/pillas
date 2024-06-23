"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

// This is going to be my navbar component where it is going to be on top of the page
export const Navbar = () => {
  const scrolled = useScrollTop();

  //Additional classes applied conditionally based on the scrolled state
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6", // Initial classes for styling
        scrolled && "border-b shadow-sm",
      )}
    >
      navbar
    </div>
  );
};
export default Navbar;
