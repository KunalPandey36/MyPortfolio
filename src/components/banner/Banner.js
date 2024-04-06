import React from "react";
import LeftBanner from "./LeftBanner";
import { OIP } from "../../assets";


const Banner = () => {
  // Using Type writer
  
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-cente border-b-[1px] border-b-black font-titleFont"
    >
      {/* <div className="w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELOCME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            {" "}
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Kunal Pandey</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a {" "}<span>{text}</span>
            <Cursor cursorBlinking="false"
            cursorStyle = "|"
            cursorColor="#ff014f" />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            expedita ipsam voluptatibus iure praesentium voluptatum totam animi
            odio assumenda explicabo. Aut laboriosam molestias enim non vel
            consectetur veniam repellendus cupiditate?
          </p>
        </div>
        <div className="flex justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaLinkedin />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
              <FaHackerrank />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best skill on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <DiPython />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <DiJava />
            </span>
            <span className="bannerIcon">
              <SiReact />
            </span>
            <span className="bannerIcon">
              <DiNodejs />
            </span>
          </div>
        </div>
        </div>
      </div> */}
      <div className="w-1/2 flex flex-col gap-24 py-32">
      <LeftBanner />
      </div>
      
      <div className="w-1/2 flex justify-center items-center relative shadow-shadowOne">
        <img  className="w-[550px] h-[680px] z-10 shadow-lg" src={OIP} alt="Kunal" />
        <div className=" absolute bottom-0 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">

        </div>
      </div>
    </section>
  );
};

export default Banner;
