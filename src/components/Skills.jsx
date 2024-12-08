import React from "react";

function Skills() {
  return (
    <>
      <div className="rounded-2xl  max-sm:m-8  md:h-[35rem] lg:h-[17rem]  bg-[#6670f8] p-6 ">
        <div className="text-5xl text-white righteous-regular pb-8 md:pb-16 lg:pb-8">
          Skills
        </div>
        <div className="grid text-xl grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 cursor-default font-semibold text-2xl lg:text-xl">
            <div className="text-red-950 font-bold  hover:transition hover:translate-y-1 hover:underline ">
              Data Structures
            </div>
            <div className="text-red-950 font-bold    hover:transition hover:translate-y-1 hover:underline ">
              Artificial Intelligence
            </div>
            <div className="text-red-950 font-bold  hover:transition hover:translate-y-1 hover:underline ">
              Web Development
            </div>
          </div>
          <div className="space-y-2 cursor-default font-semibold text-2xl lg:text-xl">
            <div className="text-red-950 font-bold  hover:transition hover:translate-y-1 hover:underline ">
              Software Engineering
            </div>
            <div className="text-red-950 font-bold  hover:transition hover:translate-y-1 hover:underline ">
              UI/UX Designing
            </div>
            <div className="text-red-950 font-bold  hover:transition hover:translate-y-1 hover:underline ">
              DB Management
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
