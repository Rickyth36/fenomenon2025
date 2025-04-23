import React, { useEffect, useMemo, useState } from 'react'
import Upsection from '../common/upSection'
import { UpsectionContent } from "../DataJs/upSecData";
import { ImCalendar } from "react-icons/im";
import { FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { EventData } from '../DataJs/EventData';
import EventCard from '../common/eventCard';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
// import TicketCard from '../common/ticketCard';

import blood_poster from '../assets/events/blood_donation.webp'
import meewakching from '../assets/events/meewakching.webp'
import innocent_eyes from '../assets/events/innocent_eyes.webp'
import enung_sowa from '../assets/events/enung_sowa.webp'
import ocean_skies from '../assets/events/ocean_skies.webp'

import diana from '../assets/events/diana.webp'
import yelhomie from '../assets/events/yelhomie.webp'
import blood_donation_pdf from '../assets/guidelines/blood_donation_guidelines.pdf'





const Event = () => {
  // particles
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0e0c15",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#821eff",
        },
        links: {
          // color: "#ffffff",
          // distance: 150,
          // enable: true,
          // opacity: 0.5,
          // width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 400,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [],
  );  
  // particles
  if (init) {    
  return (
    
      <div className='font-code bg-dark text-white'>
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />          
          <Upsection title={UpsectionContent[0].title} description={UpsectionContent[0].description}  />
          <div className='h-36 md:h-12'></div>             
          <div className='relative'>

          <div className='my-10'>
              <div className='my-7 md:my-16'>
                <h1 className='text-3xl md:text-5xl text-center text-white font-bold'>Blood Donation Camp</h1>
                <div className='flex flex-col mx-4  md:flex-row mt-3 md:mt-4 gap-6 justify-center md:justify-around bg-[#1a1a1a] rounded-lg p-3'>
                    <div className='flex gap-1 items-center justify-center'> <ImCalendar className='text-blue-500' /><span>28TH APRIL 2025</span></div>
                    <div className='flex gap-1 items-center justify-center'> <FaRegClock className='text-green-500' /><span>11:30AM</span></div>
                    <div className='flex gap-1 items-center justify-center'> <FaLocationDot className='text-red-400' /><span>MTU CAMPUS, TAKYELPAT, I/W</span></div>
                </div>            
              </div>            
              <div>
                <div className='flex items-center justify-center'>
                  <div class="glowCard">
                    <div class="card2">
                      <div className='overflow-hidden w-[90%] h-[380px] md:h-[480px] mx-auto'>
                        <img className='mx-auto w-full rounded-2xl object-cover' src={blood_poster} alt="" />
                      </div>
                      <div className='-mt-6 md:mt-0'>
                        <p className='text-md md:text-xl mt-2 md:mt-5 text-center font-semibold'>Blood Donation Camp</p>
                        <div className='flex gap-4 items-center justify-center w-full'>
                          <a target="_blank" rel="noopener noreferrer"  href="https://forms.gle/fXAyzGYbBQ7cqjfu8" class="btn register w-1/3 md:w-1/2 mt-4">Register</a>
                          <a href={blood_donation_pdf} target="_blank" rel="noopener noreferrer" class="btn guidelines w-1/2 mt-4">Guidelines</a>
                        </div>
                      </div>
                      </div>
                  </div>                  

                </div>
                <div>

                </div>
              </div>
            </div>

            <div>
              {EventData.map((item,index)=>(
                <div className='my-7 md:my-16'>
                  <h1 className='text-3xl md:text-5xl text-center text-white font-bold'>{item.title}</h1>
                  <div key={index} className='flex flex-col mx-4  md:flex-row mt-3 md:mt-4 gap-6 justify-center md:justify-around bg-[#1a1a1a] rounded-lg p-3'>
                      <div className='flex gap-1 items-center justify-center'> <ImCalendar className='text-blue-500' /><span>{item.date}</span></div>
                      <div className='flex gap-1 items-center justify-center'> <FaRegClock className='text-green-500' /><span>{item.time}</span></div>
                      <div className='flex gap-1 items-center justify-center'> <FaLocationDot className='text-red-400' /><span>{item.venue}</span></div>
                  </div>            
                </div>
              ))}
            </div>


            <div>
              <p className='text-3xl md:text-5xl px-4 py-5 text-center font-bold'>Performing Artists</p>
              {/* <div className='mt-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-y-5  place-items-center  '> */}
              <div className='flex flex-col flex-wrap gap-10 md:flex-row items-center justify-center mx-auto'>
                <EventCard img={diana} name="Diana Moirangthem"/>
                <EventCard img={yelhomie} name="Yelhomie"/>
              </div>
            </div>

            <div className='my-20'>
              <p className='text-3xl md:text-5xl px-4 py-5 text-center font-bold'>Performing Bands</p>
              {/* <div className='mt-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-y-10  place-items-center '> */}
              <div className='flex flex-wrap mt-4 flex-col md:flex-row gap-8 md:gap-20 items-center justify-center'>
                <EventCard img={innocent_eyes} name="Innocent Eyes"/>
                <EventCard img={meewakching} name="Meewakching"/>
                <EventCard img={ocean_skies} name="Ocean Skies"/>
                <EventCard img={enung_sowa} name="Enung Sowa"/>
              </div>
            </div>

            {/* <div className='my-7 md:my-16'>
              <h1 className='text-3xl md:text-5xl text-center text-white'>Tickets Available At</h1>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-6 gap-y-3 w-full justify-center place-items-center">
              {
                TicketData.map((item, index) => (
                  <TicketCard key={index} img={item.img} name={item.name} number={item.number} map={item.map} />
                ))
              }
            </div>
               
            </div>    */}
          </div>         
      </div>
    );
  }
  return <></>;  
}

export default Event