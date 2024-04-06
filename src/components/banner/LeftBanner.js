import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import { SiJavascript, SiReact } from "react-icons/si";
import { DiPython, DiNodejs, DiJava } from "react-icons/di";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [" Professional Coder.", " Full Stack Developer.", " UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div>
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Kunal Pandey</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a passionate Engineer at Cisco, deeply
          immersed in programming languages like C, C++, Python, and more.
          Beyond the tech realm, I'm an avid football player, relishing every
          moment on the field with friends. Singing is another passion of mine,
          despite my humble skills in that area. Continuously fueling my passion
          for technology and exploring my interests beyond, I'm committed to
          both personal and professional growth.
        </p>

        <div className="flex justify-between py-20">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/kunal-pandey-6599b1190/">
                <span className="bannerIcon">
                  <FaLinkedin />
                </span>
              </a>

              <a href="https://github.com/KunalPandey36">
                <span className="bannerIcon">
                  <FaGithub />
                </span>
              </a>
              <a href="https://www.hackerrank.com/profile/kunalpa4007">
                <span className="bannerIcon">
                  <FaHackerrank />
                </span>
              </a>
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
      </div>
    </div>
  );
};

export default LeftBanner;
