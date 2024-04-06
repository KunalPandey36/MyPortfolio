import React from 'react'

import { motion} from "framer-motion"
import SkillCard from './SkillCard'

const Skill = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}}>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Development Skills</h2>
        </div>
        <div className="mt-14 w-full gap-4  flex flex-col h-[600px] border-l-[6px] border-l-black border-opacity-30">
          <SkillCard title="Python" />
          <SkillCard title="C++" />
          <SkillCard title="Core Java"/>
          <SkillCard title="Java Script"  />
          <SkillCard title="Node JS"  />
          <SkillCard title="Flask"  />
          <SkillCard title="React"  />
          <SkillCard title="Tailwind"  />
          <SkillCard title="AWS"  />
          <SkillCard title="MySQL and NoSQL"  />
        </div>
      </motion.div>
  )
}

export default Skill
