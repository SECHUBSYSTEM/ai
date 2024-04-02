"use client";
import React, { useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
// import Navlinks from "./Navlinks";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`bg-transparent z-50 relative  ${
        navOpen ? "sticky--nav" : isSticky ? " sticky--nav" : ""
      }`}
    >
      <div className="container border-b-2 mx-auto  border-gray-500">
        <div className="flex items-center font-medium justify-around">
          <div className="z-[1000] p-0 px-3 md:w-auto w-full flex justify-between">
            <Link href="/home">
              <Image
                src="/mobilogo.svg"
                alt="logo"
                width={100}
                height={80}
                className="logo md:cursor-pointer"
                onClick={() => setNavOpen(false)}
              />
            </Link>
            <div
              className="text-3x1 mt-7 md:hidden"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <GrClose /> : <SlMenu />}
            </div>
          </div>
          <ul className="md:flex hidden text-[#333333] items-center gap-8 font-rubik font-bold ">
            <li className="uppercase hover:text-secondary font-bold transition-all">
              <Link href="/home" className=" py-4 px-1 inline-block">
                Home
              </Link>
            </li>
            <li className="uppercase hover:text-secondary font-bold transition-all py-2 px-1 ">
              <Link href="/usage" className="py-4 px-1 inline-block">
                Usage
              </Link>
            </li>
            <li className="uppercase hover:text-secondary font-bold transition-all">
              <Link href="/pricing" className="py-4 px-1 inline-block">
                Pricing
              </Link>
            </li>
            <li className="uppercase hover:text-secondary font-bold transition-all">
              <Link href="/contact" className="py-4 px-1 inline-block">
                Contact
              </Link>
            </li>
            {/* <Navlinks /> */}
          </ul>
          <div className=" flex items-center justify-center gap-8 text-center">
            <div className="md:block hidden">
              <Button />
            </div>
          </div>
        </div>
        {/* mobile nav menu */}
        <ul
          className={`absolute  md:hidden  text-[#333333] bg-white  font-rubik md:uppercase z-[100] font-bold w-full min-h-screen h-full top-0 py-24 pl-4 duration-500 ${
            navOpen ? "right-0" : "right-[100%]"
          }`}
        >
          <li className=" hover:text-secondary transition-all">
            <Link
              href="/home"
              className="py-4 mt-3 pl-5 uppercase  px-3 inline-block"
              onClick={() => setNavOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className=" hover:text-secondary transition-all">
            <Link
              href="/usage"
              className="py-4 mt-3 pl-5 uppercase  px-3 inline-block"
              onClick={() => setNavOpen(false)}
            >
              Usage
            </Link>
          </li>
          <li className=" hover:text-secondary transition-all">
            <Link
              href="/pricing"
              className="py-4 mt-3 pl-5 uppercase  px-3 inline-block"
              onClick={() => setNavOpen(false)}
            >
              Pricing
            </Link>
          </li>
          <li className=" hover:text-secondary transition-all">
            <Link
              href="/contact"
              className="py-4 mt-3 pl-5 uppercase  px-3 inline-block"
              onClick={() => setNavOpen(false)}
            >
              Contact
            </Link>
          </li>
          <div
            className="py-7 pl-3 inline-block"
            onClick={() => setNavOpen(false)}
          >
            <Button />
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Header;
