import React from 'react'
import SectionCardUI from './SectionCardUI'
import { Client, Databases } from "appwrite";


const About = () => {



  return (

    <SectionCardUI title="About">
        <div className='my-5 text-justify md:text-left '>
            <p className="text-lg  font-bold text-gray-800 my-2">
            🚀 ReactJs Developer | 3 Years Experience in <span className="text-blue-500">Next.js</span>, <span className="text-blue-500">React.js</span>, <span className="text-blue-500">HTML5 & CSS</span> | Creating Seamless User Experiences
            </p>
            
            <p className="my-4 text-gray-700 leading-relaxed">
            As a dedicated Web Developer with <span className="font-semibold text-gray-900">3 years of hands-on experience</span> in <span className="text-blue-500">Next.js</span>, <span className="text-blue-500">React.js</span>, <span className="text-blue-500">HTML5</span>, and <span className="text-blue-500">CSS</span>, I’m passionate about building visually compelling, highly functional web applications. 
            </p>
            
            <p className="my-4 text-gray-700 leading-relaxed">
            I am recognized for my proactive approach and <span className="font-semibold text-gray-900">adaptability</span>, quickly mastering new tools to stay at the cutting edge of tech advancements. For me, coding is more than just clean and efficient syntax—it’s about crafting engaging user experiences that leave a lasting impact.
            </p>
            
            <p className="my-4 text-gray-700 leading-relaxed">
            Let’s connect if you’re seeking a <span className="font-semibold text-blue-600">dedicated developer</span> ready to elevate your projects with <span className="font-semibold text-gray-900">modern, responsive designs</span> and solid technical expertise. 🌟
            </p>
        </div>
    </SectionCardUI>
    
  )
}

export default About
