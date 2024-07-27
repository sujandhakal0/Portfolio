import React from "react";
import Hero from "./sub-components/Hero";
import Timeline from "./sub-components/Timeline";
import About from "./sub-components/About";
import Skills from "./sub-components/Skills";
import Portfolio from "./sub-components/Portfolio";
import MyApps from "./sub-components/MyApps";
import Contact from "./sub-components/Contact";
import { ModeToggle } from "@/components/mode-toggle";


const Home = () => {
  return (
    <div className="px-4 mt-10 sm:mt-14 md:mt-16 lg:mt-24  sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14 ">
      <div>
        {" "}
        <ModeToggle />
      </div>
      <Hero />
      <Timeline />
      <About />
      <Skills />
      <Portfolio />
      <MyApps />
      <Contact />
    </div>
  );
};

export default Home;
