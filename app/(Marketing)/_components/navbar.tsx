"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";

// This is going to be my navbar component where it is going to be on top of the page
const Navbar = () => {
  const scrolled = useScrollTop();

  //return something here
  return <div>navbar</div>;
};

export default Navbar;
