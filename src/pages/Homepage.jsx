import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Introduction from '../components/introduction';
import Project from '../components/Project';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import { Element } from 'react-scroll';

const Homepage = () => {
  return (
    <div className=' mt-24 w-full  sm: md: lg: xl: 2xl:'>
      <div className='relative'>
            <img src="https://media.licdn.com/dms/image/v2/D5616AQE7mChAFiWOOw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1730460994817?e=1736985600&v=beta&t=4fM2SGXDm001qyi-GLDQxU2VvUV2cJcjKiJJNT0cJEo" alt="cover image"  className='object-contain w-full h-full rounded-t-2xl'/>

            <div className='absolute -bottom-20 left-5 min-w-48 max-w-48 min-h-48  max-h-48 border-[5px] border-white shadow-2xl z-20 rounded-full bg-slate-400'>
                <img src='https://media.licdn.com/dms/image/v2/D4D03AQFdbpZ8HMnp7A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680116909428?e=1736985600&v=beta&t=W1_miwuONtsTcbgz3sAbzx645rXImoblDsoGzenqU4Q' alt='' className='object-cover rounded-full '/>
            </div>
      </div>

      {/* Introduction Section */}
        <Introduction/>

      {/* Project Section */}
        
        <Element name="projects" className="section">
          <Project/>
        </Element>

        {/* Skills Section */}
        
        <Element name="skills" className="section">
          <Skills/>
        </Element>

        {/* Experience Section */}
        <Element name="experience" className="section">
          <Experience/>
        </Element>


        {/* About Section */}
        <Element name="about" className="section">
          <About/>
        </Element>
       

      
      
    </div>
  )
}

export default Homepage
