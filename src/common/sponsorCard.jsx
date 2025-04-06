import React from 'react'

function SponsorCard(props) {
  return (
    <div className="sponsorCard">
      <div className="sponsorCard2">
        <div className='overflow-hidden bg-white w-[150px] h-[150px] md:w-[180px] mx-auto md:h-[180px] rounded-2xl flex items-center justify-center'>
          <img
            className='rounded-xl max-w-full max-h-full object-cover'
            src={props.img}
            alt={props.name}
          />
        </div>
        <p className='text-md md:text-lg mt-4 py-1 text-center font-bold'>{props.name}</p>
      </div>
    </div>
  )
}

export default SponsorCard
