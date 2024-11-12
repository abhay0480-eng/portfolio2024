import React from 'react'
import { Link } from 'react-router-dom'
import SectionCardUI from './SectionCardUI'
import projectData from '../utils/jsonfiles/project.json'

const Project = () => {
  return (
    <SectionCardUI title="Project">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectData.map((item) => {
                return(
                    <Link to={item?.link} target="_blank" rel="noopener noreferrer"  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 ease-in-out cursor-pointer">
                    <img src={item?.image} alt={item?.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">{item?.title}</h3>
                    <p className="text-gray-700">{item?.description}</p>
                    </Link>
                )
            })}
        </div>
    </SectionCardUI>
    
  )
}

export default Project
