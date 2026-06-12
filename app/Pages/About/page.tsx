"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-regular-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import element1 from "@/public/element-01.png";
import element2 from "@/public/element-02.png";
import element3 from "@/public/element-03.png";
import element4 from "@/public/element-04.png";
import element5 from "@/public/element-05.png";
import element6 from "@/public/element-06.png";
import featureImage01 from "@/public/feature-icon1.png";
import featureImage02 from "@/public/feature-icon2.png";
import featureImage03 from "@/public/feature-icon3.png";
import whychooseusimg from "@/public/about-img.png";
import chooseImg01 from "@/public/choose-icon1.png";
import chooseImg02 from "@/public/choose-icon2.png";
import chooseImg03 from "@/public/choose-icon3.png";
import chooseImg04 from "@/public/choose-icon4.png";
import testiImage01 from "@/public/testi-img1.png";
import testiImage02 from "@/public/testi-img2.png";
import testiImage03 from "@/public/testi-img3.png";
import quoteImg from "@/public/quote-icon.png";

import Banner from "../Index/Banner/banner";

function About() {
  const testimonials = [
    {
      rating: 4.5,
      text: `"I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!"`,
      author: "John D.",
      role: "Graphic Designer",
      img: testiImage01,
    },
    {
      rating: 4.5,
      text: `"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."`,
      author: "Sarah L.",
      role: "UI/UX Designer",
      img: testiImage02,
    },
    {
      rating: 4.5,
      text: `"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."`,
      author: "Sarah L.",
      role: "UI/UX Designer",
      img: testiImage03,
    },
  ];

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

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] lg:py-[10%]">
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

        <Image
          src={element2}
          alt="shape-image"
          width={60}
          height={60}
          className="element2 absolute left-35 top-60 object-contain hidden md:block"
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
      </div>

      <div className="info bg-[#006dca] mb-[4%]">
        <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[2%]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 2xl:gap-8">
            <div className="info-section flex items-center gap-2 w-full">
              <div className="info-icons bg-white text-[#066dca] min-w-12 min-h-12 flex justify-center items-center text-2xl rounded-full">
                <i className="bi bi-camera-video"></i>
              </div>

              <div className="info-text">
                <h2 className="text-white font-semibold text-base Sora">
                  50,000 online courses
                </h2>
                <p className="text-white text-xs">
                  Enjoy a variety of fresh topics
                </p>
              </div>
            </div>

            <div className="info-section flex items-center gap-2 w-full">
              <div className="info-icons bg-white text-[#066dca] min-w-12 min-h-12 flex justify-center items-center text-2xl rounded-full">
                <i className="bi bi-people"></i>
              </div>

              <div className="info-text">
                <h2 className="text-white font-semibold text-base Sora">
                  100+ Industty Expert's
                </h2>
                <p className="text-white text-xs">
                  Find a right instructor for you
                </p>
              </div>
            </div>

            <div className="info-section flex items-center gap-2 w-full">
              <div className="info-icons bg-white text-[#066dca] min-w-12 min-h-12 flex justify-center items-center text-2xl rounded-full">
                <i className="bi bi-clock"></i>
              </div>

              <div className="info-text">
                <h2 className="text-white font-semibold text-base Sora">
                  Lifetime access
                </h2>
                <p className="text-white text-xs">Learn on your schedule</p>
              </div>
            </div>

            <div className="info-section flex items-center gap-2 w-full">
              <div className="info-icons bg-white text-[#066dca] min-w-12 min-h-12 flex justify-center items-center text-2xl rounded-full">
                <i className="bi bi-award"></i>
              </div>

              <div className="info-text">
                <h2 className="text-white font-semibold text-base Sora">
                  Get Certificate
                </h2>
                <p className="text-white text-xs">When Coureses Complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between items-center gap-10 px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] lg:py[10%] relative">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-3 pb-10">
            <div className="about-secction flex items-center gap-5">
              <div className="about-sec-img min-h-12 min-w-12 p-4 rounded-full border border-gray-100 shadow-lg flex items-center justify-center">
                <Image src={chooseImg01} alt="choose1" />
              </div>
              <div className="about-sec-content">
                <h2 className="text-[#13203b] font-semibold text-base mb-1 Sora">
                  Academic Excellence
                </h2>
                <p className="text-[#404a60] text-xs">
                  Though our curated ccourses , interative content .
                </p>
              </div>
            </div>

            <div className="about-secction flex items-center gap-5">
              <div className="about-sec-img min-h-12 min-w-12 p-4 rounded-full border border-gray-100 shadow-lg flex items-center justify-center">
                <Image src={chooseImg02} alt="choose2" />
              </div>
              <div className="about-sec-content">
                <h2 className="text-[#13203b] font-semibold text-base mb-1 Sora">
                  Course Excellence
                </h2>
                <p className="text-[#404a60] text-xs">
                  Personalized learning paths , we empower learniners to ...
                </p>
              </div>
            </div>

            <div className="about-secction flex items-center gap-5">
              <div className="about-sec-img min-h-12 min-w-12 p-4 rounded-full border border-gray-100 shadow-lg flex items-center justify-center">
                <Image src={chooseImg03} alt="choose2" />
              </div>
              <div className="about-sec-content">
                <h2 className="text-[#13203b] font-semibold text-base mb-1 Sora">
                  Innovative Learning
                </h2>
                <p className="text-[#404a60] text-xs">
                  Immerse yourself in an innovative learning
                </p>
              </div>
            </div>

            <div className="about-secction flex items-center gap-5">
              <div className="about-sec-img min-h-12 min-w-12 p-4 rounded-full border border-gray-100 shadow-lg flex items-center justify-center">
                <Image src={chooseImg04} alt="choose2" />
              </div>
              <div className="about-sec-content">
                <h2 className="text-[#13203b] font-semibold text-base mb-1 Sora">
                  Sustainability Initiative
                </h2>
                <p className="text-[#404a60] text-xs">
                  Be a Part of a university that about cares about the planet .
                </p>
              </div>
            </div>
          </div>

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

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] pt-[6%] lg:pt[10%] flex flex-col gap-3 relative">
        <div className="feature-content z-2 flex flex-col text-center w-full lg:w-[60%] mx-auto xl:w-[50%]">
          <span className="text-[#076dcb] font-semibold Sora pb-1">
            <i className="bi bi-book pe-2"></i>
            Testimonials from Happy Learners
          </span>
          <h2 className="text-[#222e48] text-2xl sm:text-3xl md:text-4xl md:leading-10 Sora font-semibold">
            What Our Students Says
          </h2>
          <p className="text-[#576070] pt-3 pb-8 text-sm sm:text-base">
            our Students Success stories speak volumes. Here just few
            testimonias from students ...
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          navigation={{
            nextEl: ".swiper-testi-next",
            prevEl: ".swiper-testi-prev",
          }}
          breakpoints={{
            1199: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="w-full"
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#f3faff] rounded-xl p-5">
                <div className="testi-icons flex gap-3 text-[#ff9f29] mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <i
                      className={`bi ${
                        i < Math.floor(testi.rating)
                          ? "bi-star-fill"
                          : i < testi.rating
                            ? "bi-star-half"
                            : "bi-star"
                      }`}
                      key={i}
                    ></i>
                  ))}
                </div>

                <p className="text-[#222e48] text-md sm:text-lg xl:text-xl mb-4">
                  {testi.text}
                </p>

                <div className="testi-section border-t border-dashed border-[#ebecef] flex justify-between items-center">
                  <div className="testi-content mt-5 flex gap-5 items-center">
                    <div className="testi-author">
                      <Image src={testi.img} alt={testi.author} />
                    </div>
                    <div className="testi-text">
                      <h2 className="text-[#222e48] font-semibold text-lg md:text-xl sora-font">
                        {testi.author}
                      </h2>
                      <p className="text-[#222e48] font-medium chakrapetch-font">
                        {testi.role}
                      </p>
                    </div>
                  </div>

                  <div className="quote-img">
                    <Image
                      src={quoteImg}
                      alt="quote"
                      className="opacity-25 mt-5"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex swiper-btn flex-col items-center mt-6 justify-center">
          <div className="flex gap-3">
            <div className="swiper-testi-prev cursor-pointer border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center">
              <i className="bi bi-arrow-left"></i>
            </div>

            <div className="swiper-testi-next cursor-pointer border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center">
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>

        <Image
          src={element1}
          alt="shape-image"
          width={50}
          height={50}
          className="element1 absolute left-40 top-30 object-contain hidden md:block"
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

      <Banner />
    </>
  );
}

export default About;
//4:54:13
