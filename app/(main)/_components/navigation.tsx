"use client";

import { ChevronsLeft, MenuIcon } from "lucide-react";
import React, { ElementRef, useEffect, useRef, useState } from "react";
//npm i usehooks-ts library from
import { useMediaQuery } from "usehooks-ts";
import { useParams, usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

export const Navigation = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width:768px)");

  //Added isResizingRef to track sidebar resizing state and navbar elements
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  //Logic to handle sidebar state when `isResetting` changes
  const [isResetting, setIsResetting] = useState(false);
  //The useState hook is used in this context to manage the state of the component dynamically based on different conditions.
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;
    // Perform resizing logic here
    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;
    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      //calculate for the value
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`,
      );
    }
  };
  //all this on
  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };
  //The resetWidth function is crucial for managing the layout of a responsive sidebar and navbar when the user can just reset it without going back the origial px
  const resetWidth = () => {
    //	The sidebar automatically collapses/expands based on the screen size.
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "wdith",
        isMobile ? "0" : "calc(100% - 240px)",
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");
    }

    setTimeout(() => {
      setIsResetting(false);
    }, 300);
  };

  return (
    <>
      {/* //templte for the side bar  */}
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-slate-100 overflow-y-auto relative flex w-60 flex-col z-[9999]",
          //adding conditional classes here to let the user know if you are in mobile then the sidebar does not show unless clicked and if you are on desktop you can see it
          isResetting && "transition-all ease-in-out duration-300 ",
          isMobile && "w-0",
        )}
      >
        <div
          //button for the side bar for the mobile here
          role="button"
          // Import chevronleft from the lucid library and it made this cute icon for my side bar added css to make it look nicer only when the user hovers and when you can see it
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100",
          )}
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
        <div
          onMouseDown={handleMouseDown}
          // onClick={resetWidth}
          className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 ease-in-out cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
        />
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full",
        )}
      >
        <nav className="bg-transparent px-3 py-2 w-full">
          {" "}
          {isCollapsed && (
            <MenuIcon role="button" className="h-6 w-6 text-muted-foreground" />
          )}
        </nav>
      </div>
    </>
  );
};
