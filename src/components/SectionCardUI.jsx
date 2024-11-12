import React from 'react'

const SectionCardUI = ({children,title}) => {
  return (
    <div  className='bg-white p-5 my-2 border-[1px] border-gray-300 rounded-2xl'>
        <div className=' px-5'>
            <h2 className='text-2xl font-semibold text-center md:text-left'>{title}</h2>
            {children}
        </div>
    </div>
  )
}

export default SectionCardUI
