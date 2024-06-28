"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
//When you use the Link component from next/link, you don’t need to explicitly render anything
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SignInButton } from "@clerk/clerk-react";

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
      {!isAuthenticated && !isLoading && (
        // If the user is not authenticated and the page is not loading, show the sign-in button.
        <SignInButton mode="modal">
          {/* The SignInButton component is used to trigger a modal sign-in form. */}
          <Button>
            {/* The Button component styles the "Get Pilas for free" text and icon. */}
            Get Pilas for free
            {/* ArrowRight icon is added next to the text with specific styling for size and margin. */}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
