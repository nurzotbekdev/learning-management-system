"use client";

import Image from "next/image";

import certificateImg from "@/public/certificate-img.png";
import element5 from "@/public/element-05.png";

function Banner() {
  return (
    <>
      <div className="banner px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] lg:py-[10%]">
        <div className="banner-content w-full z-2 bg-[#076dcb] px-5 py-8 flex justify-center items-start flex-col rounded-lg relative">
          <span className="text-white font-semibold Sora pb-1">
            <i className="bi bi-book pe-2"></i>
            Get Certificate
          </span>

          <h2 className="text-white w-full md:w-140 text-xl sm:text-2xl lg:text-3xl md:leading-10 Sora font-semibold pb-4">
            Get Quality Skills Certificate From the StudIQ
          </h2>

          <button
            className="btn custom-btn bg-white hover:bg-black hover:text-white text-[#076dcb] px-5 py-3 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
            type="button"
          >
            Get Started Now
            <i className="bi bi-arrow-up-right ps-2"></i>
          </button>

          <div className="certifivate-img hidden lg:flex absolute bottom-0 right-10 xl:right-20">
            <Image
              src={certificateImg}
              alt="certificate-img"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

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
          width={20}
          height={20}
          className="element5 hero-shape5 absolute left-10 bottom-50 hidden sm:flex"
        />
      </div>
    </>
  );
}

export default Banner;
