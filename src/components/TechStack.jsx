import React from "react";
import {
  SiMongodb,
  SiTypescript,
  SiPrisma,
  SiJavascript,
  SiExpress,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiNodejsLine, RiNextjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandReact } from "react-icons/tb";

function TechStack() {
  return (
    <div class="">
      <div className="bg-gray-900 text-blue-200 max-sm:m-8 md:h-[35rem] lg:h-[37rem] xl:h-[35.5rem] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center text-5xl text-white righteous-regular justify-center pb-10 ">
          TechStack
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16 gap-4">
          <div className="flex flex-col items-center gap-2">
            <TbBrandReact
              className="size-10 md:size-12 lg:size-16 hover:transition hover:translate-y-1"
              style={{ color: "#63E6BE" }}
            />
            <span className="text-lg font-medium">React</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiJavascript
              className="size-10 hover:transition hover:translate-y-1 md:size-12 lg:size-16"
              style={{ color: "#63E6BE" }}
            />
            <span className="text-lg font-medium">JavaScript</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiMongodb
              className="size-10 hover:transition hover:translate-y-1 md:size-12 lg:size-16"
              style={{ color: "#63E6BE" }}
            />
            <span className="text-lg font-medium">MongoDB</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiPrisma
              className="size-10 hover:transition hover:translate-y-1 md:size-12 lg:size-16"
              style={{ color: "#63E6BE" }}
            />
            <span className="text-lg font-medium">Prisma</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RiNodejsLine
              className="size-10 hover:transition hover:translate-y-1 md:size-12 lg:size-16"
              style={{ color: "#63E6BE" }}
            />
            <span className="text-lg font-medium">Node.js</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiTypescript
              className="size-10 rounded-none hover:transition hover:translate-y-1 md:size-12 lg:size-16"
              style={{ color: "#63E6BE" }}
            />
            <span className="text-lg font-medium">TypeScript</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BiLogoTailwindCss
              className="size-10 hover:transition hover:translate-y-1 md:size-12 lg:size-16"
              style={{ color: "#63E6BE" }}
            />
            <span className="text-lg font-medium">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RiNextjsFill
              className="size-10 hover:transition hover:translate-y-1 md:size-12 lg:size-16"
              style={{ color: "#63E6BE" }}
            />
            <span className="text-lg font-medium">Next.js</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaGitAlt
              className="size-10 hover:transition hover:translate-y-1 md:size-12 lg:size-16"
              style={{ color: "#63E6BE" }}
            />
            <span className="text-lg font-medium">Git</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiExpress
              className="size-10 hover:transition hover:translate-y-1 md:size-12 lg:size-16"
              style={{ color: "#63E6BE" }}
            />
            <span className="text-lg font-medium">Express</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
