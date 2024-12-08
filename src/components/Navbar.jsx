import React from "react";

function Navbar() {
  return (
    <header class="flex  h-20  opacity-85 rounded-2xl shrink-0  xl:md:mx-40  lg:mx-30 md:mx-10 max-sm:m-8 mt-8 max-xl:mb-6 ">
      <a class="mr-6 flex items-center" href="">
        <span class="text-4xl md:text-5xl font-bold jersey-25-charted-regular ">
          Tushar
        </span>
      </a>

      <div class="ml-auto  items-center gap-4 flex">
        <a
          class="inline-flex h-9 w-max items-center justify-center   rounded-md text-lg px-4 py-2 md:text-2xl font-semibold transition-colors hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
          href="#contact"
        >
          Contact
        </a>
        <a
          class="inline-flex h-9 w-max items-center text-lg md:text-2xl font-semibold  justify-center rounded-md  px-4 py-2   transition-colors hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
          href="#projects"
        >
         My Projects
        </a>
      </div>
    </header>
  );
}

export default Navbar;
