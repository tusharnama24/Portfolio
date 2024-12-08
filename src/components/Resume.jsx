import React from "react";
import TusharResume from "../assets/docs/Resume.pdf";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = TusharResume; // Use the imported file path
    link.download = "TusharResume.pdf"; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative rounded-2xl hover:scale-95 hover:transition  bg-yellow-500 cursor-pointer hover:bg-yellow-700 transition-colors duration-300  max-sm:m-8 max-sm:h-80 md:w-56 md:h-[35rem]  lg:h-full lg:w-full">
      <div className=" flex justify-end p-4">
        <button
          onClick={handleDownload}
          className="hover:animate-bounce inline-flex items-center text-black bg-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-[3.5rem] w-[3.5rem] sm:h-[4rem] sm:w-[4rem] xl:h-[2.5rem] xl:w-[2.5rem] hover:translate-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-gray-250"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line>
          </svg>
        </button>
      </div>
      <div className="absolute bottom-4 max-sm:text-3xl md:text-3xl lg:text-4xl xl:text-2xl right-4 text-white righteous-regular">
        Resume
      </div>
    </div>
  );
}
