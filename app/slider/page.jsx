"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// import * as Icon from "@phosphor-icons/react";
import Image from "next/image";
import {assets} from '@/assets/assets';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./slider.module.css";

const Slider = () => {
  // const swiperRef = useRef(null);

  // useEffect(() => {
  //   if (!swiperRef.current) return;
  //   const swiper = swiperRef.current.swiper;
  //   swiper.params.navigation.prevEl = ".prev-arrow";
  //   swiper.params.navigation.nextEl = ".next-arrow";
  //   swiper.navigation.init();
  //   swiper.navigation.update();
  // }, []);

  return (
    <div className={styles.sliderBlock}>
      {/* Arrows */}
      {/* <div className={styles.prevArrow}>
        <Icon.CaretLeft className={styles.arrowIcon} weight="bold" />
      </div>

      <div className={styles.nextArrow}>
        <Icon.CaretRight className={styles.arrowIcon} weight="bold" />
      </div> */}

      {/* Swiper */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        speed={400}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className={styles.swiperContainer}
      >
        <SwiperSlide>
          <div className={styles.slideWrapper}>
            <Image
              src={assets.heal2}
              fill
              alt="slider1"
              priority
              className={styles.slideImage}
            />
            <div className={styles.overlay}>
              <div className={styles.textContainer}>
                <h1 className={styles.title}>
                  Helping You Heal, Grow, and Thrive
                </h1>
                <p className={styles.description}>
                  Personalized coaching to strengthen love, navigate challenges, and build a fulfilling life.
                </p>
                <div className={styles.buttonWrapper}>
                  <a href="/contact">
                    <button className={styles.button}>
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slideWrapper}>
            <Image
              src={assets.quality}
              fill
              alt="slider2"
              priority
              className={styles.slideImage}
            />
            <div className={styles.overlay}>
              <div className={styles.textContainer}>
                <h1 className={styles.title}>
                  Strong Relationships Start with Honest Conversations
                </h1>
                <p className={styles.description}>
                  We help you navigate love, conflict, and communication with clarity and care.
                </p>
                <div className={styles.buttonWrapper}>
                  <a href="/contact">
                    <button className={styles.button}>
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slideWrapper}>
            <Image
              src={assets.figure1}
              fill
              alt="slider3"
              priority
              className={styles.slideImage}
            />
            <div className={styles.overlay}>
              <div className={styles.textContainer}>
                <h1 className={styles.title}>
                  You Don't Have to Figure It Out Alone
                </h1>
                <p className={styles.description}>
                  Trusted advice for relationships, marriage, and the journey of self-discovery.
                </p>
                <div className={styles.buttonWrapper}>
                  <a href="/contact">
                    <button className={styles.button}>
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