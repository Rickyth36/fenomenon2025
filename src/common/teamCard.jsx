import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function TicketCard(props) {
  return (
    <div class="slimCard relative">
        <div class="slimcard2">
            <div className='overflow-hidden rounded-xl'>
                <img className='mx-auto w-[240px] h-[240px] md:w-full md:h-[345px] rounded-lg object-cover  transform hover:scale-110 duration-200 ' src={props.img} alt="" />
            </div>
            <p className='bg-gradient-to-r from-[#00ff75] to-[#3c93fc] bg-clip-text text-transparent text-lg md:text-2xl mt-2 py-1 text-center font-bold'>{props.name}</p>
            <p className='text-sm md:text-lg text-center '>{props.role}</p>
            <p className='bg-gradient-to-r from-[#00ff75] to-[#3c93fc] bg-clip-text text-transparent text-md md:text-lg mb-1 text-center font-bold'>{props.branch}</p>
            <div className='flex space-x-3 items-center justify-center'>
                <IoIosMail className='text-[#3c93fc] text-xl' />
                <a href={`mailto: ${props.email}`} className='text-sm md:text-md mb-1 text-center font-medium'>{props.email}</a>
            </div>
            <div className='flex space-x-3 items-center justify-center'>
                <FaPhoneAlt className='text-[#00ff75]' />
                <a href={`tel: ${props.number}`} className='text-sm md:text-md text-center font-medium'>{props.number}</a>
            </div>
        </div>
    </div> 
  )
}

export default TicketCard