"use client";

import { ChevronsLeft } from "lucide-react";
import React, { ElementRef, useEffect, useRef, useState } from "react";
//npm i usehooks-ts library from
import { useMediaQuery } from "usehooks-ts";

export const Navigation = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  //Added isResizingRef to track sidebar resizing state and navbar elements
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(isMobile);

  return (
    <>
      {/* //templte for the side bar  */}
      <aside className="group/sidebar h-full bg-slate-100 overflow-y-auto relative flex w-60 flex-col z-[9999]">
        {/* //action items */}
        <div
          role="button"
          // Import chevronleft from the lucid library and it made this cute icon for my side bar added css to make it look nicer only when the user hovers and when you can see it
          className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition"
        >
          <ChevronsLeft h-6 w-6 />
        </div>
        <div>
          <p>Action items</p>
        </div>
        {/* //this is going to another sections */}
        <div className="mt-4">
          <p>Documents</p>
        </div>
        {/* -Implemented hover effect to reveal additional sidebar content. 
                    -Applies a transition effect to the element, making changes to properties (like opacity) smooth and animated over a short duration.
                    -Changes the cursor to indicate that the element is resizable horizontally (east-west direction)
                    -duration-300: Sets the transition to last 300 milliseconds.
                */}
        <div className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 ease-in-out cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0" />
      </aside>
    </>
  );
};
