import React from "react";
import { useState, useEffect } from "react";
function Quotes() {
  const quotes = [
    "The magic that you are looking for, is in the work that you are avoiding. ~-Unknown",
    "They don't know me son. ~-David Goggins",
    "You miss 100% of the shots you don't take. ~-Wayne Gretzky",
    "Do not pray for an easy life, pray for the strength to endure a difficult one. ~-Bruce Lee",
    "I Think, Therefore I Am. ~-René Descartes",
    "I am. ~-Tushar",
    "Do Leetcode or Die Tryin'. ~-Recruiters",
    "This is your life, and it’s ending one moment at a time. ~-Tyler Durden",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [quotes.length]);
  return (
    <>
      <div className=" max-sm:m-8 rounded-2xl  overflow-hidden bg-blue-950 flex flex-col justify-center items-center md:h-full md:w-full">
        <div className="text-center max-sm:mt-4 text-3xl righteous-regular pl-4 pr-4 pb-12 text-lime-200">
          {quotes[currentQuoteIndex].split("~")[0]}
        </div>
        <div className="text-center max-sm:pb-4 text-[2.5rem] tangerine-regular text-lime-200">
          {quotes[currentQuoteIndex].split("~")[1]}
        </div>
      </div>
    </>
  );
}

export default Quotes;
