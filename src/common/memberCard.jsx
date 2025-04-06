import React from 'react'
import alumniPic from '../assets/logos/avatar3.png';
const MemberCard = () => {
    const batch = 2016;
  return (
      <div className=' relative rounded-lg h-80 m-2 w-72 font-poppins bg-white shadow-lg flex flex-col items-center space-y-2 py-2 hover:scale-95 transform duration-200'>
          <div className='rounded-full h-36 transform  overflow-hidden'>
            <img alt='alumniPic' className='h-full w-full object-cover duration-200 hover:scale-110' src={alumniPic} />
          </div>
          <div className='bg-Bluee rounded-b-lg absolute w-full flex items-center flex-col h-40 bottom-0 p-2'>
          <h1 className='text-xl text-white font-semibold'>FirstName Lastname</h1>
            <p className='text-white font-medium'>{ batch} batch</p>
            <p className='text-white font-medium'>Computer Science & Engineering</p>
              <button className='px-3 py-1 mt-5 rounded-md bg-orange-500 text-white hover:bg-white hover:text-orange-500 font-semibold'>View More
              </button>
          </div>
     </div>
  )
}

export default MemberCard