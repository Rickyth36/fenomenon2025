import React, { useEffect, useMemo, useState } from 'react'
import Upsection from '../common/upSection'
import { UpsectionContent } from "../DataJs/upSecData";
import { ImCalendar } from "react-icons/im";
import { FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { EventData, TicketData } from '../DataJs/EventData';
import EventCard from '../common/eventCard';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import TicketCard from '../common/ticketCard';
import { useNavigate } from 'react-router-dom';


import singer1 from '../assets/events/sadananda.webp'
import singer2 from '../assets/events/pusparani.webp'
import singer3 from '../assets/events/felix.webp'
import band from '../assets/events/meewakching.webp'






const Event = () => {
  const navigate = useNavigate();
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
    console.log(container);
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
            <div>
              {EventData.map((item,index)=>(
                <div className='my-7 md:my-16'>
                  <h1 className='text-3xl md:text-5xl text-center text-white'>{item.title}</h1>
                  <div key={index} className='flex flex-col mx-4  md:flex-row mt-3 md:mt-4 gap-6 justify-center md:justify-around bg-[#1a1a1a] rounded-lg p-3'>
                      <div className='flex gap-1 items-center justify-center'> <ImCalendar className='text-blue-500' /><span>{item.date}</span></div>
                      <div className='flex gap-1 items-center justify-center'> <FaRegClock className='text-green-500' /><span>{item.time}</span></div>
                      <div className='flex gap-1 items-center justify-center'> <FaLocationDot className='text-red-400' /><span>{item.venue}</span></div>
                  </div>            
                </div>
              ))}
            </div>

            <div>
              <p className='text-3xl md:text-5xl px-4 py-5 text-center'>Performing Artists</p>
              <div className='mt-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-y-5  place-items-center  '>
                <EventCard img={singer1} name="Sadananda Hamom"/>
                <EventCard img={singer2} name="Huidrom Pusparani"/>
                <EventCard img={singer3} name="Felix Yumnam"/>
              </div>
            </div>

            <div className='mt-20'>
              <p className='text-3xl md:text-5xl px-4 py-5 text-center'>Performing Bands</p>
              <div className='mt-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-y-10  place-items-center '>
                <EventCard img={band} name="Meewakching"/>
              </div>
            </div>

            <div className='my-7 md:my-16'>
              <h1 className='text-3xl md:text-5xl text-center text-white'>Tickets Available At</h1>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-6 gap-y-3 w-full justify-center place-items-center">
  {
    TicketData.map((item, index) => (
      <TicketCard key={index} img={item.img} name={item.name} number={item.number} map={item.map} />
    ))
  }
</div>
               
            </div>   
          </div>         
      </div>
    );
  }
  return <></>;  
}

export default Event