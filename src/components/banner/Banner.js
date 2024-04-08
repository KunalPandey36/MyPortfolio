import React from "react";
import LeftBanner from "./LeftBanner";
import { OIP } from "../../assets";

const Banner = () => {
  // Using Type writer

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col lgl:flex-row items-center border-b-[1px] border-b-black font-titleFont gap-10 xl:gap-0"
    >
      <div className="w-full lgl:w-1/2 flex flex-col gap-24 py-32">
        <LeftBanner />
      </div>

      <div className="w-full lgl:w-1/2 flex justify-center items-center relative shadow-shadowOne">
        <img
          className="w-[250px] h-[400px] lgl:w-[350px] lgl:h-[680px] z-10 shadow-lg"
          src={OIP}
          alt="Kunal"
        />
        <div className=" absolute bottom-0 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px]"></div>
      </div>
    </section>
  );
};

export default Banner;
