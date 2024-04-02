"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { priceList, priceList1 } from "/components/price";
import { Linkedin, LinkedinIcon } from "lucide-react";
import Button from "/components/Button";

export default function Home() {
  const [active, setActive] = useState(0);

  const handleToggle = (id) => {
    setActive(id === active ? null : id);
  };
  const year = new Date().getFullYear();

  return (
    <main className="flex flex-col">
      <section className="py-16 px-5 relative">
        {/* Grid container for background images */}
        <div className="grid grid-cols-2 absolute inset-0">
          {/* Background image 1 */}
          <div className="bg-[url('/bgleft.svg')] bg-no-repeat bg-center bg-cover"></div>
          {/* Background image 2 */}
          <div className="bg-[url('/bgright.svg')] bg-no-repeat bg-center bg-cover"></div>
        </div>
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center text-center py-6">
            <div className="flex bg-black py-2 px-7 rounded-full">
              <Image
                src="/healthcare.svg"
                alt="health icon"
                width={30}
                height={30}
              />
              <Image
                src="/brain.svg"
                alt="brain icon"
                width={30}
                height={30}
                className="pl-2"
              />
            </div>
          </div>
          <div className="py-14 flex flex-col items-center text-center justify-center">
            <h1 className="font-semibold pointer-events-none text-2xl text-[var(--grad)] md:text-4xl max-w-3xl">
              Spend less time on analysis and more time on patient care
            </h1>
            <h2 className="py-7 font-semibold pointer-events-none text-gray-900 ">
              Focus on innovation & let AI do the rest
            </h2>
            <div className="flex items-center justify-center text-center">
              <Link href="/">
                <Image
                  src="/herobtn.svg"
                  className="cursor-pointer"
                  alt="Get started button"
                  width={110}
                  height={90}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="flex flex-col items-center text-center justify-center">
          <div className="flex py-2 px-7 rounded-full text-[#4d9af6] bg-[#dbe8fd]">
            <h1 className="pointer-events-none">Solution</h1>
          </div>
          <div className="flex items-center justify-center px-2 md:px-0 text-center mt-28 border p-1 shadow-lg border-white rounded-2xl md:h-16 h-auto max-w-full w-[25rem] md:w-[45rem]">
            {[
              "Preventive Care",
              "Symptom Management",
              "Chronic Disease Management",
            ].map((title, id) => (
              <div
                key={id}
                className={`bg-transparent md:px-4 md:py-2  rounded-2xl mx-2 cursor-pointer ${
                  active === id ? "bg-[#d6e5f7c2] " : ""
                }`}
                onClick={() => handleToggle(id)}
              >
                <h1 className="font-semibold md:text-[0.9rem] text-[0.5rem] p-2">
                  {title}
                </h1>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 py-24 px-3">
            <div className="flex flex-col md:items-start items-start text-left justify-start md:text-left md:justify-start md:px-20 px-1">
              <h1 className="md:font-semibold font-bold md:text-lg text-[0.9rem]">
                MobiAI was created to give researchers a secure, easy-to-use
                platform for data analysis. They believe this will speed up
                healthcare research and ultimately lead to better discoveries
                and improved lives.
              </h1>
              <div className="flex items-center justify-center text-center py-9">
                <h1 className="px-3 py-1 rounded-lg text-white font-bold bg-[#0074f1]">
                  1
                </h1>
                <h1 className="font-bold md:text-2xl text-lg pl-3 items-start text-start justify-start">
                  Simplified Healthcare Analysis
                </h1>
              </div>
              <div className="">
                <h1 className="font-semibold justify-center text-left md:text-lg text-xs ">
                  MobiAI brings powerful healthcare research tools to the cloud.
                  This user-friendly platform makes complex statistical analysis
                  (like Chi-Square and One-Way ANOVA) accessible to researchers,
                  saving them time and effort.
                </h1>
              </div>
              <div className="flex items-center justify-center text-center py-9">
                <h1 className="px-3 py-1 rounded-lg text-white font-bold bg-[#0074f1]">
                  2
                </h1>
                <h1 className="font-bold md:text-2xl text-lg pl-3 items-start text-start justify-start">
                  Empowernment And Productivity
                </h1>
              </div>
              <div className="">
                <h1 className="font-semibold justify-center text-left md:text-lg text-xs">
                  MobiAI cuts through the clutter of complex research tools,
                  offering an affordable and user-friendly platform that boosts
                  productivity and empowers researchers to focus on their goals.
                </h1>
              </div>
              <div className="flex items-start justify-start text-left py-9">
                <h1 className="px-3 py-1 rounded-lg text-white font-bold bg-[#0074f1]">
                  3
                </h1>
                <h1 className="font-bold md:text-2xl text-lg pl-3 items-start text-start justify-start">
                  Instant Results{" "}
                </h1>
              </div>
              <div className="">
                <h1 className="font-semibold items-start justify-start text-left md:text-lg text-xs">
                  MobiAI streamlines healthcare research by allowing users to
                  upload data, choose their analysis, and get results in
                  seconds. This fast turnaround time empowers researchers to
                  make quicker decisions and accelerate advancements in
                  healthcare.
                </h1>
              </div>
            </div>
            <div className="lg:block hidden">
              <Image src="/bgleft.svg" alt="bg" width={500} height={700} />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-3 bg-[#f4f8fd]">
        <div className="flex flex-col items-center text-center justify-center">
          <div className="flex py-2 px-7 rounded-full text-[#4d9af6] bg-[#dbe8fd]">
            <h1 className="pointer-events-none">Pricing</h1>
          </div>
          <h1 className=" pt-14 lg:text-3xl text-xl font-semibold">
            Choose your path to advanced Analytics
          </h1>
          <div className="flex items-center justify-center  px-2 md:px-0 text-center mt-10 md:mt-16 border p-1 shadow-lg border-white rounded-2xl md:h-16 h-auto max-w-full w-auto md:w-auto">
            {["Monthly", "Yearly"].map((title, id) => (
              <div
                key={id}
                className={`bg-transparent px-2 md:px-4 py-1 md:py-2 duration-500 rounded-xl md:rounded-2xl mx-2 cursor-pointer ${
                  active === id ? "bg-[#d6e5f7c2] " : ""
                }`}
                onClick={() => handleToggle(id)}
              >
                <h1 className="font-semibold md:text-[0.9rem] text-[0.5rem] p-2">
                  {title}
                </h1>
              </div>
            ))}
          </div>
          {(active === 0 || active === 1) && (
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 py-14">
              {active === 0 &&
                priceList.map((p, id) => (
                  <div
                    key={id}
                    className="flex border-2 border-sky-900 rounded-3xl h-auto text-center p-6 gap-3"
                  >
                    <div className="flex flex-col items-start">
                      <h4 className="flex text-xl font-bold text-[#326199] text-left justify-start font-rubik">
                        {p.type}
                      </h4>
                      <p className="flex text-left text-3xl items-start max-w-2xl font-rubik font-bold text-gray-700">
                        {p.cost}
                      </p>
                      <p className="flex text-left text-xs items-start max-w-2xl font-rubik font-semibold text-gray-400">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              {active === 1 &&
                priceList1.map((p, id) => (
                  <div
                    key={id}
                    className="flex border-2 border-sky-900 rounded-3xl h-auto text-center p-6 gap-3"
                  >
                    <div className="flex flex-col items-start">
                      <h4 className="flex text-xl font-bold text-[#326199] text-left justify-start font-rubik">
                        {p.type}
                      </h4>
                      <p className="flex text-left text-3xl items-start max-w-2xl font-rubik font-bold text-gray-700">
                        {p.cost}
                      </p>
                      <p className="flex text-left text-xs items-start max-w-2xl font-rubik font-semibold text-gray-400">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
      <section className="py-24 px-3 bg-[#f4f8fd]">
        <div className=" bg-[#acb7c4] mx-3 md:mx-56 flex flex-col items-center rounded-3xl text-center justify-center p-6">
          <h1 className="text-2xl font-semibold py-4">Sign Up Now</h1>
          <h2 className="py-5 pb-9 md:mx-36 text-gray-700 font-semibold">
            Effortless analysis. Faster results. Explore MobiAI and unlock your
            research potential.
          </h2>
          <Button />
        </div>
      </section>
      <footer className="pt-24 p pb-12 md:px-4 px-3 bg-[#acb7c4]">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <Image src="/mobilogo.svg" width={80} height={60} alt="logo" />
          <div className="flex flex-col pt-14 md:-mt-14 font-semibold">
            <h2 className="cursor-pointer">Request a Demo</h2>
            <h2 className="cursor-pointer">Contact</h2>
            <h2 className="cursor-pointer">Book appointment</h2>
          </div>
          <div className="pt-6">
            <h2 className="text-[1rem]">Follow us</h2>
            <h2 className="font-semibold">LinkedIn</h2>
          </div>
        </div>
        <div className="font-semibold pt-16">&copy;{year} MobiAI</div>
      </footer>
    </main>
  );
}
