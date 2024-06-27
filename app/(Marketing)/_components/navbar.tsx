"use client";
// import { useScrollTop } from "@/app/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
//this is from the library on the dark/light mode
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
// import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Navbar = () => {
  // const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6",
        // scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div
        className="md:ml-auto md:justify-end justify-betweenw-full flex 
        items-center gap-x-2"
      >
        <ModeToggle />
        {/* {isLoading && <Spinner />} */}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Pilas Free</Button>
            </SignInButton>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter Pp</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
