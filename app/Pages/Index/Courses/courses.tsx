"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import element1 from "@/public/element-01.png";
import element2 from "@/public/element-02.png";
import element3 from "@/public/element-03.png";
import element4 from "@/public/element-04.png";
import element5 from "@/public/element-05.png";
import element6 from "@/public/element-06.png";

import CoursesData from "@/app/Json/Courses.json";

function Courses() {
  type Category = keyof typeof CoursesData.Courses;

  const categories: ("All" | Category)[] = [
    "All",
    ...(Object.keys(CoursesData.Courses) as Category[]),
  ];

  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");

  const getCourses = () => {
    if (activeCategory === "All") {
      return (Object.keys(CoursesData.Courses) as Category[]).flatMap((cat) => {
        if (cat === "Marketing") {
          return CoursesData.Courses[cat].slice(0, 2);
        }

        return CoursesData.Courses[cat].slice(0, 1);
      });
    }

    return CoursesData.Courses[activeCategory] || [];
  };

  const courses = getCourses();

  return (
    <>
      <div className="courses px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] lg:py-[10%] bg-[#f3f9ff] relative">
        <div className="courese-content z-2 pt-10 lg:pt-0 flex justify-between items-center flex-col lg:flex-row w-full gap-3">
          <h2 className="text-[#222e48] text-2xl sm:text-3xl md:text-4xl md:leading-10 Sora font-semibold lg:w-[50%]">
            Explore 4,000+ Free Online Courses For Students
          </h2>
          <div className="lg:w-[50%] w-full">
            <p className="text-[#576070] text-sm pb-2">
              Welcome to our diverse and dynamic course catalog. We're dedicated
              to providing you...
            </p>
            <Link href="/Pages/Courses">
              <button
                type="button"
                className="btn font-medium bg-[#076dcb] hover:bg-black text-white px-5 py-2 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
              >
                See All Coureses <i className="bi bi-arrow-up-right ps-2"></i>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 bg-white p-5 rounded-xl shadow-xl mt-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 shadow-md rounded-full text-sm cursor-pointer font-medium transition ${activeCategory === category ? "bg-blue-500 text-white shadow-md" : "bg-[#f3f9ff] text-[#404a60]"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div
                key={course.title}
                className="course-item bg-white p-3 rounded-xl group hover:shadow-lg transition z-2"
              >
                <div className="course-image h-58 rounded-xl overflow-hidden relative bg-gray-200">
                  <div className="absolute inset-0 animate-pulse bg-gray-300"></div>

                  <Image
                    src={course.CourseImage}
                    alt={course.title}
                    fill
                    loading="lazy"
                    className="relative z-10 group-hover:scale-110 transition-all duration-500 object-cover"
                  />
                </div>

                <div className="course-content p-3">
                  <h4 className="my-3 Sora font-bold text-base sm:text-xl text-[#222e48] hover:text-[#006dca] transition-colors duration-500">
                    {course.title}
                  </h4>

                  <div className="flex justify-between items-center gap-2 mb-2">
                    <div className="text-[#222e48] font-medium">
                      <i className="bi bi-camera-video pe-2 text-lg"></i>
                      <span>{course.lessons} Lessons</span>
                    </div>

                    <div className="text-[#222e48] font-medium">
                      <i className="bi bi-bar-chart pe-2"></i>
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-2 mb-4">
                    <div className="text-[#222e48] font-medium">
                      <i className="bi bi-star-fill text-yellow-400 pe-2"></i>
                      <span>
                        {course.rating}{" "}
                        <span className="text-[#798090] text-sm">
                          ({course.reviews})
                        </span>
                      </span>
                    </div>

                    <div className="text-[#222e48] font-medium flex items-center">
                      <Image
                        src={course.InstructorImage}
                        alt={course.instructor}
                        width={50}
                        height={50}
                        loading="lazy"
                        className="rounded-[50%] h-11 w-11 object-cover pe-1"
                      />
                      <span>{course.instructor}</span>
                    </div>
                  </div>

                  <div className="border-t border-dotted border-[#c1c4cc] pt-5 flex items-center justify-between gap-8">
                    <h4 className="text-[#f37739] text-2xl font-semibold">
                      ${course.price}
                    </h4>
                    <button
                      type="button"
                      className="btn font-medium text-[#076dcb] hover:text-black rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
                    >
                      {course.enrollLink}
                      <i className="bi bi-arrow-up-right ps-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <p className="col-span-full text-center text-gray-600">
                No course available
              </p>
            </>
          )}
        </div>

        <Image
          src={element1}
          alt="shape-image"
          className="element1 hero-shape1 absolute left-30 top-30 object-contain hidden lg:block"
        />

        <Image
          src={element2}
          alt="shape-image"
          className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden lg:block"
        />

        <Image
          src={element3}
          alt="shape-image"
          className="element3 hero-shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block"
        />

        <Image
          src={element4}
          alt="shape-image"
          className="element3 hero-shape4 absolute right-40 bottom-50 z-2 object-contain hidden lg:block"
        />

        <Image
          src={element5}
          alt="shape-image"
          width={25}
          height={25}
          className="element5 hero-shape5 absolute right-30 top-70 z-2 object-contain hidden sm:flex"
        />

        <Image
          src={element5}
          alt="shape-image"
          width={25}
          height={25}
          className="element5 hero-shape6 absolute left-10 bottom-50 z-2 object-contain hidden sm:flex"
        />

        <Image
          src={element6}
          alt="shape-image"
          className="element5 hero-shape7 absolute right-50 top-20 z-2 object-contain hidden lg:flex"
        />
      </div>
    </>
  );
}

export default Courses;
