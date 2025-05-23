import { useEffect, useMemo, useState } from "react";
// import alumniHomeFoto from '../assets/alumniHomeFoto.jpg';
// import alumnniFotos from '../assets/alumniFotos.jpg';
// import quotePic from '../assets/logos/quote.png';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { CarouselData } from '../DataJs/CarouselData';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";


// import MTULogo from '../assets/logos/MTULogo.png'
import FenomenonLogo from '../assets/logos/Logo.webp';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import '../index.css';
import { CompetitionList } from "../DataJs/CompetitionList";
import RegisterCard from "../common/registerCard";
import { allSponsorList } from "../DataJs/SponsorList";
import EventSlider from "../common/eventSlider";


//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//           style={{
//               ...style, display: "block", width: "44px", height: "44px",margin:"0 -8% ", paddingTop: "14px",paddingLeft:"11px", top: "112%", right: "40%", background: "rgb(14,12,21)", boxShadow: "2px 4px 5px gray", borderRadius: "50%",
//         } }
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//           style={{
//               ...style, display: "block", width: "44px", height: "44px",margin:"0 -8% ", paddingTop: "14px",paddingLeft:"11px", top: "112%", left: "40%", background: "rgb(14,12,21)", boxShadow: "2px 4px 5px gray", borderRadius: "50%",
//         } }
//       onClick={onClick}
//       >    
//     </div>
//   );
//   }

