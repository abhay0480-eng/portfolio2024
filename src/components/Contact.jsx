import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SectionCardUI from './SectionCardUI';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <SectionCardUI title="Contact Info">
         <div className='flex justify-center md:justify-start items-center gap-x-5 flex-wrap gap-y-5 !text-7xl my-5'>
        
            <Link to="tel:+917073271758">
                <CallIcon className='!text-[#61DAFB] !text-4xl cursor-pointer hover:scale-110 duration-500'/>
            </Link>
            <a href="mailto:abhay0480sharma@gmail.com" >
            <MailIcon className='!text-[#F7DF1E] !text-4xl cursor-pointer hover:scale-110 duration-500' />
            </a>
            <Link to="https://www.linkedin.com/in/abhay-kumar-587617155/" target='_blank'>
                <LinkedInIcon  className='!text-[#38B2AC] !text-4xl cursor-pointer hover:scale-110 duration-500'/>
            </Link>
            <Link to="https://github.com/abhay0480-eng" target='_blank'>
                <GitHubIcon className='!text-[#764ABC] !text-4xl cursor-pointer hover:scale-110 duration-500'/>
            </Link>

        </div> 
    </SectionCardUI>
  )
}

export default Contact
