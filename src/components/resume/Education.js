import React from 'react'
import ResumeCard from './ResumeCard'
import { motion} from "framer-motion"

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className='w-full flex flex-col'>

        {/* Part One */}
        <div className="py-12 font-titleFont text-center">
          <p className="text-sm text-designColor tracking-[4px]">2018-2022</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>

        {/* Part Two */}
        <div className="mt-14 w-full lg:w-1/2 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
      </motion.div>
  )
}

export default Education
