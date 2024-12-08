import React from "react";
import { SiLeetcode, SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
function Links() {
  return (
    <div className="bg-green-400  max-sm:m-8 rounded-lg shadow-lg p-2 grid grid-cols-2 gap-4 justify-items-center   md:h-full md:w-full">
      {/* <a
        href="https://leetcode.com/u/Tushar9/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#e1306c] mt-2 rounded-full flex items-center justify-center text-[#15202b] hover:scale-110 transition-transform"
      >
        <SiLeetcode className="text-white" size={38} />
      </a> */}
      <a
        href="https://www.linkedin.com/in/tushar-nama-184606249/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#e1306c] mt-2 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
      >
        <SiLinkedin size={35} />
      </a>
      {/* <a
        href="https://www.instagram.com/Tusharsinghrajput9?igsh=MXQ4cXBvcTR0eGhwYQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#e1306c] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
      >
        <SiInstagram size={35} />
      </a> */}
      <a
        href="https://github.com/tusharnama24"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#e1306c] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
      >
        <SiGithub size={40} />
      </a>
    </div>
  );
}

export default Links;
