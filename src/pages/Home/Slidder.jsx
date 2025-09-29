import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import images from "../../assets/image";
import { effectInit } from "swiper/effect-utils";

const sliderImages = [
  images.slider1,
  images.slider2,
  images.slider3,
  images.slider4,
];

export default function Slidder() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, effectInit]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={1000}
    >
      {sliderImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full lg:h-screen"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
