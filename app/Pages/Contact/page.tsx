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
import element6 from "@/public/element-06.png";
import student1 from "@/public/student-img-01.png";
import student2 from "@/public/student-img-02.png";
import student3 from "@/public/student-img-03.png";
import student4 from "@/public/student-img-04.png";
import student5 from "@/public/student-img-05.png";
import student6 from "@/public/student-img-06.png";
import Banner from "../Index/Banner/banner";

function Contact() {
  return (
    <>
      <div className="section-barner bg-[#f3f9ff] h-100 py-[6%] lg:py-[10%] flex flex-col justify-center items-center relative">
        <h1 className="ChakraPetch font-bold text-4xl lg:text-6xl mb-5 text-[#222e48]">
          Contact
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
                Contact
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

      <div className="flex justify-center items-center flex-col gap-10 px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] relative">
        <div className="contact-content flex flex-col text-center w-full lg:w-[60%] xl:w-[50%]">
          <span className="text-[#076dcb] font-semibold Sora pb-1">
            <i className="bi bi-book pe-2"></i>
            Get In Touch
          </span>

          <h2 className="text-[#222e48] text-3xl md:leading-10 Sora font-semibold">
            Let us help you
          </h2>

          <p className="text-[#576070] pt-3 pb-5 text-sm sm:text-base">
            Our platform is built on the principles of innovation, quality, and
            inclusivity, aiming to provide a seamless learning
          </p>
        </div>

        <div className="contact-wrapper grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
          <div className="contact-item w-full flex items-start gap-5 px-5 py-10 group bg-[#f3f9ff] border border-[#ebecef] rounded-xl hover:bg-[#066dca] transition-colors duration-300">
            <div className="contact-icon min-w-12 min-h-12 bg-white rounded-full flex justify-center items-center text-xl shadow">
              <i className="bi bi-geo-alt"></i>
            </div>

            <div className="contact-ingo">
              <h4 className="Sora group-hover:text-white transition-colors duration-300 font-semibold text-xl pb-2 text-[#222e48]">
                Main Office
              </h4>
              <p className="text-sm text-[#404a60] group-hover:text-white transition-colors duration-300 pb-3">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </p>
              <button
                className="btn custom-btn text-[#076dcb] group-hover:text-white font-medium rounded-full w-fit text-sm cursor-pointer underline"
                type="button"
              >
                Find Location
                <i className="bi bi-arrow-up-right ps-2"></i>
              </button>
            </div>
          </div>

          <div className="contact-item w-full flex items-start gap-5 px-5 py-10 group bg-[#f3f9ff] border border-[#ebecef] rounded-xl hover:bg-[#066dca] transition-colors duration-300">
            <div className="contact-icon min-w-12 min-h-12 bg-white rounded-full flex justify-center items-center text-xl shadow">
              <i className="bi bi-envelope"></i>
            </div>

            <div className="contact-ingo">
              <h4 className="Sora group-hover:text-white transition-colors duration-300 font-semibold text-xl pb-2 text-[#222e48]">
                Email Address
              </h4>
              <p className="text-sm text-[#404a60] group-hover:text-white transition-colors duration-300 pb-3">
                infoexample@gmail.com <br /> example@gmail.com
              </p>
              <button
                className="btn custom-btn text-[#076dcb] group-hover:text-white font-medium rounded-full w-fit text-sm cursor-pointer underline"
                type="button"
              >
                Get In Touch
                <i className="bi bi-arrow-up-right ps-2"></i>
              </button>
            </div>
          </div>

          <div className="contact-item w-full flex items-start gap-5 px-5 py-10 group bg-[#f3f9ff] border border-[#ebecef] rounded-xl hover:bg-[#066dca] transition-colors duration-300">
            <div className="contact-icon min-w-12 min-h-12 bg-white rounded-full flex justify-center items-center text-xl shadow">
              <i className="bi bi-telephone"></i>
            </div>

            <div className="contact-ingo">
              <h4 className="Sora group-hover:text-white transition-colors duration-300 font-semibold text-xl pb-2 text-[#222e48]">
                Phone Number
              </h4>
              <p className="text-sm text-[#404a60] group-hover:text-white transition-colors duration-300 pb-3">
                (505) 555-0125 <br /> (406) 555-0120
              </p>
              <button
                className="btn custom-btn text-[#076dcb] group-hover:text-white font-medium rounded-full w-fit text-sm cursor-pointer underline"
                type="button"
              >
                Contact Us Today!
                <i className="bi bi-arrow-up-right ps-2"></i>
              </button>
            </div>
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
          className="element2 hero-shape2 absolute left-35 top-55 object-contain hidden md:block"
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
      </div>

      <div className="contact flex lg:flex-row flex-col justify-between items-center gap-10 px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] lg:py-[10%] relative">
        <div className="contact-content flex flex-col lg:w-1/2 w-full">
          <span className="text-[#076dcb] font-semibold Sora pb-1">
            <i className="bi bi-book pe-2"></i>
            Contact Us
          </span>
          <h2 className="text-[#222e48] text-3xl md:text-5xl md:leading-13 Sora font-semibold">
            Have questions? don't hesitate to contact us
          </h2>
          <p className="text-[#576070] pt-3 pb-8 text-sm sm:text-shadow-md">
            We are passionate about transforming lives through education.
            Founded with a vision to make learning accessible to all, we believe
            in the power of knowledge to unlock opportunities and shape the
            future...
          </p>

          <div className="user-info flex gap-8">
            <div className="flex user-image -space-x-2">
              <Image
                src={student1}
                alt="student-image"
                className="rounded-full w-10 h-10 hover:scale-110 transition-all duration-300"
              />
              <Image
                src={student2}
                alt="student-image"
                className="rounded-full w-10 h-10 hover:scale-110 transition-all duration-300"
              />
              <Image
                src={student3}
                alt="student-image"
                className="rounded-full w-10 h-10 hover:scale-110 transition-all duration-300"
              />
              <Image
                src={student4}
                alt="student-image"
                className="rounded-full w-10 h-10 hover:scale-110 transition-all duration-300"
              />
              <Image
                src={student5}
                alt="student-image"
                className="rounded-full w-10 h-10 hover:scale-110 transition-all duration-300"
              />
              <Image
                src={student6}
                alt="student-image"
                className="rounded-full w-10 h-10 hover:scale-110 transition-all duration-300"
              />
            </div>

            <div>
              <div className="star">
                <i className="bi bi-star-fill text-yellow-500 px-0.5 text-lg"></i>
                <i className="bi bi-star-fill text-yellow-500 px-0.5 text-lg"></i>
                <i className="bi bi-star-fill text-yellow-500 px-0.5 text-lg"></i>
                <i className="bi bi-star-fill text-yellow-500 px-0.5 text-lg"></i>
                <i className="bi bi-star-half  text-yellow-500 px-0.5 text-lg"></i>
              </div>
              <p className="font-medium">2.5k+ reviews (4.95 of 5)</p>
            </div>
          </div>
        </div>

        <div className="contact-form z-10 lg:w-1/2 w-full bg-white p-3 rounded-2xl">
          <form
            method="post"
            className="w-full bg-[#f3f9ff] border border-[#f3f9ff] p-5 sm:p-10 rounded-2xl"
          >
            <h4 className="sora-font text-2xl font-semibold border-b-2 border-[#ebecef] border-dashed pb-5">
              Get In Touch
            </h4>

            <div className="mt-5 flex flex-col">
              <label className="text-[#404a60] font-normal pb-1 text-sm lg:text-base">
                Name
              </label>
              <input
                required
                type="text"
                placeholder="Enter Your Name..."
                className="h-10 border border-[#ebecef] bg-white ps-4 rounded-md outline-none"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label className="text-[#404a60] font-normal pb-1 text-sm lg:text-base">
                Email
              </label>
              <input
                required
                type="email"
                placeholder="Enter Your Email..."
                className="h-10 border border-[#ebecef] bg-white ps-4 rounded-md outline-none"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label className="text-[#404a60] font-normal pb-1 text-sm lg:text-base">
                Phone
              </label>
              <input
                required
                type="text"
                placeholder="Enter Your Phone..."
                className="h-10 border border-[#ebecef] bg-white ps-4 rounded-md outline-none"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label className="text-[#404a60] font-normal pb-1 text-sm lg:text-base">
                Message
              </label>

              <textarea
                required
                placeholder="Enter Your Message..."
                rows={4}
                className="border border-[#ebecef] bg-white ps-4 pt-2 rounded-md outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn custom-btn mt-5 bg-[#076dcb] hover:bg-black text-white px-5 py-2 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
            >
              Send Message <i className="bi bi-arrow-up-right ps-2"></i>
            </button>
          </form>
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

      <Banner />
    </>
  );
}

export default Contact;
