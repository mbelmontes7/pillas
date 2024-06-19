import { Heading } from "./_components/Heading";
import { Heroes } from "./_components/heroes";
import Footer from "./_components/Footer";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items justify-center md:justidy-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </div>
  );
};
export default MarketingPage;
