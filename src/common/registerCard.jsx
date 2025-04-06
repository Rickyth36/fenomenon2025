import React from 'react'
import { Link } from 'react-router-dom'

const RegisterCard = (props) => {
  return (
      <div class="glowCard">
        <div class="card2">
          <div className='overflow-hidden'>
            <img className='mx-auto w-[210px]  h-[210px] md:w-full  md:h-[230px] rounded-lg object-cover' src={props.img} alt="" />
          </div>
          <p className='text-md md:text-xl mt-4 text-center font-semibold'>{props.name}</p>
          <div className='flex gap-4 items-center justify-center w-full'>
            <a target="_blank" rel="noopener noreferrer"  href={props.registration} class="btn register w-1/3 md:w-1/2 mt-4">Register</a>
            <Link to={`/competitions/${props.id}`} class="btn explore w-1/3 md:w-1/2 mt-4">Explore</Link>
          </div>
        </div>
      </div>
  )
}

export default RegisterCard