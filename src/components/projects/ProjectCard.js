import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, des, image, gitlink }) => {
  return (
    <div
      className="flex flex-col w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne
    bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 
    hover:bg-gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-[50%] overflow-hidden rounded-lg ">
        <img
          src={image}
          alt="Project_image"
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h3 className="text-base uppercase text-designColor font-normal">
            {title}
          </h3>
          {gitlink && (
            <span
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center 
              text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <a href={gitlink}>
                <FaGithub />
              </a>
            </span>
          )}
        </div>
      </div>
      <div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-100">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
