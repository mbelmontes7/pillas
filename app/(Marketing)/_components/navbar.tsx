"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";

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
      <Logo />
      <div
        //here is the combintation of the class for the navbar
        className="md:ml-auto md:justify-end justify-betweenw-full flex 
        items-center gap-x-2"
      ></div>
      login
    </div>
  );
};
export default Navbar;
