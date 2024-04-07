import React from 'react'
import ResumeCard from './ResumeCard'
import { motion} from "framer-motion"

const Achievement = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className='w-full flex flex-col'>
        <div className="py-12 font-titleFont text-center">
          {/* <p className="text-sm text-designColor tracking-[4px]">2017-present</p> */}
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full lg:w-1/2 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Certifications"
            subTitle=" CCNA (200-301), DEVNET (200-901) and Machine Learning Certified"
          />
          <ResumeCard
            title="Hackathon"
            subTitle="HackElite All India Hackathon and Bridge-A-Thon"
            des="Ranked 7th in “HackElite All India Hackathon” organized by JSS College Mysore and Finalist in “Bridge-A-Thon” Organized by Cisco CX-PS"
          />
          <ResumeCard
            title="Hackerrank"
            subTitle="5 Star in Problem Solving with C++ and Python"
          />
        </div>
      </motion.div>
  )
}

export default Achievement
