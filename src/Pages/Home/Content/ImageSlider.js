import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./style.css";

import { EffectCards } from "swiper/modules";
const ImageSlider = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/RHL1WL2/IMG-4842.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/vXsvYT5/IMG-4844.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/q94MySd/IMG-4846.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/nwh4bvd/IMG-4845.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Z8yVSYc/IMG-4847.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/6tDrqRJ/IMG-4848.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/bdn65Rz/IMG-4849.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/61WgBHZ/IMG-4851.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
