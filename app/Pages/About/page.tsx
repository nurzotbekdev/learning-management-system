"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-regular-svg-icons";

import element1 from "@/public/element-01.png";
import element2 from "@/public/element-02.png";
import element3 from "@/public/element-03.png";
import element4 from "@/public/element-04.png";
import element5 from "@/public/element-05.png";
import featureImage01 from "@/public/feature-icon1.png";
import featureImage02 from "@/public/feature-icon2.png";
import featureImage03 from "@/public/feature-icon3.png";

import Banner from "../Index/Banner/banner";

function About() {
  return (
    <>
      <div className="section-barner bg-[#f3f9ff] h-100 py-[6%] lg:py-[10%] flex flex-col justify-center items-center relative">
        <h1 className="ChakraPetch font-bold text-4xl lg:text-6xl mb-5 text-[#222e48]">
          About Us
        </h1>

        <ul className="flex items-center gap-2">
          <li className="cursor-pointer">
            <Link href="/">
              <FontAwesomeIcon icon={faHome} className="pr-1" />
              <span className="text-sm xl:text-base text-[#404a60]">Home</span>
            </Link>
          </li>
          /
          <li className="cursor-pointer">
            <Link href="#">
              <span className="text-sm xl:text-base text-[#f37739]">
                About Us
              </span>
            </Link>
          </li>
        </ul>

        <Image
          src={element1}
          alt="shape-image"
          width={50}
          height={50}
          className="element1 absolute left-40 top-30 object-contain hidden md:block"
        />

        <Image
          src={element2}
          alt="shape-image"
          width={60}
          height={60}
          className="element2 absolute left-35 top-60 object-contain hidden md:block"
        />

        <Image
          src={element3}
          alt="shape-image"
          width={60}
          height={60}
          className="element3 absolute z-2 bottom-10 right-96 object-contain hidden md:block"
        />

        <Image
          src={element4}
          alt="shape-image"
          width={60}
          height={60}
          className="element4 absolute z-2 bottom-50 right-45 object-contain hidden md:block"
        />

        <Image
          src={element5}
          alt="shape-image"
          width={15}
          height={15}
          className="element5 absolute z-2 top-70 right-30 object-contain hidden sm:flex"
        />

        <Image
          src={element5}
          alt="shape-image"
          width={20}
          height={20}
          className="element5 absolute left-11 bottom-51 object-contain hidden sm:flex"
        />
      </div>

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] pt-[6%] lg:pt-[10%]">
        <div className="course-content z-2 pt-10 lg:pt-0 flex justify-between items-center flex-col lg:flex-row w-full gap-3">
          <h2 className="text-[#222e48] text-2xl sm:text-3xl md:leading-10 Sora font-semibold lg:w-[50%] w-full">
            Build better growth skills, faster. Ignite Your Learning Journey
          </h2>

          <div className="lg:w-[50%] w-full">
            <p className="text-[#576070] text-sm pb-2">
              Explore new skills, deepen existing passions, and get lost in
              creativity. What you find just might...
            </p>

            <Link href="/Pages/Courses">
              <button
                className="btn font-medium text-[#076dcb] hover:text-black rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
                type="button"
              >
                Read More
                <i className="bi bi-arrow-up-right ps-2"></i>
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-[6%]">
          <div className="feature-item hover:bg-[#066dca] group flex justify-center items-center flex-col bg-white shadow-xl rounded-xl py-10 px-5 transition-all duration-300">
            <div className="feature-icon bg-[#f3f9ff] rounded-[50%] w-22 h-22 p-5 flex justify-center items-center">
              <Image src={featureImage01} alt="feature-icon" />
            </div>

            <div className="feature-info pt-8 text-center">
              <h4 className="text-[#222e48] Sora pb-2 text-xl font-semibold group-hover:text-white">
                Learn the latest skills
              </h4>
              <p className="text-[#576070] text-sm group-hover:text-white">
                Quality education shouldn't break the bank. We offer competitive
                pricing and payment...
              </p>
            </div>
          </div>

          <div className="feature-item hover:bg-[#066dca] group flex justify-center items-center flex-col bg-white shadow-xl rounded-xl py-10 px-5 transition-all duration-300">
            <div className="feature-icon bg-[#f3f9ff] rounded-[50%] w-22 h-22 p-5 flex justify-center items-center">
              <Image src={featureImage02} alt="feature-icon" />
            </div>

            <div className="feature-info pt-8 text-center">
              <h4 className="text-[#222e48] Sora pb-2 text-xl font-semibold group-hover:text-white">
                Get ready for a career
              </h4>
              <p className="text-[#576070] text-sm group-hover:text-white">
                Engage in dynamic and interactive learning experiences. Our
                courses are designed...
              </p>
            </div>
          </div>

          <div className="feature-item hover:bg-[#066dca] group flex justify-center items-center flex-col bg-white shadow-xl rounded-xl py-10 px-5 transition-all duration-300">
            <div className="feature-icon bg-[#f3f9ff] rounded-[50%] w-22 h-22 p-5 flex justify-center items-center">
              <Image src={featureImage03} alt="feature-icon" />
            </div>

            <div className="feature-info pt-8 text-center">
              <h4 className="text-[#222e48] Sora pb-2 text-xl font-semibold group-hover:text-white">
                Earn a Certificate
              </h4>
              <p className="text-[#576070] text-sm group-hover:text-white">
                Join a vibrant and supportive learning community. Connect with
                fellow learners...
              </p>
            </div>
          </div>
        </div>
      </div>

      <Banner />
    </>
  );
}

export default About;
//4:28:51
