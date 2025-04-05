import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3dPin";
import { FaLocationArrow } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small section of{" "}
        <span className="text-[#CBACF9]">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, img, des, iconLists, link }) => (
          <div
            key={id}
            className="w-[80vw] sm:w-[570px] h-[32rem] sm:h-[41rem] lg:min-h-[32.5rem] flex items-center justify-center"
          >
            <PinContainer title={link} href={link}>
              <div className="relative w-[80vw] sm:w-[570px] h-[30vh] sm:h-[40vh] flex items-center justify-center mb-10 overflow-hidden">
                <div className="relative w-full h-full bg-[#13162d] lg:rounded-3xl overflow-hidden">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="absolute bottom-0 z-10 "
                />
              </div>
              <h1 className="text-base md:text-xl lg:text-2xl font-bold line-clamp-1">
                {title}
              </h1>
              <p className="text-sm lg:text-xl font-tight lg:font-normal line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center border border-white/[0.2] rounded-full"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className="flex text-xs lg:text-sm text-purple-400">
                    Check live site
                  </p>
                  <FaLocationArrow className="ms-3" color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
