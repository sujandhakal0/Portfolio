import axios from "axios";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Hero = () => {

  const [user, setUser] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      try {
        // https://portfolio-backend-91np.onrender.com
        const { data } = await axios.get(
          "https://portfolio-backend-91np.onrender.com/api/v1/user/portfolio/me",
          {
            withCredentials: true,
          }
        );
        setUser(data.user);
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();
  }, []);

  return (
    <div className="w-full dark:text-gray-300">
      <div className="flex items-center gap-2 mb-2">
        <span className="dark:bg-green-400 bg-green-800 rounded-full h-2 w-2 "></span>
        <p className="">Online</p>
      </div>
      <h1
        className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] 
      md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-2"
      >
        {/* Hey, I'm {user.fullName} */}
        Hey, I'm Sujan
      </h1>
      {/* text-tubeLight-effect */}
      <h1
        className="overflow-x-hidden text-[1.3rem] 
      sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px] dark:text-green-200 text-green-800"
      >
        <Typewriter
          words={["MERN STACK DEVELOPER"]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div
        className="  w-fit  py-2  rounded-[20px] flex gap-5 
      items-center mt-2"
      >
        <Link to={"https://www.linkedin.com/in/sujan-dhakal-164931243/"} target="_blank">
          <FaLinkedin className=" w-7 h-7 dark:text-blue-400 text-blue-600 dark:hover:text-blue-500 hover:text-blue-300" />
        </Link>
        <Link to={user.instaURL} target="_blank">
          <FaInstagram className=" w-7 h-7 dark:text-pink-400 text-pink-600 dark:hover:text-pink-500 hover:text-pink-300" />
        </Link>
        <Link to={user.githubURL} target="_blank">
          <FaGithub className=" w-7 h-7 hover:text-gray-400 dark:hover:text-gray-200" />
        </Link>
      </div>

      <div className="mt-4 md:mt-8 lg:mt-10  flex gap-3">
        <Link to={user.resume && user.resume.url} target="_blank">
          <Button className="rounded-[30px] dark:bg-gray-200 dark:hover:bg-gray-500 hover:bg-gray-500 flex items-center gap-2 flex-row">
            <span>
              <ExternalLink />
            </span>
            <span>Resume </span>
          </Button>
        </Link>
      </div>
      <p className="mt-8 text-xl tracking-[2px]">{user.aboutMe}</p>
      <hr className="my-8 md::my-10 " />
    </div>
  );
};

export default Hero;
