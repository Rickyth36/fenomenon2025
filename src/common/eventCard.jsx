import React from 'react'

function EventCard(props) {
  return (
    <div class="eventCard">
        <div class="eventCard2">
            <div className='overflow-hidden flex items-center justify-center'>
                <img className='w-full h-[250px] md:h-[350px] rounded-xl object-cover' src={props.img} alt="" />
            </div>
            <p className='text-xl md:text-2xl mt-4 py-3 text-center font-semibold'>{props.name}</p>
        </div>
    </div> 
  )
}

export default EventCard