"use client";

import Image from "next/image";

import element1 from "@/public/element-01.png";
import element2 from "@/public/element-02.png";
import element3 from "@/public/element-03.png";
import element4 from "@/public/element-04.png";
import element5 from "@/public/element-05.png";
import element6 from "@/public/element-06.png";

function Hero() {
  return (
    <>
      <div className="hero flex justify-center items-center gap-10 px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] lg:py-[10%] h-screen relative">
        <div className="hero-content text-center mx-auto w-full flex flex-col items-center relative z-9">
          <span className="text-(--prim) font-semibold ChakraPetch">
            <i className="bi bi-book pe-2"></i>
            Your Future, Achieve Success
          </span>

          <h2 className="text-(--text-color) text-3xl sm:text-5xl lg:text-7xl leading-14 lg:leading-20 font-bold Sora py-2 w-full xl:w-[75%]">
            Find Your <span className="text-[#18a54a]">Ideal</span> Course,
            Build <span className="text-[#e58209]">Skills</span>
          </h2>

          <p className="text-[#576070] w-full lg:w-[60%] pb-4 text-sm sm:text-base">
            We are dedicated to nurturing young minds, empowering them with
            knowledge, skills, and confidence to excel.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              className="btn custom-btn bg-(--prim) hover:bg-black text-white border border-transparent px-5 py-2 rounded-full w-auto text-sm cursor-pointer transition-colors duration-300"
              type="submit"
            >
              Get Start Today
              <i className="bi bi-arrow-up-right ps-2"></i>
            </button>

            <button
              className="btn custom-btn hover:bg-(--prim) text-(--prim) hover:text-white border border-(--prim) px-5 py-2 rounded-full w-auto text-sm cursor-pointer transition-colors duration-300"
              type="submit"
            >
              Find Courses
              <i className="bi bi-arrow-up-right ps-2"></i>
            </button>
          </div>
        </div>

        <Image
          src={element1}
          alt="shape-image"
          width={50}
          height={50}
          className="element1 hero-shape1 absolute left-40 top-30 object-contain hidden md:block"
        />

        <Image
          src={element2}
          alt="shape-image"
          width={60}
          height={60}
          className="element2 hero-shape2 absolute left-35 top-60 object-contain hidden md:block"
        />

        <Image
          src={element3}
          alt="shape-image"
          width={60}
          height={60}
          className="element3 hero-shape3 absolute z-2 bottom-10 right-96 object-contain hidden md:block"
        />

        <Image
          src={element4}
          alt="shape-image"
          width={60}
          height={60}
          className="element4 hero-shape4 absolute z-2 bottom-50 right-45 object-contain hidden md:block"
        />

        <Image
          src={element5}
          alt="shape-image"
          width={15}
          height={15}
          className="element5 hero-shape5 absolute z-2 top-70 right-30 object-contain hidden sm:flex"
        />

        <Image
          src={element5}
          alt="shape-image"
          width={20}
          height={20}
          className="element5 hero-shape5 absolute left-11 bottom-51 object-contain hidden sm:flex"
        />

        <Image
          src={element6}
          alt="shape-image"
          width={60}
          height={60}
          className="element6 hero-shape6 absolute z-2 top-25 right-50 object-contain hidden lg:flex"
        />
      </div>
    </>
  );
}

export default Hero;
//1:01:46 ga keldim
