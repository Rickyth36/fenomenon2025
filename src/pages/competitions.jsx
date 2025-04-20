  import React, { useEffect, useMemo, useState } from 'react'
  import Upsection from '../common/upSection'
  import { UpsectionContent } from "../DataJs/upSecData";
  import { CompetitionList } from '../DataJs/CompetitionList';
  // import RegisterCard from '../common/registerCard';

  import Particles, { initParticlesEngine } from "@tsparticles/react";
  import { loadSlim } from "@tsparticles/slim";
  import RegisterCard from '../common/registerCard';
  

  const Competitions = () => {

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
        <div className='bg-dark font-code' >
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />           
          <Upsection title={UpsectionContent[2].title} description={UpsectionContent[2].description}  />
            <div className='relative'>
              <div className='h-36'></div>
              <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 p-5 gap-y-10 gap-x-5 place-items-center '>
                {
                  CompetitionList.map((item,index) => (
                  <RegisterCard key={index} img={item.img} name={item.name} id={item.id} registration={item.registration} />               
                  )
                )}
              </div>
            </div>  
            {/* <RegisterCard/>
            <RegisterCard/> */}
        </div>
    )
  }
  return <></>;     
  }

  export default Competitions