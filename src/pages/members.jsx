  import React from 'react'
  import Upsection from '../common/upSection'
  import { UpsectionContent } from "../DataJs/upSecData";
  import { MemberData } from '../DataJs/MemberData';
  // import RegisterCard from '../common/registerCard';

  const Members = () => {
    return (
        <div className='bg-dark' >
            <Upsection title={UpsectionContent[5].title} />
            <div className='mx-auto bg-dark grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 p-5 gap-y-10 gap-x-2 place-items-center '>
              {
                MemberData.map((d) => (
                //   <div key={d.id} className=' relative rounded-lg h-80 m-2 w-72 font-poppins bg-white shadow-lg flex flex-col items-center space-y-2 py-2 hover:scale-95 transform duration-200'>
                //     <div className='rounded-full h-36 transform  overflow-hidden'>
                //     <img alt='alumniPic' className='h-full w-full object-cover duration-200 hover:scale-110' src={d.image} />
                //   </div>
                //   <div className='bg-Bluee rounded-b-lg absolute w-full flex items-center flex-col h-40 bottom-0 p-2'>
                //       <h1 className='text-xl text-white font-semibold'>{d.firstName} {d.lastName}</h1>
                //       <p className='text-white font-medium'>{d.batch} batch</p>
                //       <p className='text-white font-medium'>{d.branch}</p>
                //       <button className='px-3 py-1 mt-5 rounded-md bg-orange-500 text-white hover:bg-white hover:text-orange-500 font-semibold'>View More
                //       </button>
                //   </div>
                // </div>

                <div class="card">
                  <div class="card2">
                      Hiiii
                  </div>
                </div>                
                )
              )}
            </div>
            {/* <RegisterCard/>
            <RegisterCard/> */}
        </div>
    )
  }

  export default Members