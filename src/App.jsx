import "./App.css";
import React, { useState, useEffect } from "react";
import Projects from "./components/Projects";
import Photo from "./components/Photo";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Links from "./components/Links";
import Quotes from "./components/Quotes";
import Spotify from "./components/Spotify";
import Loader from "./assets/Loader.json";
import Lottie from "lottie-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Designs from "./components/Design";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-black flex justify-center items-center">
        <div className="w-1/2 md:w-[20%]">
          <Lottie animationData={Loader} />
        </div>
      </div>
    );
  }

  return (
    <>
      <div class="flex flex-col justify-center">
        <Navbar />
        <div className="md:grid xl:grid-rows-7 mb-5 xl:grid-cols-7 xl:px-40  lg:h-[75rem] xl:h-full gap-5 lg:px-30  lg:grid-cols-5 lg:grid-rows-8 md:px-10 md:grid-rows-3 md:grid-cols-3 ">
          <div className="xl:col-span-2 xl:row-span-5  max-xl:hidden sm:visible contain-content  ">
            <div className="xl:mt-[3.2rem] ">
              <Photo />
            </div>
          </div>
          <div className="xl:col-span-5 xl:row-span-3   contain-content lg:col-span-5 lg:row-span-3 md:col-span-3">
            <div className="xl:mt-[3.2rem] ">
              <About />
            </div>
          </div>
          <div className="xl:row-span-2 xl:col-span-1 lg:col-span-2 lg:row-span-4 md:col-span-1 ">
            <Resume />
          </div>
          <div className="xl:col-span-4 xl:row-span-4 contain-content lg:col-span-3 lg:row-span-4 md:col-span-2">
            <TechStack />
          </div>
          <div className="xl:col-span-3 xl:row-span-2 lg:col-span-5 md:col-span-3">
            <Skills />
          </div>
        </div>
        <div
          id="Designs"
          className="xl:px-28 md:px-10 lg:px-20 lg:mt-40 xl:mt-20"
        >
          <Designs />
        </div>
        <div
          id="projects"
          className="xl:px-28 md:px-10 lg:px-20 lg:mt-40 xl:mt-20"
        >
          <Projects />
        </div>
       
        <div className="md:mt-12 md:grid md:grid-rows-3 md:grid-cols-3 xl:px-40 lg:px-30 md:px-10 h-[35rem] gap-5  ">
          <div className="md:col-span-1 contain-content ">
            <Links />
          </div>
          <div className="col-span-2 row-span-3 contain-content">
            <Spotify />
          </div>
          <div className="md:col-span-1 md:row-span-2 contain-content">
            <Quotes />
          </div>
        </div>
        <div
          id="contact"
          className="max-sm:mt-[36rem] max-sm:ml-4 max-sm:mr-4 mt-24"
        >
          <Contact />
        </div>
        <footer className="h-[5rem] mt-32">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
