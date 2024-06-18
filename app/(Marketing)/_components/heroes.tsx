import Image from "next/image"; // Importing the Image component from Next.js

export const Heroes = () => {
  // Defining a functional component named Heroes
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/documents.png" // Path to the image for light mode
            fill
            className="object-contain dark:hidden" // Show in light mode, hide in dark mode
            alt="Documents"
          />
          <Image
            src="/documents-dark.png" // Path to the image for dark mode
            fill
            className="object-contain hidden dark:block" // Hide in light mode, show in dark mode
            alt="Documents"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/reading.png" // Path to the image for light mode
            fill
            className="object-contain dark:hidden" // Show in light mode, hide in dark mode
            alt="Reading"
          />
          <Image
            src="/reading-dark.png" // Path to the image for dark mode
            fill
            className="object-contain hidden dark:block" // Hide in light mode, show in dark mode
            alt="Reading"
          />
        </div>
      </div>
    </div>
  );
};
