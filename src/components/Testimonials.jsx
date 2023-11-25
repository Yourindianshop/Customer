import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay, Pagination]);

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <div className="bg-[#F7F8FC]">
      <div className="p-[2rem] ml-[10rem] sm:p-0 sm:ml-2">
        <div className="herder p-4 text-5xl sm:text-3xl font-bold sm:p-3">
          Our <span className="text-red">Achievers</span>
        </div>
      </div>
      <div className="overflow-hidden cursor-grabbing">
        <Swiper
          ref={swiperRef}
          slidesPerView={2.2}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          className="mySwiper mt-5 w-full sm:w-11/12 overflow-hidden"
        >
          <SwiperSlide className="p-4 overflow-hidden">
            <div className="space-y-4 rounded-xl px-5 bg-primary-light py-7 shadow-xl md:w-[456px] md:py-10 w-[30rem] sm:w-[22rem]">
              <p className="sm:w-[20rem] p-1 text-[#777C85] md:min-h-[150px] md:text-start">
                "I am incredibly grateful to FIITJEE for their unwavering
                support and guidance, which played a pivotal role in my
                achievement of All India Rank 3 in JEE Advanced. Their
                comprehensive study material, expert faculty, and rigorous
                testing system were integral to my success. Thank you, FIITJEE,
                for shaping my future."
              </p>
              <div className="flex gap-5">
                <div
                  className="rounded-full h-[3rem] mt-2 w-[3rem] bg-cover bg-center"
                  style={{ backgroundImage: `url('path_to_your_image')` }}
                />
                <div className="flex flex-col mt-3">
                  <h2 className="font-bold">Rishi Kalra</h2>
                  <span className="font-bold text-red text-lg"> Air 3</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Repeat the same for other SwiperSlides */}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
