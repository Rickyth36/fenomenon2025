// import Swiper core and required modules
import { Pagination, Scrollbar, A11y,EffectCoverflow,Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import blood_donation from '../assets/events/blood_donation.webp'
import enung_sowa from '../assets/events/enung_sowa.webp'
import meewakching from '../assets/events/meewakching_poster.webp'
import soraren from '../assets/events/soraren_poster.png'
import yelhomie from '../assets/events/yelhomie_poster.webp'
import diana from '../assets/events/diana_poster.webp'

const EventSlider = () => {
  return (
    <div className='max-w-[1450px] overflow-hidden mx-auto px-20'>
      <Swiper
        className='mx-auto block'
        modules={[ Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={1}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        speed={2000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loopPreventsSlide={false}        
        pagination={{ clickable: true }}
        spaceBetween={100} 
        loop={true} // Disable loop
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className="text-white">
          <div className='overflow-hidden rounded-xl w-full  md:w-full md:h-[550px]'>
            <img className='w-full object-cover  rounded-lg' src={blood_donation} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <div className='overflow-hidden rounded-xl w-full h-[auto]  md:w-full md:h-[550px]'>
            <img className='w-full object-cover  rounded-lg' src={enung_sowa} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <div className='overflow-hidden rounded-xl w-full h-[auto]  md:w-full md:h-[550px]'>
            <img className='w-full object-cover  rounded-lg' src={meewakching} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <div className='overflow-hidden rounded-xl w-full h-[auto]  md:w-full md:h-[550px]'>
            <img className='w-full object-cover  rounded-lg' src={soraren} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <div className='overflow-hidden rounded-xl w-full h-[auto]  md:w-full md:h-[550px]'>
            <img className='w-full object-cover  rounded-lg' src={yelhomie} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <div className='overflow-hidden rounded-xl w-full h-[auto]  md:w-full md:h-[550px]'>
            <img className='w-full object-cover  rounded-lg' src={diana} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>    
    </div>
  )
}

export default EventSlider