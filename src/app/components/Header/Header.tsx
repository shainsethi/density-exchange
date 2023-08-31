"use client";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Header = () => {

  const headingVariant = {
    hidden:{
      x: "-100"
    },
    visible:{
      x: 0,
      transition: {
        type: "spring",
        stiffness: 20
      },
    }
  }

  return (
    <motion.div
      className="relative header w-11/12 mx-auto rounded-b-3xl mb-24 p-20 w-100vw flex justify-between items-center"
    >
      <motion.div variants={headingVariant} initial="hidden" animate="visible" className="left-side w-4/12">
        <h5 className="text-lg text-black font-bold pb-4">Ahead app</h5>
        <h1 className="text-black font-bold text-6xl pt-2 pb-12">
          Master your life by mastering emotions
        </h1>
        <div className="flex justify-between items-center">
          <button className="bg-black hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 15l9-9 9 9"
                />
              </svg>
              <span>Download on App Store</span>
            </div>
          </button>
          <div></div>
        </div>
      </motion.div>
      <div className="right-side -rotate-12 z-10 pb-9 ml-4">
        <Image src="/assets/1.png" alt="" width={600} height={500} />
      </div>
      <div className=" w-full absolute bottom-1 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4B4EE5"
            fill-opacity="0.3"
            d="M0,160L48,160C96,160,192,160,288,186.7C384,213,480,267,576,282.7C672,299,768,277,864,256C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        </div>
    </motion.div>
  );
};

export default Header;
