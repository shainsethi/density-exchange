"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Intro = () => {

  const { ref , inView } = useInView({
    threshold: 0.5
  });
  const animation = useAnimation();
  const slide = useAnimation();
  const left = useAnimation()

  useEffect(()=>{
    if(inView){
      left.start({
        x: 0,
        transition: {
          ease: 'easeOut'
        }
      })
      slide.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 50
        }
      })
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 50,
        }
      })
    }
    if(!inView){
      left.start({
        x: '-100vw'
      })
      slide.start({
        y: '-100vw',
        opacity: 0
      })
      animation.start({
        x: '-100vw',
        opacity: 0,
      })
    }
  },[inView])

  return (
    <div ref={ref} className="container rounded-3xl w-11/12 mx-auto mt-16 flex justify-between items-center py-12 introduction px-20">
      <div className="heading pt-16 w-2/4 px-8 relative ">
        <motion.div animate={left} exit={{ x: -300 , opacity: 0  }} className="text-base text-black font-semibold ">
          Built out of frustation
        </motion.div>
        <motion.h1 animate={slide} exit={{ x: -300, opacity: 0 }} className="text-black font-bold text-5xl pt-2 ">
          Meet the ahead app
        </motion.h1>
        <motion.div className=""  animate={animation}  exit={{ x: -300, opacity: 0 }}>
          <Image 
            src="/assets/Saly-31.png"
            width={500}
            height={500}
            alt=""
          ></Image>
        </motion.div>
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
      <motion.div animate={animation}  exit={{ x: -300, opacity: 0 }} className="Description w-2/4 text-xl text-gray-600 font-normal leading-relaxed">
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
      </motion.div>
    </div>
  );
};

export default Intro;
