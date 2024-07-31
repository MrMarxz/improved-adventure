"use client"

import { Award, Database, FolderCode, Info, Menu, Monitor, NotebookText, Puzzle, Settings, User } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { HeaderButtonGroup } from "~/components/custom/ButtonGroup";
import { Button } from "~/utils/types";

export default function HomePage() {
  const buttons: Button[] = [
    { label: "About Me", onClick: () => scrollToAboutMe(), icon: <User /> },
    { label: "Resume/CV", onClick: () => console.log("Resume/CV"), icon: <NotebookText /> },
    { label: "Skills", onClick: () => scrollToSkills(), icon: <Puzzle /> },
    { label: "Projects", onClick: () => console.log("Projects"), icon: <FolderCode /> },
    { label: "Contact Information", onClick: () => console.log("Contact Information"), icon: <Info /> },
  ]

  const skills: { title: string, description: string, icon: JSX.Element }[] = [
    {
      title: "Frontend Development",
      description: "I am proficient in frontend development, utilizing powerful frameworks like React, Next.js, Angular, and Vue.js. My skills ensure the creation of dynamic, responsive, and user-friendly interfaces that enhance user experiences and drive engagement.",
      icon: <Monitor />
    },
    {
      title: "Backend Development",
      description: "I excel in backend development, leveraging powerful languages and frameworks like Next.js, Laravel, Python, and Node.js. My expertise ensures robust, scalable, and efficient server-side solutions tailored to meet diverse project needs.",
      icon: <Settings />
    },
    {
      title: "Database Management and Design",
      description: "I specialize in database management and design, ensuring efficient data storage, retrieval, and security. With expertise in SQL, NoSQL, and relational database systems, I create optimized and scalable database solutions customized to project requirements.",
      icon: <Database />
    }
  ]

  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

      {/* ABOUT ME */}
      <div ref={aboutMeRef} className="flex flex-col items-center gap-y-6 px-[350px]">
        <div className="text-4xl font-bold mt-10">About Me</div>
        <div className="text-2xl text-gray-400 text-center mb-10">
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

      {/* MY SKILLS HEADINGS */}
      <div ref={skillsRef} className="flex flex-col items-center gap-y-2 px-[350px]">
        <div className="text-xl font-semibold mt-10">My Skills</div>
        <div className="text-4xl font-bold">What I do</div>
        <div className="text-2xl text-gray-400 text-center">
          {"I'm not just a developer; I'm a digital explorer with a wide range of skills. Crafting immersive online experiences is not just a job but my passion. Discover below how my curiosity and versatility can benefit you."}
        </div>
      </div>

      {/* MY SKILLS */}
      <div className="grid grid-cols-3 space-4 px-[200px]">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-y-4 p-4">
            <div className="rounded-full bg-black text-white p-3">{skill.icon}</div>
            <div className="text-xl font-bold">{skill.title}</div>
            <div className="text-center">{skill.description}</div>
          </div>
        ))}
      </div>


    </main>
  );
}