export default function Home(){

  // particles
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
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
          value: { min: 1, max: 5},
        },
      },
      detectRetina: true,
    }),
    [],
  );  
  // particles
  const navigate = useNavigate();

  // const goToGallery = () => {
  //   navigate("/gallery")
  // }

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   autoplay: true,
  //   // speed: 2000,
  //   autoplaySpeed: 4000,
  //   cssEase: "linear",
  //   pauseOnHover: true,
  //   prevArrow: <SamplePrevArrow />,
  //   nextArrow: <SampleNextArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  
  if (init) {
    
    return(

        <div className='font-code'>
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />          
          {/* <div className='min-h-[700px] bg-dark flex items-center justify-center'> */}
          <div className='relative group overflow-hidden flex flex-col justify-center items-center md:mt-10  min-h-screen md:min-h-[700px]'>
            {/* <div className="h-32"></div> */}
            <div className="flex flex-col items-center justify-center ">
              <img className="z-4 w-[80%] md:w-[20%]" src={FenomenonLogo} alt="" />
              <span className="self-center text-base text-xl md:text-3xl font-thin font-code whitespace-nowrap text-white mt-4"><span className="text-[#821eff] font-bold">28th</span> April - <span className="text-[#821eff] font-bold">30th</span> April</span>
            </div>
            <motion.p
            initial={{ opacity: 0,y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}            
            className="px-6 max-w-[80%] text-white mt-9 text-md md:text-lg hidden md:block text-left md:text-justify">Fenomenon , the flagship tech fest of Manipur Technical University, is where innovation meets ambition. A melting pot of creativity, competition and technology, it brings together the brightest minds for electrifying challenges, workshops and exhibitions. Experience the thrill of discovery, push the limits of possibility and be part of a festival. From April 28th to April
               30th, 2025, Fenomenon invites you to unlock a world of technical expression and cultural exploration.</motion.p>
          </div>
          {/* Competition */}
          <div className="relative my-10">
            <h1 className='text-3xl relative text-white font-bold md:text-5xl text-center'>Competitions</h1>
            {/* <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 p-5 gap-y-10 gap-x-5 place-items-center '> */}
            <Marquee className='relative flex flex-row  gap-6 mt-10' speed={70}
                gradient={true} gradientColor='rgb(14,12,21)'   gradientWidth={100} autoFill={true}>
              {
                CompetitionList.map((item,index) => (
                <RegisterCard key={index} img={item.img} name={item.name} id={item.id} registration={item.registration} />               
                )
              )}
            </Marquee>
              {/* </div>  */}
              <button onClick={()=>navigate('/competitions')} className="std-btn mt-7 bg-gradient-to-r from-[#fb00a0] to-[#821eff] text-sm p-2 md:p-4 mb-4 rounded-lg text-white mx-auto block">MORE COMPETITIONS</button>     
          </div> 
          {/* Highlight */}
          <div className="relative my-10 md:my-20">
            <h1 className='text-3xl relative text-white font-bold md:text-5xl text-center mb-5 md:mb-10'>Highlights</h1>
            <EventSlider/>
            <button onClick={()=>navigate('/event')} className="std-btn mt-7 bg-gradient-to-r from-[#fb00a0] to-[#821eff] text-sm p-2 md:p-4 mb-4 rounded-lg text-white mx-auto block">MORE EVENTS</button>
          </div>
          
        {/* <section id='gallery' className='bg-dark'>
            <h1 className='text-3xl relative text-white font-bold md:text-5xl text-center'>Gallery</h1>
            <div className='columns-3 gap-3  md:w-[700px] mx-auto space-y-3 pt-5'>
              <div className='break-inside-avoid transform  overflow-hidden'><img alt="1" className='h-full w-full object-cover duration-200 hover:scale-110' src={img3} /></div>
              <div className='break-inside-avoid transform  overflow-hidden'><img alt="1" className='h-full w-full object-cover duration-200 hover:scale-110' src={img44} /></div>
              <div className='break-inside-avoid transform  overflow-hidden'><img alt="1" className='h-full w-full object-cover duration-200 hover:scale-110' src={img28} /></div>
              <div className='break-inside-avoid transform  overflow-hidden'><img alt="1" className='h-full w-full object-cover duration-200 hover:scale-110' src={img43} /></div>
              <div className='break-inside-avoid transform  overflow-hidden'><img alt="1" className='h-full w-full object-cover duration-200 hover:scale-110' src={img45} /></div>
              <div className='break-inside-avoid transform  overflow-hidden'><img alt="1" className='h-full w-full object-cover duration-200 hover:scale-110' src={img36} /></div>
              <div className='break-inside-avoid pl-6 md:pl-14'>
                <button onClick={goToGallery} className='relative bg-gradient-to-r from-[#fb00a0] to-[#821eff] text-white p-6 mr-4 md:p-8 std-btn'><FontAwesomeIcon className="text-4xl" icon={faPlus}></FontAwesomeIcon></button>
              </div>
            
            </div>
          </section> */}
          <section id='sponsor' className='bg-dark pt-12 my-10'>
            <div>
              <h1 className='text-3xl relative text-white text-center text-white font-bold md:text-5xl'>Our Sponsors</h1>
              <Marquee className='flex flex-row gap-6 mt-10 place-items-center' speed={50} 
              gradient={true} gradientColor='rgb(14,12,21)'   gradientWidth={200} autoFill={false}>
                {
                  allSponsorList.map((item,index)=>(
                    <div key={index} className='mx-10 overflow-hidden bg-white w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full flex items-center justify-center'>
                    <img
                      className='w-32 max-h-full object-cover'
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  ))
                }
              </Marquee> 
            </div>
          </section>
          {/* <section id="testimonal" className='bg-dark h-[900px] pt-10 bg-dark'>
                  <div className='w-3/4 mx-auto'>
                      <h1 className='text-3xl text-gray-800 font-bold md:text-5xl text-center'>Testimonial</h1>
                      <p className='text-md text-gray-700 font-semibold mt-4 text-center md:text-xl'>What our alumni say</p>
                      <div className='mt-1 m-auto md:mt-8'>
                        <Slider {...settings}>
                          {CarouselData.map((d) => (
                              <div key={d.id} className="bg-[#1a1a1a] h-100 w-[600px]  p-5 pb-14 mx-auto rounded-lg flex flex-col space-y-3 text-white my-10">
                                    <img alt="alumni" src={d.image} className="w-20  md:w-32  rounded-full mx-auto" />
                                    <img alt="quote" src={quotePic} className='w-12 mx-auto rotate-180 md:w-16 ' />                                           
                                    <p className='text-center text-sm md:text-base'>{d.quote}</p>
                                    <p className='text-gray-200 text-sm md:text-base font-light text-center'>{d.identity}/ {d.department} ({d.batch})</p>
                              </div>)
                          )}
                      </Slider>
                  </div>
            
               </div>
            </section> */}
        </div>
    );
  }
  return <></>;
}