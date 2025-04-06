import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { Link } from 'react-router-dom';

function TicketCard(props) {
  return (
    <div class="ticketCard">
        <div class="ticketCard2">
            <div className='overflow-hidden'>
                <img className='w-full h-[150px] rounded-xl object-cover' src={props.img} alt="" />
            </div>
            <p className='text-sm md:text-md mt-4 py-1 text-center font-semibold'>{props.name}</p>
            <div className='flex gap-3 items-center justify-center mb-6'>
                <FaPhoneAlt className='text-green-500' />
                <p className='md:text-md text-center font-sm'>{props.number}</p>
            </div>
            <Link to={props.map} class="btn-map flex gap-3 item-center justify-center map w-3/4 m-auto block">
                <IoLocation className='mt-1' />
                <span className='font-bold'> Google Maps</span>
            </Link>
        </div>
    </div> 
  )
}

export default TicketCard