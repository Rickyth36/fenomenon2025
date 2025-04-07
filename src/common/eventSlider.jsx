// import Swiper core and required modules
import { Pagination, Scrollbar, A11y,EffectCoverflow,Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import img3 from '../assets/gallery/img3.webp'
import img4 from '../assets/gallery/img4.webp'
import img5 from '../assets/gallery/img5.webp'

const EventSlider = () => {
  return (
    <div className='max-w-[1450px] overflow-hidden mx-auto px-10'>
      <Swiper
        className='mx-auto'
        modules={[ Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        speed={2000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
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
          <div className='w-[300px] md:w-[500px] mx-auto'>
            <img className='w-full rounded-lg' src={img3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <div className='w-[300px] md:w-[500px] mx-auto'>
            <img className='w-full rounded-lg' src={img4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <div className='w-[300px] md:w-[500px] mx-auto'>
            <img className='w-full rounded-lg' src={img5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <div className='w-[300px] md:w-[500px] mx-auto'>
            <img className='w-full rounded-lg' src={img5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <div className='w-[300px] md:w-[500px] mx-auto'>
            <img className='w-full rounded-lg' src={img5} alt="" />
          </div>
        </SwiperSlide>

      </Swiper>    
    </div>
  )
}

export default EventSlider