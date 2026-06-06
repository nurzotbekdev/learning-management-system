"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faMessage,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";

import article1 from "@/public/articles-01.jpg";
import article2 from "@/public/articles-02.jpg";
import article3 from "@/public/articles-03.jpg";
import element1 from "@/public/element-01.png";
import element2 from "@/public/element-02.png";
import element3 from "@/public/element-03.png";
import element4 from "@/public/element-04.png";
import element5 from "@/public/element-05.png";
import element6 from "@/public/element-06.png";

function Articles() {
  return (
    <>
      <div className="articles bg-[#f3f9ff] px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] lg:py-[10%] relative gap-10 flex flex-col">
        <div className="articles-content flex flex-col lg:w-1/2 w-full mx-auto text-center z-2">
          <span className="text-[#076dcb] font-semibold Sora pb-1">
            <i className="bi bi-book pe-2"></i>
            Articles
          </span>
          <h2 className="text-[#222e48] text-3xl md:text-3xl md:leading-10 Sora font-semibold">
            Recent Articles
          </h2>
          <p className="text-[#576070] pt-3 pb-5 text-sm sm:text-base">
            Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut
            labore et dolore magna aliqua enim ad...
          </p>
        </div>

        <div className="articles-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 z-2">
          <div className="acrticles-item bg-white p-5 pb-3 rounded-xl group shadow-lg">
            <div className="articles-image w-full rounded-xl overflow-hidden">
              <Image
                src={article1}
                alt="article1"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>

            <div className="articles-content py-4">
              <span className="bg-[#f37638] text-white rounded-sm px-2 ChakraPetch font-semibold py-1">
                Student life
              </span>
              <h4 className="my-3 Sora font-semibold text-base xl:text-lg 2xl:text-xl text-[#222e48] hover:text-[#006dca] transition-colors duration-500">
                The Importance of Diversity in Higher Education
              </h4>

              <div className="flex flex-wrap gap-4">
                <div className="text-[#404a60] text-base font-medium">
                  <FontAwesomeIcon icon={faUserCircle} className="pe-1" />
                  <span>Pradip</span>
                </div>

                <div className="text-[#404a60] text-base font-medium">
                  <FontAwesomeIcon icon={faCalendar} className="pe-1" />
                  <span>10 October, 25</span>
                </div>

                <div className="text-[#404a60] text-base font-medium">
                  <FontAwesomeIcon icon={faMessage} className="pe-1" />
                  <span>25</span>
                </div>
              </div>

              <p className="text-sm py-2 text-[#404a60] pb-5">
                Unlock the secrets to effective time management in the digital
                learning space...
              </p>

              <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5">
                <Link href="/Pages/Blog">
                  <button
                    className="btn custom-btn text-[#076dcb] font-medium rounded-full w-fit text-sm cursor-pointer"
                    type="button"
                  >
                    Read More
                    <i className="bi bi-arrow-up-right ps-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="acrticles-item bg-white p-5 pb-3 rounded-xl group shadow-lg">
            <div className="articles-image w-full rounded-xl overflow-hidden">
              <Image
                src={article2}
                alt="article2"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>

            <div className="articles-content py-4">
              <span className="bg-[#16a34a] text-white rounded-sm px-2 ChakraPetch font-semibold py-1">
                Freedom
              </span>
              <h4 className="my-3 Sora font-semibold text-base xl:text-lg 2xl:text-xl text-[#222e48] hover:text-[#006dca] transition-colors duration-500">
                The Importance of Diversity in Higher Education
              </h4>

              <div className="flex flex-wrap gap-4">
                <div className="text-[#404a60] text-base font-medium">
                  <FontAwesomeIcon icon={faUserCircle} className="pe-1" />
                  <span>Megha</span>
                </div>

                <div className="text-[#404a60] text-base font-medium">
                  <FontAwesomeIcon icon={faCalendar} className="pe-1" />
                  <span>12 October, 25</span>
                </div>

                <div className="text-[#404a60] text-base font-medium">
                  <FontAwesomeIcon icon={faMessage} className="pe-1" />
                  <span>25</span>
                </div>
              </div>

              <p className="text-sm py-2 text-[#404a60] pb-5">
                Unlock the secrets to effective time management in the digital
                learning space...
              </p>

              <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5">
                <Link href="/Pages/Blog">
                  <button
                    className="btn custom-btn text-[#076dcb] font-medium rounded-full w-fit text-sm cursor-pointer"
                    type="button"
                  >
                    Read More
                    <i className="bi bi-arrow-up-right ps-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="acrticles-item bg-white p-5 pb-3 rounded-xl group shadow-lg">
            <div className="articles-image w-full rounded-xl overflow-hidden">
              <Image
                src={article3}
                alt="article3"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>

            <div className="articles-content py-4">
              <span className="bg-[#f37638] text-white rounded-sm px-2 ChakraPetch font-semibold py-1">
                Online
              </span>
              <h4 className="my-3 Sora font-semibold text-base xl:text-lg 2xl:text-xl text-[#222e48] hover:text-[#006dca] transition-colors duration-500">
                The Importance of Diversity in Higher Education
              </h4>

              <div className="flex flex-wrap gap-4">
                <div className="text-[#404a60] text-base font-medium">
                  <FontAwesomeIcon icon={faUserCircle} className="pe-1" />
                  <span>Mihir</span>
                </div>

                <div className="text-[#404a60] text-base font-medium">
                  <FontAwesomeIcon icon={faCalendar} className="pe-1" />
                  <span>18 October, 25</span>
                </div>

                <div className="text-[#404a60] text-base font-medium">
                  <FontAwesomeIcon icon={faMessage} className="pe-1" />
                  <span>26</span>
                </div>
              </div>

              <p className="text-sm py-2 text-[#404a60] pb-5">
                Unlock the secrets to effective time management in the digital
                learning space...
              </p>

              <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5">
                <Link href="/Pages/Blog">
                  <button
                    className="btn custom-btn text-[#076dcb] font-medium rounded-full w-fit text-sm cursor-pointer"
                    type="button"
                  >
                    Read More
                    <i className="bi bi-arrow-up-right ps-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={element1}
          alt="shape-image"
          className="element1 hero-shape1 absolute left-30 top-30 object-contain hidden md:block"
        />

        <Image
          src={element2}
          alt="shape-image"
          className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden md:block"
        />

        <Image
          src={element3}
          alt="shape-image"
          className="element3 hero-shape3 absolute right-96 bottom-10 z-1 object-contain hidden lg:block"
        />

        <Image
          src={element4}
          alt="shape-image"
          className="element3 hero-shape4 absolute right-40 bottom-50 z-0 object-contain hidden lg:block"
        />

        <Image
          src={element5}
          alt="shape-image"
          width={20}
          height={20}
          className="element5 hero-shape5 absolute right-30 top-70 z-0 object-contain hidden sm:flex"
        />

        <Image
          src={element5}
          alt="shape-image"
          width={20}
          height={20}
          className="element5 hero-shape6 absolute left-10 bottom-50 z-0 object-contain hidden sm:flex"
        />

        <Image
          src={element6}
          alt="shape-image"
          className="element5 hero-shape6 absolute right-50 top-20 hidden lg:flex z-2"
        />
      </div>
    </>
  );
}

export default Articles;
