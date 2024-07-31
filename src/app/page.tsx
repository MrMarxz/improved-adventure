"use client"

import { Award, Database, FolderCode, Info, Menu, Monitor, NotebookText, Puzzle, Settings, User } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { HeaderButtonGroup } from "~/components/custom/ButtonGroup";
import { Button } from "~/components/ui/button";
import { type Button as ButtonType } from "~/utils/types";

export default function HomePage() {
  const buttons: ButtonType[] = [
    { label: "About Me", onClick: () => scrollToAboutMe(), icon: <User /> },
    { label: "Resume/CV", onClick: () => console.log("Resume/CV"), icon: <NotebookText /> },
    { label: "Skills", onClick: () => scrollToSkills(), icon: <Puzzle /> },
    { label: "Projects", onClick: () => scrollToProjects(), icon: <FolderCode /> },
  ]

  const skills: { title: string, description: string, icon: JSX.Element, hoverClass: string }[] = [
    {
      title: "Frontend Development",
      description: "I am proficient in frontend development, utilizing powerful frameworks like React, Next.js, Angular, and Vue.js. My skills ensure the creation of dynamic, responsive, and user-friendly interfaces that enhance user experiences and drive engagement.",
      icon: <Monitor />,
      hoverClass: "hover:animate-ping"
    },
    {
      title: "Backend Development",
      description: "I excel in backend development, leveraging powerful languages and frameworks like Next.js, Laravel, Python, and Node.js. My expertise ensures robust, scalable, and efficient server-side solutions tailored to meet diverse project needs.",
      icon: <Settings />,
      hoverClass: "hover:animate-spin"
    },
    {
      title: "Database Management and Design",
      description: "I specialize in database management and design, ensuring efficient data storage, retrieval, and security. With expertise in SQL, NoSQL, and relational database systems, I create optimized and scalable database solutions customized to project requirements.",
      icon: <Database />,
      hoverClass: "hover:animate-pulse"
    }
  ]

  const projects: { title: string, description: string, imagePath: string, link: string }[] = [
    {
      title: "Basic Strategy Pro",
      description: "Basic Strategy Pro is a web application that helps users learn and practice basic strategy in blackjack. The app features a user-friendly interface, interactive gameplay, and real-time feedback to enhance learning and skill development.",
      imagePath: "/basic_strategy_screenshot.png",
      link: "https://basic-strategy.vercel.app/"
    },
    {
      title: "Weather Station",
      description: "Weather Station is a web application that provides real-time weather data and forecasts. The app features a sleek, modern design, intuitive navigation, and accurate weather information to help users plan their day effectively.",
      imagePath: "/weather_station_screenshot.png",
      link: "https://weather-rouge-iota.vercel.app/"
    },
    {
      title: "ERC-20 Blockchain Repository",
      description: "ERC-20 Blockchain Repository is a decentralized application (dApp) that allows users to create, manage, and trade ERC-20 tokens. The dApp features secure blockchain technology, smart contracts, and user-friendly interfaces for seamless token management.",
      imagePath: "/blockchain.jpg",
      link: "https://github.com/MrMarxz/erc20_contract"
    }
  ]

  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
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
        <div className="text-5xl font-bold mt-10">About Me</div>
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
            <div className={`rounded-full bg-black text-white p-3 cursor-pointer ${skill.hoverClass}`}>{skill.icon}</div>
            <div className="text-xl font-bold">{skill.title}</div>
            <div className="text-center">{skill.description}</div>
          </div>
        ))}
      </div>

      {/* PROJECTS HEADINGS */}
      <div ref={projectsRef} className="flex flex-col items-center gap-y-2 px-[350px]">
        <div className="text-4xl font-bold mt-10">My Projects</div>
        <div className="text-2xl text-gray-400 text-center">
          {"Explore some of my projects showcasing my expertise in full stack development. From dynamic web applications to innovative backend solutions, each project highlights my skills, creativity, and dedication to delivering high-quality results."}
        </div>
      </div>

      {/* MY PROJECTS */}
      <div className="grid grid-cols-3 gap-4 px-[200px]">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col h-full bg-gray-200 rounded-xl shadow-lg">
            <div className="flex flex-col h-full justify-between items-center p-4">
              <div className="flex flex-col items-center gap-y-4">
                <div className="h-[200px] flex items-center justify-center">
                  <Image
                    src={project.imagePath}
                    width={300}
                    height={200}
                    alt=""
                    className="object-cover max-h-[200px] w-auto"
                  />
                </div>
                <div className="text-xl font-bold">{project.title}</div>
                <div className="text-center">{project.description}</div>
              </div>
              <Button
                onClick={() => window.open(project.link, "_blank")}
                className="mt-4"
              >
                View Project
              </Button>
            </div>
          </div>
        ))}
      </div>


    </main>
  );
}
