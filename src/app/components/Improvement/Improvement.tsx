"use client";
import { motion , useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Improvement = () => {
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
          stiffness: 30,
          delay: 0.5,
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
    <motion.div ref={ref} className="container py-20 pb-32 mt-8">
      <motion.div animate={left} className="heading mx-auto w-4/5">
        <span className="font-semibold text-lg text-black">
          Wrong with self-improvement & how we're fixing it
        </span>
        <h1 className="text-black font-bold text-5xl flex justify-start items-center">
          Self Improvement. Ugh.
          <div className="mb-5 pl-4">
            <Image src="/assets/Saly-10.png" width={100} height={100} alt="" />
          </div>
        </h1>
      </motion.div>
      <div className="timeline">
        <motion.div animate={animation} className="line "></motion.div>
        <motion.div animate={slide} className="ml-auto w-3/4 mt-8">
          <div className="pb-10">
            <h3 className="text-black font-bold text-2xl">
              it's not as easy as 1-2-3
            </h3>
            <p className="text-black font-normal text-lg w-4/5 pt-2">
              The journey of change may be long , but our sessions are quick. We
              get to point and tell you do what you wanna do
            </p>
          </div>
          <div className="pb-10">
            <h3 className="text-black font-bold text-2xl">
              it's not as easy as 1-2-3
            </h3>
            <p className="text-black font-normal text-lg w-4/5 pt-2">
              The journey of change may be long , but our sessions are quick. We
              get to point and tell you do what you wanna do
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Improvement;
