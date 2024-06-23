"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

// This is going to be my navbar component where it is going to be on top of the page
export const Navbar = () => {
  const scrolled = useScrollTop();

  //return something here
  return <div className={cn()}>navbar</div>;
};
export default Navbar;
