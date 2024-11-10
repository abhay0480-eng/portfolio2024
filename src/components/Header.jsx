import React from 'react'
import DataObjectIcon from '@mui/icons-material/DataObject';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const Header = () => {
  return (
    <div className='bg-white p-5 rounded-b-2xl z-40 shadow-2xl drop-shadow-lg fixed top-0  left-1/2 transform -translate-x-1/2  w-11/12 sm:w-11/12 md:w-11/12  lg:w-3/4 xl:w-3/4  2xl:w-3/4 '>
      <div className='flex justify-between items-center gap-5'>
        <div className='flex justify-start items-center gap-1'>
          <DataObjectIcon className='!text-4xl'/> 
        </div>
        <div className='flex justify-end items-center gap-x-5'>
          <div>
            <div className='flex justify-center items-center '>
              <WorkHistoryIcon className=''/>
            </div>
            <p className='text-center'>Experience</p>
          </div>

          <div>
            <div className='flex justify-center items-center '>
              <AccountTreeIcon className=''/>
            </div>
            <p className='text-center'>Projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
