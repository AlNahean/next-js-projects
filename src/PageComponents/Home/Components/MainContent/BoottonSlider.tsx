import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const bottomSliderUlData = [
  {
    id: 1,
    img: "https://w0.peakpx.com/wallpaper/729/825/HD-wallpaper-blade-runner-2049-desert-orange-sky-officier-k-movies.jpg",
  },
  {
    id: 2,
    img: "https://wallpaperaccess.com/full/957240.jpg",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fXZbYf12BO1df8uX-FWUOcGEaR7dg9InvQ&usqp=CAU",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVYZumaA2AiSDBlemtxJEqbseqOshz14p1Q&usqp=CAU",
  },
];

const BottomSlider = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {bottomSliderUlData.map((item, index) => {
          return (
            <SwiperSlide
              style={{
                height: "100px",
                aspectRatio: "16/16",
                // width: "40%",
                objectFit: "cover",
              }}
              key={index}
            >
              <img
                src={item.img}
                className=" object-cover object-center h-full w-full"
              />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};
export default BottomSlider;
