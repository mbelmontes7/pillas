"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
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
      {isLoading && <Spinner size="lg" />}
      {isAuthenticated && !isLoading && (
        <Button>
          Entra a Pp
          <ArrowRight className="h-4 w-4 ml-2 " />
        </Button>
      )}
    </div>
  );
};
