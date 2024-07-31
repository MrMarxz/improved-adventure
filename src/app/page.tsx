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
    <main className="flex min-h-screen flex-col text-black p-8 space-y-8">
      {/* NAVIGATION BUTTONS */}
      <div className="flex flex-col items-center">
        <HeaderButtonGroup buttons={buttons} />
      </div>

      {/* INTRO */}
      <div className="flex flex-row justify-between gap-x-10 px-[200px]">

        <div className="flex flex-col gap-y-6 justify-center">
          <div className="text-5xl font-bold">Welcome to my Virtual CV!</div>
          <div className="text-2xl text-gray-400">
            {"I'm Markus Marais, a passionate software developer with a love for all things tech. Here you can find out more about me, my projects, and catch a glimpse of myself."}
          </div>
        </div>

        <Image src="/self.jpg" className="rounded-xl" alt="Picture of the author" width={700} height={700} />

      </div>

      {/* FAVOURITE TECH STACKS */}
      <div className="flex flex-col justify-center items-center space-y-8 py-10">
        <div className="text-xl font-semibold">Some of my favourites</div>
        <div className="flex flex-row w-full justify-center items-center gap-x-[50px] px-[100px]">
          <Image src="/nextjs_logo.png" width={150} height={150} alt="" />
          <Image src="/nodejs_logo.png" width={150} height={150} alt="" />
          <Image src="/react_logo.png" width={150} height={150} alt="" />
          <Image src="/wikileaks_logo.png" width={150} height={150} alt="" />
          <Image src="/google_logo.png" width={150} height={150} alt="" />
          <Image src="/netflix_logo.png" width={150} height={150} alt="" />
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="flex flex-col items-center gap-y-6 px-[200px]">
        <div className="text-4xl font-bold mt-10">About Me</div>
        <div className="text-2xl text-gray-400 text-center">
          I am an experienced Full Stack Developer with three years of
          professional experience. My interest in programming began with classic
          Scratch in high school, a visual coding tool, which sparked my passion
          and led me to explore more advanced programming languages. I
          pursued a degree in IT at North-West University, and during my second
          year, I secured a full-time job. This opportunity allowed me to transition
          to Distance Learning, enabling me to balance both work and studies
          effectively
        </div>
      </div>


    </main>
  );
}
