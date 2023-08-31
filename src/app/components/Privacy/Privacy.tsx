"use client"
import { motion , useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Privacy = () => {
  const { ref , inView } = useInView({
    threshold: 0.3
  });
  const animation = useAnimation();
  const slide = useAnimation();
  const left = useAnimation()

  useEffect(()=>{
    if(inView){
      left.start({
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 40,
          bounce: 3
        }
      })
      slide.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 40,
          duration: 1
        }
      })
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 30,
          when: 'beforeChildren',
          duration: 1,
          delay: 0.5
        }
      })
    }
    if(!inView){
      left.start({
        x: '-100vw'
      })
      slide.start({
        y: '100px',
        opacity: 0
      })
      animation.start({
        x: '-100vw',
        opacity: 0,
      })
    }
  },[inView])


  return (
    <motion.div ref={ref} animate={slide} className="container text-center mx-auto py-40">
      <h5 className="text-xl text-black font-semibold">
        We take privacy seriously
      </h5>
      <h1 className=" text-6xl text-black font-bold py-8">Before you get started</h1>
      <h3 className=" text-base text-black w-1/3 mx-auto ">
        "We won't share your answers with anyone and won't ever tell you which
        friends said what about you"
      </h3>
      <h5 className="text-xl text-black font-bold py-8">with love</h5>
      <button
        className="py-2 px-4 rounded-full border-0 text-sm font-semibold bg-violet-50 file:text-violet-700
      hover:bg-blue-200"
      >Start a test</button>
      <p className="text-sm text-black pt-8">Take only 5 minutes</p>
    </motion.div>
  );
};

export default Privacy;
