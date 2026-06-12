"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMessage,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";

import element1 from "@/public/element-01.png";
import element2 from "@/public/element-02.png";
import element3 from "@/public/element-03.png";
import element4 from "@/public/element-04.png";
import element5 from "@/public/element-05.png";
import element6 from "@/public/element-06.png";
import blog1 from "@/public/blog-image-01.jpg";
import blog2 from "@/public/blog-image-02.jpg";
import blog3 from "@/public/blog-image-03.jpg";
import blog4 from "@/public/blog-image-04.jpg";
import blog5 from "@/public/blog-image-05.jpg";
import blog6 from "@/public/blog-image-06.jpg";
import blog7 from "@/public/blog-image-07.jpg";
import blog8 from "@/public/blog-image-08.jpg";
import blog9 from "@/public/blog-image-09.jpg";

import Banner from "../Index/Banner/banner";

export const BlogData = [
  {
    id: 1,
    image: blog1,
    title: "Navigating the Job Market: Advice for Graduates",
    views: "1.6K",
    comments: 25,
  },
  {
    id: 2,
    image: blog2,
    title: "The Importance of Diversity in Higher Education",
    views: "2.3K",
    comments: 18,
  },
  {
    id: 3,
    image: blog3,
    title: "10 Tips for Successful Online Learning",
    views: "1.4K",
    comments: 34,
  },
  {
    id: 4,
    image: blog4,
    title: "How to Stay Motivated While Studying from Home",
    views: "1.1K",
    comments: 15,
  },
  {
    id: 5,
    image: blog5,
    title: "Mastering Python: Beginner to Advanced Tips",
    views: "3.8K",
    comments: 42,
  },
  {
    id: 6,
    image: blog6,
    title: "The Importance of Lifelong Learning in Today's World",
    views: "1.9K",
    comments: 27,
  },
  {
    id: 7,
    image: blog7,
    title: "Balancing Work and Study: Strategies for Success",
    views: "2.1K",
    comments: 11,
  },
  {
    id: 8,
    image: blog8,
    title: "Effective Time Management for Students",
    views: "2.7K",
    comments: 39,
  },
  {
    id: 9,
    image: blog9,
    title: "The Benefits of Learning a New Language Online",
    views: "1.4K",
    comments: 22,
  },
];

function Blog() {
  return (
    <>
      <div className="section-barner bg-[#f3f9ff] h-100 py-[6%] lg:py-[10%] flex flex-col justify-center items-center relative">
        <h1 className="ChakraPetch font-bold text-4xl lg:text-6xl mb-5 text-[#222e48]">
          Blogs
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
              <span className="text-sm xl:text-base text-[#f37739]">Blogs</span>
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

      <div className="blog bg-[#f3f9ff] px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] lg:py-[10%] relative gap-10 flex flex-col">
        <div className="blog-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 z-2">
          {BlogData.map((blog) => (
            <div
              key={blog.id}
              className="blog-item bg-white p-4 rounded-xl group shadow-lg"
            >
              <div className="blogs-image w-full rounded-xl overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              <div className="blogs-content py-4">
                <h4 className="my-3 Sora font-semibold text-base xl:text-lg 2xl:text-xl text-[#222e48] hover:text-[#006dca] transition-colors duration-500">
                  {blog.title}
                </h4>

                <div className="flex flex-wrap gap-4">
                  <div className="text-[#404a60] text-base font-medium">
                    <FontAwesomeIcon icon={faUserCircle} className="pe-1" />
                    <span>By Admin</span>
                  </div>

                  <div className="text-[#404a60] text-base font-medium">
                    <i className="bi bi-eye pe-1"></i>
                    <span>{blog.views}</span>
                  </div>

                  <div className="text-[#404a60] text-base font-medium">
                    <FontAwesomeIcon icon={faMessage} className="pe-1" />
                    <span>{blog.comments}</span>
                  </div>
                </div>

                <div className="border-t-2 border-dotted border-[#c1c4cc] pt-4 mt-2">
                  <Link href="#">
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
          ))}
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

      <Banner />
    </>
  );
}

export default Blog;
