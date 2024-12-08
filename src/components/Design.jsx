import React from "react";
import image from "../assets/image.png";
import poster from "../assets/poster.gif";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaGoogleDrive } from "react-icons/fa";


function Designs() {
  return (
    <>
      <div className="flex max-sm:m-8 text-7xl hover:transition-colors  hover:text-gray-500 text-white righteous-regular justify-center  items-center">
        Designs
      </div>
      <div className="flex flex-col justify-center items-center max-sm:m-4  ">
        <div className="w-full mt-24">
          <div className="bg-yellow-500   rounded-lg  flex flex-col md:flex-row hover:transition hover:ease-in-out hover:translate-x-2 hover:translate-y-2">
            <div className=" flex items-center justify-center p-6">
              <img
                src={image}
                alt="Image"
                width="200"
                height="200"
                className="rounded-full"
                style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
              />
            </div>
            <div className="w-full mt-1 md:w-[80%] p-8">
              <div className=" text-3xl cursor-default font-bold text-indigo-600">
              Crave Cast
              </div>
              <p className="text-black cursor-default text-lg mt-4 mb-4">
              Crave Cast is a design project created in Figma that focuses on delivering a clean and user-friendly interface. It showcases thoughtful design choices and intuitive user experiences, reflecting creativity and attention to detail.
              </p>
              <div>
                <div className="flex cursor-default justify-start font-semibold text-md">
                Figma
                </div>
                <div className="flex justify-end mt-4">
                  <a
                    href="https://www.figma.com/design/ermLVjHHKVFvfKp6pUPHI7/Food-App-UI?node-id=2313-295&node-type=frame&t=U2GC0Qa3WiArA9Lh-0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-950 text-white hover:bg-blue-900 h-10 px-4 py-2">
                      
                      Drive
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
                src={poster}
                alt="Image"
                width="200"
                height="200"
                style={{ aspectRatio: "200 / 200", objectFit: "contain" }}
              />
            </div>
            <div className="w-full mt-1 md:w-[80%] p-8">
              <div className=" text-3xl cursor-default font-bold  text-indigo-600">
                Posters
              </div>
              <p className="text-black cursor-default text-lg mt-4 mb-4">
              "My poster designs are crafted to be visually striking and purpose-driven. I focus on clear messaging, bold typography, and engaging visuals to capture attention instantly. Each poster reflects a balance of creativity, clarity, and effective communication, ensuring the core message resonates with the target audience."
              </p>
              <div>
                <div className="flex cursor-default justify-start font-semibold text-md">
                  Canva
                </div>
                <div className="flex justify-end mt-4">
                  <a
                    href="https://drive.google.com/drive/folders/1h8fUMkOMa8TXSW257cyrkqSSfkE2T1kW?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-950 text-white hover:bg-blue-900 h-10 px-4 py-2">
                      <FontAwesomeIcon
                        icon={FaGoogleDrive}
                        size="lg"
                        className="mr-2 inline-flex items-center  justify-center"
                      />
                      Drive
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
                src={logo}
                alt="Image"
                width="200"
                height="200"
                className="rounded-full"
                style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
              />
            </div>
            <div className="w-full mt-1 md:w-[80%] p-8">
              <div className=" text-3xl cursor-default font-bold  text-indigo-600">
                Logo
              </div>
              <p className="text-black cursor-default text-lg mt-4 mb-4">
              "I create logos that are memorable, versatile, and meaningful. Each design is based on a deep understanding of the brand's identity, values, and audience. I focus on combining simplicity with creativity to deliver logos that not only look visually appealing but also communicate the brand's essence effectively across all platforms."


              </p>
              <div>
                <div className="flex cursor-default justify-start font-semibold text-md">
                  Canva
                </div>
                <div className="flex justify-end mt-4">
                  <a
                    href="https://drive.google.com/drive/folders/1H7igwhhypUoYyl3CvnRscWZ434H7uVFM?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-950 text-white hover:bg-blue-900 h-10 px-4 py-2">
                      <FontAwesomeIcon
                        icon={FaGoogleDrive}
                        size="lg"
                        className="mr-2 inline-flex items-center  justify-center"
                      />
                      Drive
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

export default Designs;
