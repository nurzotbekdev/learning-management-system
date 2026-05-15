"use client";

import Image from "next/image";

import about1 from "@/public/about-img1.png";
import about2 from "@/public/about-img2.png";
import user from "@/public/user.png";
import aboutImage from "@/public/about-image.jpg";
import element1 from "@/public/element-01.png";
import element5 from "@/public/element-05.png";
import element6 from "@/public/element-06.png";

function About() {
  return (
    <>
      <div className="about flex lg:flex-row flex-col justify-between items-center gap-10 px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] lg:py-[10%] relative">
        <div className="about-content flex flex-col lg:w-1/2 w-full">
          <span className="text-[#076dcb] font-semibold Sora pb-1">
            <i className="bi bi-book pe-2"></i>
            About StudIQ
          </span>
          <h2 className="text-[#222e48] text-3xl md:text-5xl md:leading-13 Sora font-semibold">
            The Place Where You Can Achieve
          </h2>
          <p className="text-[#576070] pt-3 pb-8 text-sm sm:text-shadow-md">
            Welcome to StudIQ, where learning knows no bounds. Whether you're a
            student, professional or lifelong learner.
          </p>

          <ul className="flex flex-col gap-6 pb-10">
            <li className="flex pga-3 sm:flex-nowrap flex-wrap">
              <div className="bg-[#f3f9ff] rounded-[50%] min-w-17.5 min-h-15 flex justify-center items-center p-4">
                <Image
                  src={about1}
                  alt="about-image"
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-[#222e48] font-semibold text-xl Sora">
                  Our Mission
                </h4>
                <p className="text-neutral-500 text-sm lg:text-base">
                  Driven by a team of dedicated educators, technologists, and
                  visionaries, we strive to create a supportive
                </p>
              </div>
            </li>

            <li className="flex pga-3 sm:flex-nowrap flex-wrap">
              <div className="bg-[#f3f9ff] rounded-[50%] min-w-17.5 min-h-15 flex justify-center items-center p-4">
                <Image
                  src={about2}
                  alt="about-image"
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-[#222e48] font-semibold text-xl Sora">
                  Our Vision
                </h4>
                <p className="text-neutral-500 text-sm lg:text-base">
                  A professional seeking to upskill, or a lifelong learner
                  exploring new horizons, we're here to accompany you every step
                  of the way.
                </p>
              </div>
            </li>
          </ul>

          <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5 flex items-center gap-8">
            <button
              type="submit"
              className="btn custom-btn bg-[#076dcb] hover:bg-black text-white px-5 py-2 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
            >
              Read More <i className="bi bi-arrow-up-right ps-2"></i>
            </button>

            <div className="about-user flex">
              <Image src={user} alt="user-image" className="w-10 h-10" />
              <div className="ps-2">
                <span className="Sora text-sm">Amit Sharma</span>
                <p className="text-[#576070] text-xs">CEO Of Company</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-image w-full lg:w-1/2 h-137.5 overflow-hidden group rounded-lg z-2">
          <Image
            src={aboutImage}
            alt="about-image"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <Image
          src={element1}
          alt="element1"
          className="element1 abot-shape1 absolute left-10 top-30 object-contain sm:block hidden"
        />

        <Image
          src={element6}
          alt="element6"
          className="element5 abot-shape7 absolute right-10 bottom-10 object-contain lg:block hidden"
        />

        <Image
          src={element5}
          alt="element5"
          className="element5 abot-shape6 absolute left-10 bottom-50 w-6.25 h-6.25 object-contain sm:block hidden"
        />

        <Image
          src={element5}
          alt="element5"
          className="element5 abot-shape6 absolute right-30 top-70 w-6.25 h-6.25 object-contain sm:block hidden"
        />
      </div>
    </>
  );
}

export default About;
