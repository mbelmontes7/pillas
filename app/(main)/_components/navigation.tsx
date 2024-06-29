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
        {/* //Implemented hover effect to reveal additional sidebar content. */}
        <div className="opacity-0 group-hover:opacity-100" />
      </aside>
    </>
  );
};
