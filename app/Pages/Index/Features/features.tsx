"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import featureIcon1 from "@/public/feature-icon1.png";
import featureIcon2 from "@/public/feature-icon2.png";
import featureIcon3 from "@/public/feature-icon3.png";
import element3 from "@/public/element-03.png";
import element5 from "@/public/element-05.png";
import element6 from "@/public/element-06.png";

function Features() {
  return (
    <>
      <div className="feature flex justify-center items-center flex-col gap-10 px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] lg:py-[10%] relative">
        <div className="feature-content z-2 flex flex-col text-center w-full lg:w-[60%] xl:w-[50%]">
          <h2 className="text-[#222e48] text-2xl sm:text-3xl md:text-4xl md:leading-10 Sora font-semibold">
            Explore 5,000+ Free Online Courses For Students
          </h2>
          <p className="text-[#576070] pt-3 text-sm sm:text-base">
            Welcome to our diverse and dynamic course catalog. we're dedicated
            to providing you with access to high-quality education
          </p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            1399: { slidesPerView: 3 },
            1199: { slidesPerView: 2 },
            767: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="features-wrapper w-full"
        >
          <SwiperSlide>
            <div className="feature-info hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-12 px-5 transition-all duration-300">
              <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                <Image src={featureIcon1} alt="feature-icon" />
              </div>

              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] Sora pb-2 text-xl font-semibold group-hover:text-white">
                  Language Learning
                </h4>
                <p className="text-[#576070] text-sm group-hover:text-white">
                  Courses teaching languages such as English, Spanish, French,
                  Mandarin etc
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feature-info hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-12 px-5 transition-all duration-300">
              <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                <Image src={featureIcon2} alt="feature-icon" />
              </div>

              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] Sora pb-2 text-xl font-semibold group-hover:text-white">
                  Creative Arts & Design
                </h4>
                <p className="text-[#576070] text-sm group-hover:text-white">
                  Creative Arts & Design — Courses on graphic design, digital
                  art, photography, video editing...
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feature-info hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-12 px-5 transition-all duration-300">
              <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                <Image src={featureIcon3} alt="feature-icon" />
              </div>

              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] Sora pb-2 text-xl font-semibold group-hover:text-white">
                  Health & Fitness
                </h4>
                <p className="text-[#576070] text-sm group-hover:text-white">
                  Health & Fitness — Courses on nutrition, fitness training,
                  yoga, meditation, wellness coaching...
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Image
          src={element3}
          alt="shape-image"
          className="element3 hero-shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block"
        />

        <Image
          src={element5}
          alt="shape-image"
          width={20}
          height={20}
          className="element5 hero-shape5 absolute right-30 top-70 z-2 hidden sm:flex"
        />

        <Image
          src={element5}
          alt="shape-image"
          width={25}
          height={25}
          className="element5 hero-shape6 absolute left-10 bottom-50 z-2 hidden sm:flex"
        />

        <Image
          src={element6}
          alt="shape-image"
          width={25}
          height={25}
          className="element6 hero-shape7 absolute right-70 top-20 z-2 hidden lg:flex"
        />
      </div>
    </>
  );
}

export default Features;
