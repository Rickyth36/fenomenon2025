import React from 'react'
// import logo from "../assets/logos/Logo.png"
import logo from "../assets/logos/LogoImg.webp"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


function ContactCard(props) {
  return (
    <div class="parent" >
        <div class="card">
            <div class="logo">
                  <span class="circle circle3 flex"><img className='w-20 h-20 m-auto mt-4' src={logo} alt="" /></span>
            </div>
                <div class="glass"></div>
                <div class="content flex flex-col gap-1 items-start">
                <span class="title">{props.name}</span>
                <span class="text mb-4 font-semibold">{props.role}</span>
                <div className='text-white text-sm flex gap-1 items-center justify-center '> <MdEmail className='w-5 h-5 text-blue-300' /><span>{props.email}</span></div>                  
                <div className='text-white text-sm flex gap-1 items-start justify-center '> <FaPhoneAlt  className='w-5 h-5 text-green-300' /><span>{props.number}</span></div>   
            </div>
        </div>
    </div>
  )
}

export default ContactCard