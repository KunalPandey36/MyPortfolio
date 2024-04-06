import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { CgGlobeAlt } from "react-icons/cg";
import { LuNetwork } from "react-icons/lu";
import { FaBilibili } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa6";

const Features = () => {
  return (
    <section id='features' className='w-full pt-10 pb-20 items-center border-b-[1px] border-b-black'>
        <Title title="Features" des="What I do"/>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
        <Card title="Web Development" des="Developed a lot of website with the help of nodejs and react." icon={<CgGlobeAlt/>}/>
        <Card title="Automation" des="Developed automation for my team, which helps to save 90% time." icon={<FaBilibili/>}/>
        <Card title="NLP and Data processing" des="Used NLP to help our team to get information from the articles." icon={<FaFileCode/>}/>
        <Card title="Networking" des="Used my networking skill to check and troubleshoot the protocols" icon={<LuNetwork/>}/>
        
        </div>
    </section>
  )
}

export default Features
