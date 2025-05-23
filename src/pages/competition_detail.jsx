import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompetitionList } from '../DataJs/CompetitionList';
import { ImCalendar } from "react-icons/im";
// import { FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function CompetitionDetail() {
    const {id} = useParams();
    const competition = CompetitionList[parseInt(id, 10) - 1]
    
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
    <div className='font-code bg-dark text-white p-3 md:p-10'>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        /> 
            <div className='relative'>         
                <div className='h-12 md:h-24'></div>
                    <h1 className='text-4xl md:text-8xl my-9 text-center'>Competition details</h1>
                    <div className='bg-zinc-800 md:w-[93%] rounded-xl p-6 mt-4 mx-auto'>
                        <div className='flex flex-col md:flex-row gap-4 md:gap-14  '>
                            {/* left */}
                            <div className='flex items-center justify-center'>
                                <div class="glowCard">
                                  <div class="card2">
                                      <div className='overflow-hidden w-[90%] h-[380px] md:h-[480px] mx-auto'>
                                      <img className='mx-auto w-full rounded-2xl object-cover' src={competition.img} alt="" />
                                      </div>
                                      <div className='-mt-9 md:mt-0'>
                                        <p className='text-md md:text-xl mt-2 md:mt-5 text-center font-semibold'>{competition.name}</p>
                                        <div className='flex space-x-3 md:my-1 items-center justify-center w-full'>
                                        <a href={competition.registration} target="_blank" rel="noopener noreferrer"  class="btn register w-1/2 mt-4">Register</a>
                                        <a href={competition.guidelines} target="_blank" rel="noopener noreferrer" class="btn guidelines w-1/2 mt-4">Guidelines</a>
                                      </div>
                                      </div>
                                  </div>
                                </div> 
                            </div>

                            {/* right */}
                            <div className='flex flex-col items-center md:items-start'>
                                <p className='bg-gradient-to-r from-[#fb00a0] to-[#821eff] bg-clip-text text-transparent text-3xl md:text-5xl font-bold text-center md:text-start'>{competition.title}</p>
                                {competition.organized_by && (
                                  <p className='bg-gradient-to-r from-[#fb00a0] to-[#821eff] bg-clip-text text-transparent mt-5 text-sm md:text-xl text-center text-justify md:text-left'>Organized by {competition.organized_by}</p>
                                )}
                                <p className='mt-2 text-sm md:text-lg text-center text-justify md:text-left'>{competition.description}</p>
                                <div className='flex flex-col md:flex-row mt-3 md:mt-12 gap-6 p-3 md:p-0 bg-zinc-900 md:bg-transparent rounded-md justify-center md:justify-around'>
                                    <div className='flex gap-1 items-center justify-center text-md'> <ImCalendar className='text-blue-500' /><span>{competition.date}</span></div>
                                    {/* <div className='flex gap-1 items-center justify-center text-md'> <FaRegClock className='text-green-500' /><span>{competition.time}</span></div> */}
                                    <div className='flex gap-1 items-center justify-center text-md'> <FaLocationDot className='text-red-400' /><span>{competition.venue}</span></div>
                                </div>

                                {/* category */}
                                {/* <div> */}
                                {
                                  competition.isCategorized ? (
                                    <div className='bg-zinc-900 p-3 mt-3 w-full rounded-lg'>
                                      {
                                        competition.category.peopleCategory ? (
                                          <div >
                                            <p className='bg-gradient-to-r from-[#fb00a0] to-[#821eff] bg-clip-text text-transparent text-2xl text-center md:text-left font-bold'>Solo</p>
                                            <div className='flex flex-col md:flex-row items-center gap-4 mt-2'>
                                              <p> 🏆First:{competition.category.solo.cashPrize.first}</p>
                                              <p className={`${competition.category.solo.cashPrize.second ? 'block': 'hidden'}`}> 🥈Second:{competition.category.solo.cashPrize.second}</p>
                                              <p className={`${competition.category.solo.cashPrize.third ? 'block': 'hidden'}`}> 🥉Third:{competition.category.solo.cashPrize.third}</p>
                                              <p className={`${competition.category.solo.cashPrize.consolation ? 'block': 'hidden'}`}  > Consolation:{competition.category.solo.cashPrize.consolation}</p>
                                            </div>
                                            <p className='mt-2 md:mt-3 text-md text-center md:text-left md:text-lg'>Registration Fee: <span className='font-bold'>{competition.category.solo.fee}</span></p>

                                            <p className='bg-gradient-to-r from-[#fb00a0] to-[#821eff] bg-clip-text text-transparent text-2xl text-center md:text-left font-bold mt-6'>Group</p>
                                            <div className='flex flex-col md:flex-row items-center gap-4 mt-2'>
                                              <p> 🏆First:{competition.category.group.cashPrize.first}</p>
                                              <p className={`${competition.category.group.cashPrize.second ? 'block': 'hidden'}`}> 🥈Second:{competition.category.group.cashPrize.second}</p>
                                              <p className={`${competition.category.group.cashPrize.third ? 'block': 'hidden'}`}> 🥉Third:{competition.category.group.cashPrize.third}</p>
                                              <p className={`${competition.category.group.cashPrize.consolation ? 'block': 'hidden'}`}  > Consolation:{competition.category.group.cashPrize.consolation}</p>
                                            </div>
                                            <p className='mt-2 md:mt-3 text-md text-center md:text-left md:text-lg'>Registration Fee: <span className='font-bold'>{competition.category.group.fee}</span></p>
                                          </div>
                                        ):
                                        <div>

                                        <p className='bg-gradient-to-r from-[#fb00a0] to-[#821eff] bg-clip-text text-transparent text-2xl text-center md:text-left font-bold'>Junior (Class III -  VIII)</p>                                          
                                        <div className='flex flex-col md:flex-row items-center gap-4 mt-2'>
                                          <p> 🏆First{competition.category.junior.cashPrize.first}</p>
                                          <p className={`${competition.category.junior.cashPrize.second ? 'block': 'hidden'}`}> 🥈Second:{competition.category.junior.cashPrize.second}</p>
                                          <p className={`${competition.category.junior.cashPrize.third ? 'block': 'hidden'}`}> 🥉Third:{competition.category.junior.cashPrize.third}</p>
                                          <p className={`${competition.category.junior.cashPrize.consolation ? 'block': 'hidden'}`}  > Consolation:{competition.category.junior.cashPrize.consolation}</p>
                                        </div>
                                        <p className='mt-2 md:mt-3 text-md text-center md:text-left md:text-lg'>Registration Fee: <span className='font-bold'>{competition.category.junior.fee}</span></p>
                                        <p className='bg-gradient-to-r from-[#fb00a0] to-[#821eff] bg-clip-text text-transparent text-2xl text-center md:text-left font-bold mt-6'>Senior (Class IX and above)</p>                                          
                                        <div className='flex flex-col md:flex-row items-center gap-4 mt-2'>
                                          <p> 🏆First{competition.category.senior.cashPrize.first}</p>
                                          <p className={`${competition.category.senior.cashPrize.second ? 'block': 'hidden'}`}> 🥈Second:{competition.category.senior.cashPrize.second}</p>
                                          <p className={`${competition.category.senior.cashPrize.third ? 'block': 'hidden'}`}> 🥉Third:{competition.category.senior.cashPrize.third}</p>
                                          <p className={`${competition.category.senior.cashPrize.consolation ? 'block': 'hidden'}`}  > Consolation:{competition.category.senior.cashPrize.consolation}</p>
                                        </div>
                                        <p className='mt-2 md:mt-3 text-md text-center md:text-left md:text-lg'>Registration Fee: <span className='font-bold'>{competition.category.senior.fee}</span></p>
                                      </div>                                        
                                      }
                                    </div>
                                  ):
                                  <div className='flex flex-col md:flex-row items-center md:items-start justify-center'>
                                    <p className='mt-2 md:mt-5 text-md md:text-lg'>Cash Prize: <span className='font-bold'>{competition.cash_price}</span></p>
                                    <div className='flex gap-4 mt-2 md:mt-6 flex flex-col md:flex-row'>
                                      <p> 🏆First:{competition.cashPrize.first}</p>
                                      <p className={`${competition.cashPrize.second ? 'block': 'hidden'}`}> 🥈Second:{competition.cashPrize.second}</p>
                                      <p className={`${competition.cashPrize.third ? 'block': 'hidden'}`}> 🥉Third:{competition.cashPrize.third}</p>
                                      <p className={`${competition.cashPrize.fourth ? 'block': 'hidden'}`}>4️⃣:{competition.cashPrize.fourth}</p>
                                      <p className={`${competition.cashPrize.fifth ? 'block': 'hidden'}`}> 5️⃣:{competition.cashPrize.fifth}</p>
                                      <p className={`${competition.cashPrize.sixth ? 'block': 'hidden'}`}> 6️⃣:{competition.cashPrize.sixth}</p>
                                      <p className={`${competition.cashPrize.seventh ? 'block': 'hidden'}`}> Most kills:{competition.cashPrize.seventh}</p>
                                      <p className={`${competition.cashPrize.consolation ? 'block': 'hidden'}`}  > Consolation:{competition.cashPrize.consolation}</p>
                                    </div>
                                </div>                                  
                                }

                                {/* </div> */}

                                {
                                  !competition.isCategorized &&(
                                    <p className='mt-2 md:mt-5 text-md md:text-lg'>Registration Fee: <span className='font-bold'>{competition.fee}</span></p>
                                  )
                                }
                                <p className='mt-2 md:mt-5 text-md md:text-lg'>Event Incharge: <span className='font-bold'>{competition.incharge}</span></p>
                                <a href={`tel: ${competition.contact}`} ><p className='mt-2 md:mt-5 text-md md:text-lg'>Contact: <span className='font-bold'>{competition.contact}</span></p></a>

                            </div>
                        </div>
                        <p className='text-red-400 mt-3 md:mt-8 text-lg md:text-2xl text-center font-bold '>Registration Deadline: <span className='text-white'>{competition.deadline}</span></p>
                    </div>    
                <div>
            </div>        
        </div>
    </div>
  );
}
return <></>;    
}

export default CompetitionDetail