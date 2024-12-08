import React from "react";
import hero from "../assets/hero.jpg";
function Photo() {
  return (
    <>
      <div className=" max-sm:m-4 lg:h-[32rem] xl:h-[41rem] rounded-2xl bg-amber-700  overflow-hidden">
        <img src={hero} className=" object-contain"></img>
      </div>
    </>
  );
}

export default Photo;
