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
import learningImage from "@/public/learning_image.png";

import Banner from "../Index/Banner/banner";

function Login() {
  return (
    <>
      <div className="section-barner bg-[#f3f9ff] h-100 py-[6%] lg:py-[10%] flex flex-col justify-center items-center relative">
        <h1 className="ChakraPetch font-bold text-4xl lg:text-6xl mb-5 text-[#222e48]">
          Sign In
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
                Sign In
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

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] pt-[6%] lg:pt-[10%] flex flex-col lg:flex-row gap-8 justify-between items-center xl:gap-15 z-10 relative">
        <div className="lg:w-1/2 w-full">
          <form
            method="post"
            className="w-full bg-[#f3f9ff] border border-[#ebecef] p-10 rounded-2xl"
          >
            <h2 className="text-[#222e48] text-2xl lg:text-4xl font-semibold pb-2">
              Welcome Back !
            </h2>
            <p className="text-[#404a60] text-sm lg:text-base Inter">
              Sign in to your account and join us
            </p>

            <div className="mt-5 flex flex-col">
              <label className="text-[#404a60] font-normal pb-1 text-sm lg:text-base">
                Enter Your Email ID
              </label>
              <input
                required
                type="text"
                placeholder="Enter Your Email..."
                className="h-10 border border-[#ebecef] bg-white ps-4 rounded-md outline-none"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label className="text-[#404a60] font-normal pb-1 text-sm lg:text-base">
                Enter Your Password
              </label>
              <input
                required
                type="text"
                placeholder="Enter Your Password..."
                className="h-10 border border-[#ebecef] bg-white ps-4 rounded-md outline-none"
              />
            </div>

            <Link
              href="#"
              className="text-[#ff9f29] text-end block font-light pt-1 text-sm lg:text-base"
            >
              Forget Password
            </Link>

            <p className="text-[#404a60] mb-4 text-sm">
              Don't have an account ?{" "}
              <Link href="/Pages/Register" className="text-(--prim)">
                Sign Up
              </Link>
            </p>

            <button
              className="btn custom-btn bg-(--prim) hover:bg-black text-white border border-transparent px-5 py-2 rounded-full w-auto text-sm cursor-pointer transition-colors duration-300"
              type="submit"
            >
              Sign In
              <i className="bi bi-arrow-up-right ps-2"></i>
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="learning-image lg:mx-0 mx-auto bg-[#f3f9ff] rounded-[50%] w-full sm:w-145 h-145 p-10">
            <Image
              src={learningImage}
              alt="learning-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Banner />
    </>
  );
}

export default Login;
