import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function TicketCard(props) {
  return (
    <div class="slimCard relative">
        <div class="slimcard2">
            <div className='overflow-hidden rounded-xl'>
                <img className='w-full h-[300px] md:h-[350px] rounded-lg object-cover  transform hover:scale-110 duration-200 ' src={props.img} alt="" />
            </div>
            <p className='bg-gradient-to-r from-[#00ff75] to-[#3c93fc] bg-clip-text text-transparent text-xl md:text-2xl mt-2 py-1 text-center font-bold'>{props.name}</p>
            <p className='text-md md:text-lg mt-2 text-center '>{props.role}</p>
            <p className='bg-gradient-to-r from-[#00ff75] to-[#3c93fc] bg-clip-text text-transparent text-md md:text-lg mb-1 text-center font-bold'>{props.branch}</p>
            <div className='flex gap-3 items-center justify-center'>
                <IoIosMail className='text-[#3c93fc] text-xl' />
                <p className='text-md md:text-md mb-1 text-center '>{props.email}</p>
            </div>
            <div className='flex gap-3 items-center justify-center'>
                <FaPhoneAlt className='text-[#00ff75]' />
                <p className='text-md md:text-md text-center font-semibold'>{props.number}</p>
            </div>
        </div>
    </div> 
  )
}

export default TicketCard