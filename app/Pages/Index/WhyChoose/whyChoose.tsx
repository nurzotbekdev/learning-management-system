"use client";

import Image from "next/image";

import whychooseusimg from "@/public/why-choose-us-image.jpg";
import element2 from "@/public/element-02.png";
import element5 from "@/public/element-05.png";
import element6 from "@/public/element-06.png";

function WhyChoose() {
  return (
    <>
      <div className="why-choose-us flex lg:flex-row flex-col justify-between items-center gap-10 px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] lg:py-[10%] relative">
        <div className="why-choose-us-image group w-full lg:w-1/2 h-125 overflow-hidden rounded-lg">
          <Image
            src={whychooseusimg}
            alt="why-choose-img"
            className="w-full h-full group-hover:scale-110 object-cover transition-all duration-500"
          />
        </div>

        <div className="why-choose-us-content flex flex-col lg:w-1/2 w-full">
          <span className="text-[#076dcb] font-semibold Sora pb-1">
            <i className="bi bi-book pe-2"></i>
            Why Choose Us
          </span>

          <h2 className="text-[#222e48] text-3xl md:leading-10 Sora font-semibold">
            Our Commitment to Excellence, Learn, Frow & Success.
          </h2>

          <p className="text-[#576070] pt-3 pb-5 text-sm sm:text-base">
            We are passionate about transforming lives through education.
            Founded with a vision to make learning accessible to all, we believe
            in the power of knowledge to..
          </p>

          <ul className="flex flex-col gap-2 pb-5">
            <li className="text-sm text-[#576070]">
              <i className="bi bi-check-all text-[#006dca] pe-2 text-xl"></i>
              9/10 Average Satisfaction Rate
            </li>

            <li className="text-sm text-[#576070]">
              <i className="bi bi-check-all text-[#006dca] pe-2 text-xl"></i>
              96% Completitation Rate
            </li>

            <li className="text-sm text-[#576070]">
              <i className="bi bi-check-all text-[#006dca] pe-2 text-xl"></i>
              Friendly Environment & Expert Teacher
            </li>
          </ul>

          <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5 flex items-center gap-8">
            <button
              type="submit"
              className="btn custom-btn bg-[#076dcb] hover:bg-black text-white px-5 py-2 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
            >
              Read More <i className="bi bi-arrow-up-right ps-2"></i>
            </button>
          </div>
        </div>

        <Image
          src={element2}
          alt="shape-image"
          className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden md:block"
        />

        <Image
          src={element5}
          alt="shape-image"
          width={20}
          height={20}
          className="element5 hero-shape5 absolute right-30 top-70 hidden sm:flex"
        />

        <Image
          src={element5}
          alt="shape-image"
          width={25}
          height={25}
          className="element5 hero-shape6 absolute left-10 bottom-50 hidden sm:flex"
        />

        <Image
          src={element6}
          alt="shape-image"
          className="element2 hero-shape2 absolute right-50 top-20 hidden lg:flex"
        />
      </div>
    </>
  );
}

export default WhyChoose;
