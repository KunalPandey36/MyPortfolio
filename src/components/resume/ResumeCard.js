import React from "react";

const ResumeCard = ({ title, subTitle, result, branch,des }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] mt-16 relative bgOpacity">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowOne">
        <div className="flex justify-between">
          <div>
            <h3 className="text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
                {branch}
            </p>
          </div>
          { result && <div
            className="w-20 bg-black rounded-lg h-10 justify-center flex items-center text-sm font-medium
           text-designColor cursor-pointer shadow-shadowOne"
          >
            <p>{result}</p>
          </div>}
        </div>
        <p className="text-base font-medium text-gray-400 group-hover:text-gray-300">{des}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
