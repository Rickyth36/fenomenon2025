import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

function TicketCard(props) {
  return (
    <div class="slimCard relative">
        <div class="slimcard2">
            <div className='overflow-hidden rounded-xl'>
                <img className='w-full h-[330px] rounded-lg object-cover  transform hover:scale-110 duration-200 ' src={props.img} alt="" />
            </div>
            <p className='text-xl md:text-2xl mt-2 py-1 text-center font-bold'>{props.name}</p>
            <p className='text-md md:text-xl mt-2 text-center '>{props.role}</p>
            <p className='text-md md:text-xl mb-1 text-center '>{props.branch}</p>
            <div className='flex gap-3 items-center justify-center'>
                <FaPhoneAlt className='text-green-500' />
                <p className='text-md md:text-xl text-center font-semibold'>{props.number}</p>
            </div>
        </div>
    </div> 
  )
}

export default TicketCard