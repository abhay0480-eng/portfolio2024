import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Introduction = () => {
  return (
    <div  className='bg-white p-5 border-b-[1px] border-x-[1px] border-gray-300 rounded-b-2xl'>
        <div className='mt-20 px-5 lg:grid lg:grid-cols-2 gap-x-5'>
            <div className='text-center md:text-left'>
                <h1 className='text-2xl font-semibold '>Abhay Kumar</h1>
                <p className='flex justify-center md:justify-start items-center gap-x-2 flex-wrap'>Dynamic Frontend Developer | <FaReact className='inline-block'/> React JS, <SiRedux className='inline-block'/>Redux Toolkit, <RiTailwindCssFill className='inline-block'/> Tailwind</p>
                <p className='text-[#0009] my-2'>Aligarh, Uttar Pradesh, India</p>
            </div>
            <div>
            <div className='flex justify-center md:justify-start lg:justify-end  text-center md:text-left items-center gap-x-3 mt-5 lg:mt-0'>
                <img src='https://media.licdn.com/dms/image/v2/C4E0BAQGnr3HNFzO_Rw/company-logo_100_100/company-logo_100_100/0/1638450981653?e=1739404800&v=beta&t=gz_ZfUQaOjI9V8bx8H2e6ViZrGKoN3AGCtR85MTDJfU' alt='' className='w-10 h-10 rounded-full hidden md:block' />
                <p className='font-semibold text-base'>Modi Institute of Technology,Kota</p>
            </div>
            <div className='text-center md:text-left lg:text-right'>
              <p className='text-[#0009]'>Bachelor of Technology - BTech, Computer Science</p>
              <p className='text-[#0009]'>2014 - 2018</p>
              <p className='text-[#0009]'>Grade: 71%</p>
            </div>
            </div>
        </div>
      </div>
  )
}

export default Introduction
