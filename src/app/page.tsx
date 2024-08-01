"use client"

import { Database, FolderCode, Mail, Monitor, Phone, Puzzle, Scroll, Settings, University, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HeaderButtonGroup } from "~/components/custom/ButtonGroup";
import ScrollToTopButton from "~/components/custom/ScrollToTop";
import { Button } from "~/components/ui/button";
import { type Button as ButtonType } from "~/utils/types";

export default function HomePage() {
  const buttons: ButtonType[] = [
    { label: "About Me", onClick: () => scrollToAboutMe(), icon: <User /> },
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
      title: "ERC-20 Blockchain Repository",
      description: "ERC-20 Blockchain Repository is a decentralized application (dApp) that allows users to create, manage, and trade ERC-20 tokens. The dApp features secure blockchain technology, smart contracts, and user-friendly interfaces for seamless token management.",
      imagePath: "/blockchain.jpg",
      link: "https://github.com/MrMarxz/erc20_contract"
    },
    {
      title: "Weather Station",
      description: "Weather Station is a web application that provides real-time weather data and forecasts. The app features a sleek, modern design, intuitive navigation, and accurate weather information to help users plan their day effectively.",
      imagePath: "/weather_station_screenshot.png",
      link: "https://weather-rouge-iota.vercel.app/"
    },
  ]

  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const handleDownloadResume = () => () => {
    const path = "/assets/Markus_CV.pdf";

    void fetch(path)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Markus_CV.pdf";
        a.click();
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col text-black p-8 space-y-8 mb-10">
      {/* NAVIGATION BUTTONS */}
      <div className={`fixed top-0 left-0 right-0 bg-white transition-shadow duration-200 z-10 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4 w-[500px]">
          <HeaderButtonGroup buttons={buttons} />
        </div>
      </div>

      {/* INTRO */}
      <div className="flex flex-row justify-between gap-x-10 px-[200px]">

        <div className="flex flex-col justify-center">
          <div className="text-5xl font-bold">Welcome to my Virtual CV!</div>
          <div className="text-2xl text-gray-400 mt-[20px]">
            {"I'm Markus Marais, a passionate software developer with a love for all things tech. Here you can find out more about me, my projects, and catch a glimpse of myself."}
          </div>
          <div className="flex w-full gap-x-[20px] mt-[40px]">
            <Button variant="lightBue" onClick={handleDownloadResume()} className="flex gap-x-[10px]">
              <Scroll className="w-4" />
              Download Resume
            </Button>
            <Button variant="lightBue" onClick={() => scrollToContact()} className="flex gap-x-[10px]">
              <User className="w-4" />
              Contact
            </Button>
          </div>
        </div>

        <Image src="/self.jpg" className="rounded-xl" alt="Picture of the author" width={700} height={700} />

      </div>

      {/* ABOUT ME */}
      <div ref={aboutMeRef} className="flex flex-col items-center px-[350px]">
        <div className="text-5xl font-bold mt-[60px]">About Me</div>
        <div className="text-2xl text-gray-400 text-center mt-[20px]">
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
      <div className="flex flex-col justify-center items-center">
        <div className="text-xl font-semibold mt-[40px]">Some of my favourites</div>
        <div className="flex flex-row w-full justify-center items-center gap-x-[50px] px-[100px] mt-[40px]">
          <Image src="/nextjs_logo.png" width={150} height={150} alt="" />
          <Image src="/nodejs_logo.png" width={150} height={150} alt="" />
          <Image src="/react_logo.png" width={150} height={150} alt="" />
          <Image src="/wikileaks_logo.png" width={150} height={150} alt="" />
          <Image src="/google_logo.png" width={150} height={150} alt="" />
          <Image src="/netflix_logo.png" width={150} height={150} alt="" />
        </div>
      </div>

      {/* MY SKILLS HEADINGS */}
      <div ref={skillsRef} className="flex flex-col items-center px-[350px]">
        <div className="text-xl font-semibold mt-[60px]">My Skills</div>
        <div className="text-4xl font-bold mt-[10px]">What I do</div>
        <div className="text-2xl text-gray-400 text-center mt-[20px]">
          {"I'm not just a developer; I'm a digital explorer with a wide range of skills. Crafting immersive online experiences is not just a job but my passion. Discover below how my curiosity and versatility can benefit you."}
        </div>
      </div>

      {/* MY SKILLS */}
      <div className="grid grid-cols-3 px-[200px]">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center px-4 mt-[40px]">
            <div className={`rounded-full bg-cyan-600 hover:bg-cyan-500 text-white p-3 cursor-pointer ${skill.hoverClass}`}>{skill.icon}</div>
            <div className="text-xl font-bold mt-[20px]">{skill.title}</div>
            <div className="text-center mt-[20px]">{skill.description}</div>
          </div>
        ))}
      </div>

      {/* PROJECTS HEADINGS */}
      <div ref={projectsRef} className="flex flex-col items-center px-[350px]">
        <div className="text-4xl font-bold mt-[60px]">My Projects</div>
        <div className="text-2xl text-gray-400 text-center mt-[20px]">
          {"Explore some of my projects showcasing my expertise in full stack development. From dynamic web applications to innovative backend solutions, each project highlights my skills, creativity, and dedication to delivering high-quality results."}
        </div>
      </div>

      {/* MY PROJECTS */}
      <div className="grid grid-cols-3 gap-x-[20px] px-[200px]">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col h-full bg-gray-200 rounded-xl shadow-lg mt-[40px] p-[20px]">
            <div className="flex flex-col h-full justify-between items-center">
              <div className="flex flex-col items-center">
                <div className="h-[200px] flex items-center justify-center">
                  <Image
                    src={project.imagePath}
                    width={300}
                    height={200}
                    alt=""
                    className="object-cover max-h-[200px] w-auto"
                  />
                </div>
                <div className="text-xl font-bold mt-[20px]">{project.title}</div>
                <div className="text-center mt-[20px]">{project.description}</div>
              </div>
              <Button
                onClick={() => window.open(project.link, "_blank")}
                className="mt-[40px] p-[10px]"
                variant="lightBue"
              >
                View Project
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* CONTACT */}
      <div className="flex flex-col items-center px-[350px]">
        <div className="text-4xl font-bold mt-[100px]">Contact Me</div>
        <div className="text-xl text-gray-400 text-center w-[550px] mt-[20px]">
          {"I'm always open to new opportunities, collaborations, and exciting projects. If you'd like to get in touch, feel free to reach out."}
        </div>
      </div>

      <div ref={contactRef} className="flex justify-center w-full">
        <div className="flex flex-col bg-cyan-600 text-white rounded-xl w-[600px] px-4 mt-[20px]">
          <div className="text-2xl font-bold mt-[15px]">Contact Information</div>

          <div className="flex gap-x-[15px] mt-[20px]">
            <University className="w-5" />
            <div className="font-semibold">Student No. 34906258</div>
          </div>

          <div className="flex gap-x-[15px] mt-[15px]">
            <Phone className="w-5" />
            <div className="font-semibold">012 345 6789</div>
          </div>

          <div className="flex gap-x-[15px] my-[15px]">
            <Mail className="w-5" />
            <div className="font-semibold">markus.marais@outlook.com</div>
          </div>

        </div>
      </div>

      <ScrollToTopButton />
    </main>
  );
}
