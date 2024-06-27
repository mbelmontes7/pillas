import Navbar from "./_components/navbar";
import Footer from "./_components/Footer";
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-[#1b1a1d]">
      <Navbar />
      <main className="flex-grow pt-40">{children}</main>
      <Footer /> {/* Ensure the footer is placed here to be at the bottom */}
    </div>
  );
};

export default MarketingLayout;
