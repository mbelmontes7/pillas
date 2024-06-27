"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Tus ideas documentos y planes
        {/* <span className="underline">Pp AI</span> */}
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Ponte Pilas, es el espacio que esta conectado con la inteligencia
        artificial donde puedes tomar apuntes de manera mejor y sensilla.
      </h3>
      {/* //added a spinner here and logic for the auth to the user to get into the app then import on top also 
     wrap the button to the auth where the logic is is to render to acually enter to pp  */}
      {isLoading && (
        //wrap this spinner on a div to give it a class and import the css on the middle of the page
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          {/* Wraps the Link component inside the Button component to style it like a button */}
          <Link href={"/documents"}>
            Entra a Pp
            {/* Adds an arrow icon next to the text */}
            <ArrowRight className="h-4 w-4 ml-2 " />
          </Link>
        </Button>
      )}
    </div>
  );
};
