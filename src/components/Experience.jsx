import React from 'react'
import SectionCardUI from './SectionCardUI'
import experienceData from '../utils/jsonfiles/experience.json'

const Experience = () => {

  return (
    <SectionCardUI title="Experience">
        <div className="grid grid-rows-3 gap-y-5 my-5">
            {experienceData.map((item) => {
                return(
                    <div id={item?.id} className='text-center md:text-left'>
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">{item?.title}</h3>
                        <p className="text-gray-700">{item?.company} · {item?.employmentType}</p>
                        <p className="text-gray-700">{item?.duration}</p>
                        <p className="text-gray-700">{item?.location}</p>
                    </div>
                )
            })}
      </div>
    </SectionCardUI>
  )
}

export default Experience
