"use client";

import Image from "next/image";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import element5 from "@/public/element-05.png";
import element6 from "@/public/element-06.png";

function Achievements() {
  return (
    <>
      <div className="out-achievements grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] lg:py-[10%] relative z-0">
        <div className="achievements-item z-2 h-62.5 flex justify-center items-center flex-col p-4 text-center w-full bg-[#fdf6f3] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#f37739] bg-white w-17.5 min-h-17.5 flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-people"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl  font-bold Sora uppercase">
              1.4K
            </h2>
            <span className="text-[#404a60] text-sm lg:text-base">
              Successfully Trained
            </span>
          </div>
        </div>

        <div className="achievements-item z-2 h-62.5 flex justify-center items-center flex-col p-4 text-center w-full bg-[#f1f6fd] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#006dca] bg-white w-17.5 min-h-17.5 flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-camera-video"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl  font-bold Sora uppercase">
              2K
            </h2>
            <span className="text-[#404a60] text-sm lg:text-base">
              Courses Completed
            </span>
          </div>
        </div>

        <div className="achievements-item z-2 h-62.5 flex justify-center items-center flex-col p-4 text-center w-full bg-[#fdf6f3] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#f37739] bg-white w-17.5 min-h-17.5 flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-hand-thumbs-up"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl  font-bold Sora uppercase">
              1.4K
            </h2>
            <span className="text-[#404a60] text-sm lg:text-base">
              Satisfaction Rate
            </span>
          </div>
        </div>

        <div className="achievements-item z-2 h-62.5 flex justify-center items-center flex-col p-4 text-center w-full bg-[#f1f6fd] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#006dca] bg-white w-17.5 min-h-17.5 flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl  font-bold Sora uppercase">
              5K
            </h2>
            <span className="text-[#404a60] text-sm lg:text-base">
              Students Community
            </span>
          </div>
        </div>

        <Image
          src={element5}
          alt="element-image"
          width={20}
          height={20}
          className="element5 hero-shape5 absolute right-30 top-70 hidden sm:flex"
        />

        <Image
          src={element5}
          alt="element-image"
          width={25}
          height={25}
          className="element5 hero-shape6 absolute left-10 bottom-50 hidden sm:flex"
        />

        <Image
          src={element6}
          alt="element-image"
          className="element5 hero-shape6 absolute right-20 -top-16 hidden sm:flex z-1"
        />
      </div>
    </>
  );
}

export default Achievements;
