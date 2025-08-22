"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import * as Icon from "@phosphor-icons/react";
import Image from "next/image";
import {assets} from '@/assets/assets';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./slider.modules.css";

const Slider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    swiper.params.navigation.prevEl = ".prev-arrow";
    swiper.params.navigation.nextEl = ".next-arrow";
    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  return (
    <div className="slider-block relative w-full">
      {/* Arrows */}
      <div className="prev-arrow absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer bg-black/50 p-2 rounded-full hover:bg-black/70 flex items-center justify-center">
        <Icon.CaretLeft className="text-white text-3xl" weight="bold" />
      </div>

      <div className="next-arrow absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer bg-black/50 p-2 rounded-full hover:bg-black/70 flex items-center justify-center">
        <Icon.CaretRight className="text-white text-3xl" weight="bold" />
      </div>

      {/* Swiper */}
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={1}
        loop
        speed={400}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="w-full h-full"
      >

        {/* Slide 2 with Text Overlay */}
        <SwiperSlide>
          <div className="relative w-full h-[550px]">
            {/* Background Image */}
            <Image
              src={assets.heal2}
              fill
              alt="slider1"
              priority
              className="object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-start bg-black/30">
              <div className="text-left text-white px-4 pl-10 md:pl-20 max-w-md overflow-hidden">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Helping You Heal, Grow, and Thrive
                </h1>
                <p className="text-base md:text-lg">
                 Personalized coaching to strengthen love, navigate challenges, and build a fulfilling life.
                </p>
                <div className="flex justify-start mt-4 button-main">
                  <a href="/contact">
                    <button className="bg-white text-teal-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300">
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[550px]">
            {/* Background Image */}
            <Image
              src={assets.quality}
              fill
              alt="slider2"
              priority
              className="object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-start bg-black/30">
              <div className="text-left text-white px-4 pl-10 md:pl-20 max-w-md overflow-hidden">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Strong Relationships Start with Honest Conversations
                </h1>
                <p className="text-base md:text-lg">
                 We help you navigate love, conflict, and communication with clarity and care.
                </p>
                <div className="flex justify-start mt-4 button-main">
                  <a href="/contact">
                    <button className="bg-white text-teal-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300">
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[550px]">
            {/* Background Image */}
            <Image
              src={assets.figure1}
              fill
              alt="slider3"
              priority
              className="object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-start bg-black/30">
              <div className="text-left text-white px-4 pl-10 md:pl-20 max-w-md overflow-hidden">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  You Don’t Have to Figure It Out Alone
                </h1>
                <p className="text-base md:text-lg">
               Trusted advice for relationships, marriage, and the journey of self-discovery.
                </p>
                <div className="flex justify-start mt-4 button-main">
                  <a href="/contact">
                    <button className="bg-white text-teal-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300">
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
