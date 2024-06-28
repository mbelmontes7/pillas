// Indicate that this component should be used on the client side since this is a real-time app
"use client";

// Import necessary components and hooks
import { Spinner } from "@/components/ui/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React from "react";

// Define the MainLayout component which accepts a 'children' prop
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  // Use the useConvexAuth hook to get authentication status and loading state
  const { isAuthenticated, isLoading } = useConvexAuth();

  // If the authentication state is loading, show a spinner
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  // If the user is not authenticated, redirect to the home page
  if (!isAuthenticated) {
    return redirect("/");
  }

  // Render the layout including children components or elements
  return (
    <div className="h-full flex dark:bg-[#1f1f1f]">
      {/* Optionally render the Navigation component */}
      {/* <Navigation /> */}
      <main className="flex-1 h-full overflow-y-auto">
        {/* Optionally render the SearchCommand component */}
        {/* <SearchCommand /> */}
        {/* Render the children passed to MainLayout */}
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
