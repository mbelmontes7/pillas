//this is a library to not overwrite css
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    //Going to comment this logo and in case I need it I can always come back to undo
    <div className="hidden md:flex items-center gap-x-0 h-7 w-3">
      {/* <Image
        src="/logo.svg"
        height="20"
        width="40"
        alt="logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        height="40"
        width="40"
        alt="logo"
        className="hidden dark:block"
      /> */}
      <p className={cn("font-semibold ", font.className)}>PP</p>
    </div>
  );
};

export default Logo;
