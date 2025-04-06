import React, { useEffect, useMemo, useState } from "react";
import Upsection from '../common/upSection'
import { UpsectionContent } from "../DataJs/upSecData";
import GallerImages from "../DataJs/GalleryImages";
import ModalImage from "react-modal-image";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Gallery = () => {
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
    <div className="bg-dark">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />         
      <Upsection
        title={UpsectionContent[1].title}
        description={UpsectionContent[1].description}
      />
      <div className="relative">
        <div className='h-36 md:h-12'></div>      
        <div className="p-3 columns-2 md:columns-3 gap-3 md:w-[1300px] mx-auto space-y-3 pt-16">
          {GallerImages.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              {/* <img
                src={image}
                alt={`Gallery ${index}`}
                className="cursor-pointer"
              /> */}
              <ModalImage 
                imageBackgroundColor="red"
                small={image}
                large={image}
                // alt={`Gallery ${index}`}
                className="cursor-pointer rounded-md"
              />            
            </div>
          ))}
        </div>
      </div>  
    </div>
  );
  }
  return <></>;    
}

export default Gallery