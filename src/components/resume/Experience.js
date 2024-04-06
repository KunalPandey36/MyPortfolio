import React from 'react'
import ResumeCard from './ResumeCard'
import { motion} from "framer-motion"

const Experience = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className='w-full flex flex-col '>
        <div className="py-12 font-titleFont text-center">
          <p className="text-sm text-designColor tracking-[4px]">2022-present</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full lg:w-1/2 h-[2000px] lg:h-[1100px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-5 lg:gap-10">
          <ResumeCard
            title="Technical Consulting Engineer II"
            subTitle="CISCO Systems Nov 2023 - current"
            des="I have also begun mentoring junior team members and have become involved in multiple projects. As I take on additional accounts and responsibilities, I continue to strive for excellence in all aspects of my work."
          />
          <ResumeCard
            title="Technical Consulting Engineer I"
            subTitle="CISCO Systems Aug 2022 - Nov 2023"
            des = "I've collaborated with different teams to create Automation and Dashboards, utilizing API and Frontend technologies to facilitate data delivery for the Network consulting team. Currently, I manage 17 accounts across the EMEA region. Additionally, I'm an active member of the CXTI automation team (Synergo), focusing on SLM (Software Lifecycle Management) automation. Our efforts have reduced onboarding time from 30 minutes to just 5 minutes, showcasing our commitment to efficiency and innovation."
          />
          <ResumeCard
            title="Technical Undergraduate Intern"
            subTitle="CISCO Systems Feb 2022 - Jun 2022"
            des = "Achieved CCNA (200-301) and DEVNET (200-901) certifications. Additionally, I led the Full Stack Web Development project for CMS Delivery Tools under the MyDevices team. My efforts in this project were recognized by my mentor, who commended my work and emailed the commendation to my manager."
          />
        </div>
      </motion.div>
  )
}

export default Experience
