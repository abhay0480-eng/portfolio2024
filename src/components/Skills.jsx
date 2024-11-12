import React from 'react'
import SectionCardUI from './SectionCardUI'
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const Skills = () => {
  return (
    <SectionCardUI title="Skills">
        <div className='flex justify-center md:justify-start items-center gap-x-5 flex-wrap gap-y-5 text-5xl my-5'>
            <div>
                <RiNextjsFill/>
            </div>
            <div>
                <FaReact className='!text-[#61DAFB]'/>
            </div>
            <div>
                <IoLogoJavascript  className='!text-[#F7DF1E]'/>
            </div>
            <div>
                <RiTailwindCssFill  className='!text-[#38B2AC]'/>
            </div>
            <div>
                <SiRedux className='!text-[#764ABC]'/>
            </div>
            <div>
                <SiReactrouter  className='!text-[#CA4245]'/>
            </div>
            <div>
                <FaHtml5 className='!text-[#E34F26]'/>
            </div>
            <div>
                <FaCss3Alt  className='!text-[#1572B6]'/>
            </div>

        </div>
    </SectionCardUI>
  )
}

export default Skills
