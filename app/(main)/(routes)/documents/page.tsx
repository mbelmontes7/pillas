"use client";
import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        alt="Empty"
        height="300"
        width="300"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        alt="Empty"
        height="300"
        width="300"
        className="hidden dark:block"
      />
      {/* //the logic here is to show the user name on the documents page */}
      <h2 className="text-lg font-semibold max-h-min dark:text-white">
        Bienvienido a {user?.firstName}&apos;s documentos
      </h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Crea una nota
      </Button>
    </div>
  );
};

export default DocumentsPage;
