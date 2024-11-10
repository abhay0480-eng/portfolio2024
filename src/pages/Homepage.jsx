import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Homepage = () => {
  return (
    <div className=' mt-24 sm: md: lg: xl: 2xl:'>
      <div className='relative'>
            <img src="https://media.licdn.com/dms/image/v2/D5616AQE7mChAFiWOOw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1730460994817?e=1736985600&v=beta&t=4fM2SGXDm001qyi-GLDQxU2VvUV2cJcjKiJJNT0cJEo" alt="cover image"  className='object-contain w-full h-full rounded-t-2xl'/>

            <div className='absolute -bottom-20 left-5 min-w-48 max-w-48 min-h-48  max-h-48 border-[5px] border-white shadow-2xl z-20 rounded-full bg-slate-400'>
                <img src='https://media.licdn.com/dms/image/v2/D4D03AQFdbpZ8HMnp7A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680116909428?e=1736985600&v=beta&t=W1_miwuONtsTcbgz3sAbzx645rXImoblDsoGzenqU4Q' alt='' className='object-cover rounded-full '/>
            </div>
      </div>

       {/* Introduction Section */}
      <div  className='bg-white p-5 border-b-[1px] border-x-[1px] border-gray-300 rounded-b-2xl'>
        <div className='mt-20 px-5 grid grid-cols-2 gap-x-5'>
            <div>
                <h1 className='text-2xl font-semibold '>Abhay Kumar</h1>
                <p className='flex justify-start items-center gap-2'>Dynamic Frontend Developer | <FaReact className='inline-block'/> React JS, <SiRedux className='inline-block'/>Redux Toolkit, <RiTailwindCssFill className='inline-block'/> Tailwind</p>
                <p className='text-[#0009]'>Aligarh, Uttar Pradesh, India</p>
            </div>
            <div>
            <div className='flex justify-end items-center gap-x-3'>
                <img src='https://media.licdn.com/dms/image/v2/C4E0BAQGnr3HNFzO_Rw/company-logo_100_100/company-logo_100_100/0/1638450981653?e=1739404800&v=beta&t=gz_ZfUQaOjI9V8bx8H2e6ViZrGKoN3AGCtR85MTDJfU' alt='' className='w-10 h-10 rounded-full' />
                <p className='font-semibold text-base'>Modi Institute of Technology,Kota</p>
            </div>
            <div className='text-right'>
              <p className='text-[#0009]'>Bachelor of Technology - BTech, Computer Science</p>
              <p className='text-[#0009]'>2014 - 2018</p>
              <p className='text-[#0009]'>Grade: 71%</p>
            </div>
            </div>
        </div>
      </div>

      {/* Project Section */}
      <div  className='bg-white p-5 my-2 border-[1px] border-gray-300 rounded-2xl'>
        <div className=' px-5'>
          <h2 className='text-2xl font-semibold '>Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 ease-in-out">
              <img src="https://media.licdn.com/dms/image/v2/D562DAQE03Y3XFiR_SA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1705341806654?e=1731877200&v=beta&t=zwGb9xMg1ytlm6jO2VqZt4TxYUX2BLBhEFoTQEFwsfg" alt="Invoice App" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Invoice App</h3>
              <p className="text-gray-700">A dynamic app for creating and managing invoices efficiently.</p>
            </div>
          
          {/* Project Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Link Sharing App</h3>
            <p className="text-gray-700">A full-stack application for secure link sharing with real-time features.</p>
          </div>
          
          {/* Project Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Quiz App</h3>
            <p className="text-gray-700">An interactive quiz app that provides a seamless user experience.</p>
          </div>
        </div>
        </div>
      </div>


         {/* About Section */}
      <div  className='bg-white p-5 my-2 border-[1px] border-gray-300 rounded-2xl'>
        <div className=' px-5'>
            <div>
                <h2 className='text-2xl font-semibold '>About</h2>
                <div className='my-5'>
                    <p className="text-lg font-bold text-gray-800 my-2">
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
            </div>
        </div>
      </div>

      {/* Experience Section */}
      <div  className='bg-white p-5 my-2 border-[1px] border-gray-300 rounded-2xl'>
        <div className=' px-5'>
          <h2 className='text-2xl font-semibold '>Experience</h2>
          <div className="grid grid-rows-3 gap-y-5 my-5">
            {/*  Card 1 */}
            <div className="">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">React Developer</h3>
              <p className="text-gray-700">Nevina Infotech Pvt. Ltd. · Full-time</p>
              <p className="text-gray-700">Jan 2024 - Sep 2024 · 9 mos</p>
              <p className="text-gray-700">Ahmedabad, Gujarat, India</p>

            </div>

            {/*  Card 2 */}
            <div className="">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">React Developer</h3>
              <p className="text-gray-700">NetFillip Technologies Private Limited · Full-time</p>
              <p className="text-gray-700">Mar 2022 - Sep 2023 · 1 yr 7 mos</p>
              <p className="text-gray-700">Ahmedabad, Gujarat, India</p>
            </div>


            {/*  Card 2 */}
            <div className="">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Web Designer</h3>
              <p className="text-gray-700">Adaan Digital Solutions Pvt. Ltd. · Full-time</p>
              <p className="text-gray-700">Apr 2021 - Apr 2022 · 1 yr 1 mo</p>
              <p className="text-gray-700">New Delhi, Delhi, India · Remote</p>
            </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Homepage
