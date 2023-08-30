"use client";
import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="container rounded-3xl w-11/12 mx-auto mt-16 flex justify-between items-center py-12 introduction px-20">
      <div className="heading pt-16 w-2/4 px-8 relative ">
        <span className="text-base text-black font-semibold ">
          Built out of frustation
        </span>
        <h1 className="text-black font-bold text-5xl pt-2 ">
          Meet the ahead app
        </h1>
        <div className="">
          <Image
            src="/assets/Saly-31.png"
            width={500}
            height={500}
            alt=""
          ></Image>
        </div>
        <div className="blob absolute top-2 right-2 opacity-70">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FAB0A5"
              d="M51.9,-5.4C51.9,19.9,25.9,39.7,4.1,39.7C-17.7,39.7,-35.3,19.9,-35.3,-5.4C-35.3,-30.7,-17.7,-61.5,4.1,-61.5C25.9,-61.5,51.9,-30.7,51.9,-5.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
      <div className="Description w-2/4 text-xl text-gray-600 font-normal leading-relaxed">
        <div className=" mb-4">
          <Image src="/assets/Saly-27.png" width={400} height={200} alt=""></Image>
        </div>
        <p className="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officiaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Intro;
