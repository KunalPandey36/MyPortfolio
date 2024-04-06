import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { nwem,Enplugged,MarketPlace,Myde,Sentiment } from '../../assets'


const Projects = () => {
  return (
   <section id="projects" className='w-full py-20 border-b-[1px] border-b-black'>
    <div className='flex justify-center items-center text-center'>
    <Title title="Visit My Portfolio" des="My Projects" />
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectCard title="Market-Place" des="Marketplace is a dynamic full-stack web development project enabling users to buy and sell items through a bidding system. Built with React on the frontend and Express on the backend, it offers a seamless online marketplace experience." image = {MarketPlace} gitlink = "https://github.com/KunalPandey36/Market-Place"/>
        <ProjectCard title="NewsMonkey" des="NewsMonkey is a comprehensive news website offering up-to-date news across all sections. Powered by React and Express.js, it seamlessly integrates with APIs to deliver the latest news articles, ensuring users stay informed on a wide range of topics." image = {nwem} gitlink="https://github.com/KunalPandey36/NewsMonkey"/>
        <ProjectCard title="Student Sentiment Analysis" des="Using NLP it will analyze the sentiment of the students comment. This project was on the data provided by Thoughtfocus." image = {Sentiment} gitlink="https://github.com/KunalPandey36/Student_Sentiment_Analysis"/>
        <ProjectCard title="Enplugged" des="Enplugged is a robust social network connecting entrepreneurs, investors, mentors, and students. Developed with Flutter and Firebase, it integrates machine learning predictions via Flask API for insightful company futures." image = {Enplugged} gitlink="https://github.com/prisinha23/Enplugged_V.1.0"/>
        <ProjectCard title="MyDevices" des="Our website stores all information about network devices, such as warranty and location, by establishing SSH connections.This whole data will be shown in the frontend, where user can apply filter to download the data." image = {Myde}/>
    </div>
    
   </section>
  )
}

export default Projects
