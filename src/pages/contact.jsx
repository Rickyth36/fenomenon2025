import React, { useEffect, useMemo, useState }  from "react";
import Upsection from "../common/upSection";
import { UpsectionContent } from "../DataJs/upSecData";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ContactCard from "../common/contactCard";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Contact() {

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
    <div className="font-code mt-[54px] w-full font-code  bg-dark">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />       
      <Upsection title={UpsectionContent[5].title} description={UpsectionContent[5].description}  /> 
      <div className='h-36 md:h-12'></div>       
      <section className=" w-full overflow-hidden relative px-10">
        <h1 className="mt-8 text-center text-4xl text-white font-bold mb-4">Get In Touch</h1>
        <div className="rounded-lg">
          <div className="mt-20 w-full flex flex-col space-y-10 md:space-y-0 md:flex-row items-center justify-around mx-auto ">
            <ContactCard name="Dexter Thoudam" role="Event Convenor" email="dexter_th21@mtu.ac.in" number="+91 9077653443" />
            <ContactCard name="Lanmani Chungkham" role="Event Co-ordinator" email="lanmani_ch21@mtu.ac.in" number="+91 7005917899" />
          </div>  
        </div>

        <NavLink to="https://www.google.com/maps/place/Manipur+Technical+University/@24.7972741,93.9024575,17z/data=!3m1!4b1!4m6!3m5!1s0x3749262a5adc967b:0x65df1fde96bcb382!8m2!3d24.7972741!4d93.9050324!16s%2Fg%2F11cpfzvq43?entry=ttu" title="mtuMap" className="">
          <div className="flex flex-col items-center justify-center p-3 md:w-5/6 rounded-lg shadow-lg bg-zinc-900  mx-auto mt-7 mb-6">
            <FontAwesomeIcon icon={faLocationDot} className="text-red-600 text-2xl"/>
            <h1 className="text-lg text-center text-white font-semibold">Manipur Technical University</h1>
            <p className="text-center text-sm text-gray-200">Takyelpat,Takyel, Imphal, Manipur 795004</p>
          </div>
        </NavLink>
      </section>

      
    </div>
  );
}
return <></>;    
}
