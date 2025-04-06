import React, { useEffect, useMemo, useState } from 'react'
import Upsection from '../common/upSection'
import { UpsectionContent } from '../DataJs/upSecData'
import TeamCard from '../common/teamCard'
import { DepartmentIncharge, EventIncharge, EventLead, TechnicalTeam } from '../DataJs/TeamList'

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Team() {
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
    <div className='bg-dark font-code'>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />       
      <Upsection title={UpsectionContent[4].title} description={UpsectionContent[4].description}  /> 
      <div className='h-36 md:h-12'></div>  
      <div className='relative p-4'>
        <div className='mt-7'>
          <div>
            <p className='text-3xl text-white md:text-5xl text-center mb-3 md:mb-9 font-bold'>Event Coordinating Team</p>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 p-5 gap-y-10 gap-x-1 place-items-center '>
              {
                EventLead.map((item,index)=>(
                  <TeamCard key={index} img={item.img} name={item.name} role={item.role} email={item.email} number={item.number} />
                ))
              }              
            </div>
          </div>
          
          <div className='mt-5 md:mt-10'>
            <p className='text-3xl text-white md:text-5xl text-center mb-3 md:mb-9 font-bold'>Event Lead Crew</p>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 p-5 gap-y-10 gap-x-1 place-items-center '>
              {
                DepartmentIncharge.map((item,index)=>(
                  <TeamCard key={index} img={item.img} name={item.name} role={item.role} branch={item.branch} email={item.email} number={item.number} />
                ))
              }
            </div>
          </div>
          
          <div className='mt-5 md:mt-10'>
            <p className='text-3xl text-white md:text-5xl text-center mb-3 md:mb-9 font-bold'>Event Incharges</p>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 p-5 gap-y-10 gap-x-5 place-items-center '>
              {
                EventIncharge.map((item,index)=>(
                  <TeamCard key={index} img={item.img} name={item.name} role={item.role} branch={item.event} email={item.email} number={item.number} />
                ))
              }
            </div>
          </div>
          
          <div className='mt-5 md:mt-10'>
            <p className='text-3xl text-white md:text-5xl text-center mb-3 md:mb-9 font-bold'>Technical</p>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 p-5 gap-y-10 gap-x-5 place-items-center '>
              {
                TechnicalTeam.map((item,index)=>(
                  <TeamCard key={index} img={item.img} name={item.name} role={item.role} branch={item.event} email={item.email} number={item.number} />
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
return <></>;   
}

export default Team