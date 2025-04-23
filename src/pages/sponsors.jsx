import React, { useEffect, useMemo, useState } from 'react'
import Upsection from '../common/upSection'
import { UpsectionContent } from '../DataJs/upSecData'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { associateSponsorList, coTitleSponsorList, supportingSponsorList, titleSponsorList } from '../DataJs/SponsorList'
import SponsorCard from '../common/sponsorCard'

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
    <div className='bg-dark font-code'>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />       
      <Upsection title={UpsectionContent[3].title} description={UpsectionContent[3].description}  /> 
      <div className='h-36 md:h-12'></div>  
      <div className='relative p-4'>
        <div>
          <div>
            <p className='text-3xl text-white md:text-5xl text-center md:mb-9 font-bold'>Title Sponsors</p>
            {/* <div className='mx-auto grid grid-cols-1 md:grid-cols-5 p-5 gap-y-4 md:gap-y-10 gap-x-1 justify-center items-center place-items-center '> */}
            <div className='mx-auto flex flex-col flex-wrap md:flex-row gap-5 md:gap-10 md:gap-7 items-center justify-center'>
              {
                titleSponsorList.map((item,index)=>(
                  <SponsorCard key={index} img={item.img} name={item.name} />
                ))
              }              
            </div>
          </div>
        </div>
        <div className='mt-7 md:mt-28'>
          <div>
            <p className='text-3xl text-white md:text-5xl text-center md:mb-9 font-bold'>Co-Title Sponsors</p>
            <div className='mx-auto flex flex-col flex-wrap md:flex-row gap-5 md:gap-10 md:gap-7 items-center justify-center'>
              {
                coTitleSponsorList.map((item,index)=>(
                  <SponsorCard key={index} img={item.img} name={item.name} />
                ))
              }              
            </div>
          </div>
        </div>
        <div className='mt-7 md:mt-28'>
          <div>
            <p className='text-3xl text-white md:text-5xl text-center md:mb-9 font-bold'>Associate Sponsors</p>
            <div className='mx-auto flex flex-col flex-wrap md:flex-row gap-5 md:gap-10 md:gap-7 items-center justify-center'>
              {
                associateSponsorList.map((item,index)=>(
                  <SponsorCard key={index} img={item.img} name={item.name} />
                ))
              }              
            </div>
          </div>
        </div>
        <div className='mt-7 md:mt-28'>
          <div>
            <p className='text-3xl text-white md:text-5xl text-center md:mb-9 font-bold'>Supporting Sponsors</p>
            <div className='mx-auto flex flex-col flex-wrap md:flex-row gap-5 md:gap-10 items-center justify-center'>
              {
                supportingSponsorList.map((item,index)=>(
                  <SponsorCard key={index} img={item.img} name={item.name} />
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