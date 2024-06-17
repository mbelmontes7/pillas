"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Tus ideas documentos y planes Bienvenido a{" "}
        <span className="underline">Ponte pillas AI🦾</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Ponte Pillas, es el espacio que esta conectado con la inteligencia
        artificial donde el trabajo se hace mejor y más rápido.
      </h3>
      <Button>
        Entra a Pp
        <ArrowRight className="h-4 w-4 ml-2 " />
      </Button>
    </div>
  );
};
