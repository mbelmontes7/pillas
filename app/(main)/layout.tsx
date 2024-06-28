// keep in mind that  Import and render components within MainLayout for reusable layouts and organized code which now is making so much sense.
"use client";
import { useConvexAuth } from "convex/react";
// Define the MainLayout component
// The component accepts a prop called 'children'
const MainLayout = ({
  children,
}: {
  // Specify that 'children' can be any valid React node
  children: React.ReactNode;
}) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  // Return a div that wraps around the children prop
  return <div>{children}</div>;
};

// Export the MainLayout component as the default export of this module
export default MainLayout;
