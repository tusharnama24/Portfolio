import React from "react";
import Qissaa from "../assets/Qissaa.png";
import Badge from "../assets/Badge.png";
import real from "../assets/real.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <>
      <div className="flex max-sm:m-8 text-7xl hover:transition-colors  hover:text-gray-500 text-white righteous-regular justify-center  items-center">
        Projects
      </div>
      <div className="flex flex-col justify-center items-center max-sm:m-4  ">
        <div className="w-full mt-24">
          <div className="bg-yellow-500   rounded-lg  flex flex-col md:flex-row hover:transition hover:ease-in-out hover:translate-x-2 hover:translate-y-2">
            <div className=" flex items-center justify-center p-6">
              <img
                src={Qissaa}
                alt="Image"
                width="200"
                height="200"
                className="rounded-full"
                style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
              />
            </div>
            <div className="w-full mt-1 md:w-[80%] p-8">
              <div className=" text-3xl cursor-default font-bold text-indigo-600">
              The_digital_heist
              </div>
              <p className="text-black cursor-default text-lg mt-4 mb-4">
              Created a college club event website using HTML, CSS, and JavaScript, providing an engaging platform for event announcements and registrations. Implemented interactive elements and responsive design to ensure seamless user experience across all devices.
              </p>
              <div>
                <div className="flex cursor-default justify-start font-semibold text-md">
                HTML, CSS, JavaScript
                </div>
                <div className="flex justify-end mt-4">
                  <a
                    href="https://github.com/tusharnama24/the_digital_heist/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-950 text-white hover:bg-blue-900 h-10 px-4 py-2">
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        className="mr-2 inline-flex items-center  justify-center"
                      />
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full mt-16">
          <div className="bg-green-500   rounded-lg  flex flex-col md:flex-row hover:transition hover:ease-in-out hover:translate-x-2 hover:translate-y-2">
            <div className="flex items-center justify-center p-6">
              <img
                src={Badge}
                alt="Image"
                width="200"
                height="200"
                style={{ aspectRatio: "200 / 200", objectFit: "contain" }}
              />
            </div>
            <div className="w-full mt-1 md:w-[80%] p-8">
              <div className=" text-3xl cursor-default font-bold  text-indigo-600">
                Cypher Web
              </div>
              <p className="text-black cursor-default text-lg mt-4 mb-4">
              Built a website for the college cybersecurity club using React.js, Node.js and Firebase, providing a platform for members to share resources and updates. Ensured secure user authentication and real-time data synchronization for enhanced user interaction.
              </p>
              <div>
                <div className="flex cursor-default justify-start font-semibold text-md">
                  React, Tailwind, Node, Express, MongoDB
                </div>
                <div className="flex justify-end mt-4">
                  <a
                    href="https://github.com/Yug2801/CYPH3R_WEB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-950 text-white hover:bg-blue-900 h-10 px-4 py-2">
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        className="mr-2 inline-flex items-center  justify-center"
                      />
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-16">
          <div className="bg-red-500   rounded-lg  flex flex-col md:flex-row hover:transition hover:ease-in-out hover:translate-x-2 hover:translate-y-2">
            <div className=" flex items-center justify-center p-6">
              <img
                src={real}
                alt="Image"
                width="200"
                height="200"
                className="rounded-full"
                style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
              />
            </div>
            <div className="w-full mt-1 md:w-[80%] p-8">
              <div className=" text-3xl cursor-default font-bold  text-indigo-600">
                E-commerce
              </div>
              <p className="text-black cursor-default text-lg mt-4 mb-4">
              "I design user-friendly and visually appealing eCommerce websites that enhance the shopping experience. My focus is on creating intuitive navigation, clean layouts, and attractive product displays to boost engagement and conversions. By prioritizing responsive design and seamless UX/UI, I ensure the platform works smoothly across all devices and provides an enjoyable shopping journey for users."


              </p>
              <div>
                <div className="flex cursor-default justify-start font-semibold text-md">
                  Next,TypeScript, Node, Express, MongoDB
                </div>
                <div className="flex justify-end mt-4">
                  <a
                    href="https://github.com/Yug2801/ecom_front"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-950 text-white hover:bg-blue-900 h-10 px-4 py-2">
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        className="mr-2 inline-flex items-center  justify-center"
                      />
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
