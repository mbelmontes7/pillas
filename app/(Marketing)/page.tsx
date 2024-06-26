import { Heading } from "./_components/Heading";
import { Heroes } from "./_components/heroes";

const MarketingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Ensuring inner div also centers its children */}
      <div className="flex flex-col items-center justify-center text-center gap-y-8 flex-1 px-6 pb-10 max-w-7xl">
        <Heading />
        <Heroes />
      </div>
    </div>
  );
};

export default MarketingPage;
