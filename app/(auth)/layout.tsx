//You can put anything inside RootLayout, and it will automatically inherit the styles defined in RootLayout.
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full bg-red-500 text-white  ">{children}</div>;
};

export default RootLayout;
