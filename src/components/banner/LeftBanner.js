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
          I'm a passionate Engineer at Cisco, deeply immersed in programming
          languages like C, C++, Python, Java and I thrive in coding challenges. I'm
          also proficient in ReactJS for web frontend development, along with
          frameworks like Node.js and Flask for backend, adding versatility to
          my skill set. Beyond my professional pursuits, I'm deeply into
          building projects that push boundaries and explore new horizons.
          Off-duty, you'll find me on the football field, but my true passion
          lies in crafting innovative solutions through coding.
        </p>

        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between py-20">
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
