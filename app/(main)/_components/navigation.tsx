"use client";

export const Navigation = () => {
  return (
    <>
      {/* //templte for the side bar  */}
      <aside className="group/sidebar h-full bg-slate-100 overflow-y-auto relative flex w-60 flex-col z-[9999]">
        {/* //action items */}
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
