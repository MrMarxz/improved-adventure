"use client"

import { Award, FolderCode, Info, Menu, NotebookText } from "lucide-react";
import Image from "next/image";
import { HeaderButtonGroup } from "~/components/custom/ButtonGroup";
import { Button } from "~/utils/types";

export default function HomePage() {
  const buttons: Button[] = [
    { label: "About Me", onClick: () => console.log("About Me"), icon: <Award /> },
    { label: "Resume/CV", onClick: () => console.log("Resume/CV"), icon: <NotebookText /> },
    { label: "Projects", onClick: () => console.log("Projects"), icon: <FolderCode /> },
    { label: "Contact Information", onClick: () => console.log("Contact Information"), icon: <Info /> },
  ]
  return (
    <main className="flex min-h-screen flex-col text-black p-8 space-y-4">
      {/* NAVIGATION BUTTONS */}
      <div className="flex flex-col items-center">
        <HeaderButtonGroup buttons={buttons} />
      </div>

      {/* MY INFO */}
      <div className="flex flex-row justify-between gap-x-10 px-[200px]">

        <div className="flex flex-col gap-y-6 justify-center">
          <div className="text-5xl font-bold">Welcome to my Virtual CV!</div>
          <div className="text-2xl text-gray-400">
            {"I'm Markus Marais, a passionate software developer with a love for all things tech. Here you can find out more about me, my projects, and catch a glimpse of myself."}
          </div>
        </div>

        <Image src="/self.jpg" className="rounded-xl" alt="Picture of the author" width={700} height={700} />

      </div>
    </main>
  );
}
