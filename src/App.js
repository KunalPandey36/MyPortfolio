import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import React from 'react'
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText ps-4">
      <div className="max-w-screen-xl mx-auto">
        <Navbar/>
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
