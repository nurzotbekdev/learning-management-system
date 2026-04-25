"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsActive(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <nav
        className={`nav w-full flex justify-between items-center px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-3 fixed top-0 left-0 right-0 z-50 border border-[#045eb014] transition-all duration-500 ${isActive ? "bg-white shadow-lg" : ""}`}
      >
        <div className="nav-left flex items-center">
          <div className="nav-logo">
            <Link href="/">
              <h1 className="text-3xl font-semibold Unbounded">
                Stud<span className="text-(--prim)">IQ</span>
              </h1>
            </Link>
          </div>

          <ul className="hidden lg:flex gap-6 items-center ms-20 nav-menu">
            <li className="relative px-4 py-1.5 group">
              <Link
                href="/"
                className="font-semibold text-base relative z-1 group-hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>

            <li className="relative px-4 py-1.5 group">
              <Link
                href="/Pages/About"
                className="font-semibold text-base relative z-1 group-hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>

            <li className="relative px-4 py-1.5 group">
              <Link
                href="/Pages/Courses"
                className="font-semibold text-base relative z-1 group-hover:text-white transition-colors duration-300"
              >
                Courses
              </Link>
            </li>

            <li className="relative px-4 py-1.5 group">
              <Link
                href="/Pages/Blog"
                className="font-semibold text-base relative z-1 group-hover:text-white transition-colors duration-300"
              >
                Blog
              </Link>
            </li>

            <li className="relative px-4 py-1.5 group">
              <Link
                href="/Pages/Contact"
                className="font-semibold text-base relative z-1 group-hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-fight flex gap-2 items-center">
          <div className="user text-lg px-1.5 py-0.5 bg-white hover:bg-(--prim) hover:text-white transition-colors duration-300 shadow-xl flex justify-center items-center rounded-full cursor-pointer">
            <Link href="/Pages/Login">
              <FontAwesomeIcon icon={faCircleUser} />
            </Link>
          </div>
          <div className="open-sidebar"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
