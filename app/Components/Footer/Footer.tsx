"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelopeOpen,
  faMap,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

import element5 from "@/public/element-05.png";
import element6 from "@/public/element-06.png";

function Footer() {
  return (
    <>
      <div className="footer px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] pt-[6%] relative overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-8">
          <div className="w-full">
            <Link href="/">
              <h1 className="text-3xl font-semibold Unbounded">
                Stud <span className="text-[#006dca] Unbounded">IQ</span>
              </h1>
            </Link>

            <p className="text-normal mt-4 Inter text-[#404a60]">
              StudIQ exceeded all my expectations! The instructors were not only
              experts
            </p>

            <div className="footer-icon flex gap-3 mt-3">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-[#006dca] cursor-pointer hover:text-black transition-colors duration-300"
              />

              <FontAwesomeIcon
                icon={faTwitter}
                className="text-[#006dca] cursor-pointer hover:text-black transition-colors duration-300"
              />

              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[#006dca] cursor-pointer hover:text-black transition-colors duration-300"
              />

              <FontAwesomeIcon
                icon={faPinterestP}
                className="text-[#006dca] cursor-pointer hover:text-black transition-colors duration-300"
              />
            </div>
          </div>

          <div className="w-full flex flex-col">
            <h3 className="text-[#222e48] font-semibold Sora mb-3 text-xl">
              Navigation
            </h3>

            <Link
              href="/Pages/About"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              About us
            </Link>

            <Link
              href="/Pages/Courses"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Courses
            </Link>

            <Link
              href="/Pages/Blog"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Blog
            </Link>

            <Link
              href="/Pages/Contact"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          <div className="w-full flex flex-col">
            <h3 className="text-[#222e48] font-semibold Sora mb-3 text-xl">
              Category
            </h3>

            <Link
              href="#"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              UI/UX Design
            </Link>

            <Link
              href="#"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Web Development
            </Link>

            <Link
              href="#"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Python Development
            </Link>

            <Link
              href="#"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Digital Marketing
            </Link>

            <Link
              href="#"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Graphic Design
            </Link>
          </div>

          <div className="w-full flex flex-col">
            <h3 className="text-[#222e48] font-semibold Sora mb-3 text-xl">
              Contact Us
            </h3>

            <div className="footer mb-3 flex items-center gap-4">
              <div className="footer-icon">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#066dca] text-xl"
                />
              </div>

              <div className="footer-text">
                <p className="text-[#404a60] hover:text-[#006dca] font-medium transition-colors duration-300">
                  (207) 555-0119
                </p>

                <p className="text-[#404a60] hover:text-[#006dca] font-medium transition-colors duration-300">
                  (704) 555-0127
                </p>
              </div>
            </div>

            <div className="footer mb-3 flex items-center gap-4">
              <div className="footer-icon">
                <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="text-[#066dca] text-xl"
                />
              </div>

              <div className="footer-text">
                <p className="text-[#404a60] hover:text-[#006dca] font-medium transition-colors duration-300">
                  dwallo@gmail.com
                </p>

                <p className="text-[#404a60] hover:text-[#006dca] font-medium transition-colors duration-300">
                  eduAll@gmail.com
                </p>
              </div>
            </div>

            <div className="footer mb-3 flex items-center gap-4">
              <div className="footer-icon">
                <FontAwesomeIcon
                  icon={faMap}
                  className="text-[#066dca] text-xl"
                />
              </div>

              <div className="footer-text">
                <p className="text-[#404a60] hover:text-[#006dca] font-medium transition-colors duration-300">
                  5488 srker Rd.
                </p>

                <p className="text-[#404a60] hover:text-[#006dca] font-medium transition-colors duration-300">
                  8745 doer Dr.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <h3 className="text-[#222e48] font-semibold Sora mb-3 text-xl">
              Subscribe Here
            </h3>

            <p className="text-normal Inter text-[#404a60] mb-4">
              Enter your email address to register to our newsletter
              subscription
            </p>

            <div className="footer-btn flex relative">
              <input
                placeholder="Email..."
                type="email"
                className="w-full bg-white ps-5 h-10 rounded-full border border-[#ebecef] outline-none"
              />
              <button className="absolute right-0 top-0 rounded-full bg-[#066dca] text-white h-9 w-9 flex justify-center items-center p-3 cursor-pointer">
                <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#006dca] py-4">
          <p className="text-center text-base text-[#404a60]">
            © 2025. All Rights Reserved.
          </p>
        </div>

        <Image
          src={element5}
          alt="shape-image"
          width={20}
          height={20}
          className="element5 hero-shape5 absolute right-30 top-20 hidden sm:flex"
        />

        <Image
          src={element5}
          alt="shape-image"
          width={25}
          height={25}
          className="element5 hero-shape5 absolute left-10 bottom-60 hidden sm:flex"
        />

        <Image
          src={element6}
          alt="shape-image"
          className="element5 hero-shape6 absolute right-50 top-30 hidden lg:flex"
        />
      </div>
    </>
  );
}

export default Footer;
