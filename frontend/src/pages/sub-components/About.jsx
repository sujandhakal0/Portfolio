import React, { useEffect, useState } from "react";
import profile3 from "./images/profile3.jpg";
const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
    
    <h1 className="overflow-x-hidden text-[2rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem]  font-semibold letter-spaced dark:text-gray-100">
        About
      </h1>

      <div className="">
        <div className="text-center">
          {/* <p className="uppercase text-lg font-semibold text-gray-2">
          Allow me to introduce myself.
        </p> */}
        </div>
        <div>
          <div className="grid md:grid-cols-2 my-8 sm:my-20 ">
            <div className="flex ml-6 items-center ">
              <img
                src={profile3}
                alt="avatar"
                className="bg-gray-100 p-2 sm:p-3  h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px] "
              />
            </div>
            <div className="flex justify-center text-justify flex-col tracking-[1px] text-xl  dark:text-gray-300  ">
              <p>
                As a dedicated web developer, I am passionate about creating
                user-friendly and visually appealing applications. My journey in
                the world of web development has been fueled by a never-ending
                thirst for knowledge, as I continuously expand my skills and
                explore the latest technologies.
              </p>
            </div>
          </div>
          <p className="tracking-[1px] text-xl dark:text-gray-300 ">
            My dedication and perseverance in timely delivery of work are
            integral to me. I maintain the courage to face any challenges for
            extended periods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
