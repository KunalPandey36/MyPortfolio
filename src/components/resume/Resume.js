import React, { useState } from "react";
import Title from "../layouts/Title";

import Education from "./Education";
import Skill from "./Skill";
import Experience from "./Experience";
import Achievement from "./Achievement";


const Resume = () => {
    const [educationData,setEducationData] = useState(true);
    const [skillData,setSkillData] = useState(false);
    const [experienceData,setExperienceData] = useState(false);
    const [achievementData,setAchievementData] = useState(false);
  return (
    <section className="w-full py-20 border-b-[1px] border-b-black" id="resume">
      <div className="flex justify-center items-center text-center">
        <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <li  onClick={()=>
                setEducationData(true) &
                setAchievementData(false) &
                setExperienceData(false) &
                setSkillData(false)
            }
            className={`${educationData ? "border-designColor rounded-lg":"border-transparent"} resumeLi`}
         >Education</li>
        <li  onClick={()=>
                setEducationData(false) &
                setAchievementData(false) &
                setExperienceData(false) &
                setSkillData(true)
            }
            className={`${skillData ? "border-designColor rounded-lg":"border-transparent"} resumeLi`}
            >Professional Skills</li>
        <li  onClick={()=>
                setEducationData(false) &
                setAchievementData(false) &
                setExperienceData(true) &
                setSkillData(false)
            }
            className={`${experienceData ? "border-designColor rounded-lg":"border-transparent"} resumeLi`}
            >Experience</li>
        <li  onClick={()=>
                setEducationData(false) &
                setAchievementData(true) &
                setExperienceData(false) &
                setSkillData(false)
            }
            className={`${achievementData ? "border-designColor rounded-lg":"border-transparent"} resumeLi`}
            >Achievement</li>
      </ul>

        {
            educationData && <Education />
        }
        {
            skillData && <Skill />
        }
        {
            experienceData && <Experience />
        }
        {
            achievementData && <Achievement />
        }

      {/* <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2018-2022</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-14 w-1/2 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Engineering"
            subTitle="Siddaganga Institute of Technology (2018-2022)"
            result="8.77/10"
            branch="Information Science and Engineering"
          />
          <ResumeCard
            title="Class 12th"
            subTitle="Kendriya Vidyalaya (2017-2018)"
          />
          <ResumeCard
            title="Class 10th"
            subTitle="Kendriya Vidyalaya (2015-2016)"
          />
        </div>
      </div> */}
      {/* <Education />
      <Skill />
      <Experience />
      <Achievement /> */}
    </section>
  );
};

export default Resume;
