"use client";
import { motion , useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Work = () => {
    const { ref , inView } = useInView({
        threshold: 0.3
      });

      const animation = useAnimation();
      const slide = useAnimation();
      const left = useAnimation();
      const right = useAnimation();
    
      useEffect(()=>{
        if(inView){
          left.start({
            x: 0,
            transition: {
              type: 'spring',
              stiffness: 30,
            }
          })
          right.start({
            x: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              stiffness: 30,
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
            right.start({
                x: '500px',
                opacity: 0,
            })
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
    <motion.div ref={ref} className="container rounded-3xl w-2/3 mx-auto py-20 work px-20 flex ">
      <div className="left-side">
        <motion.h1 animate={left} className="text-5xl text-black font-bold pb-8">Work with us</motion.h1>
        <motion.div animate={left} className="flex flex-col w-8/12 justify-center items-center rounded-3xl">
          <div className=" bg-white p-8 pt-3 rounded-t-3xl rounded-tr-3xl">
            <Image src="/assets/Saly-1.png" width={100} height={100} alt="" />
            <h4 className="text-3xl font-bold text-black py-2">About</h4>
            <p className="text-lg text-gray-500 font-normal">
              At ahead our goal is to make self-improvement fun and lasting. We
              know there's a way how to make it work and that's what Ahead is
              all about
            </p>
          </div>
          <div className=" bg-fuchsia-100 p-8 rounded-bl-3xl rounded-b-3xl">
            <motion.h4  className="text-3xl font-bold text-black py-2">Product</motion.h4>
            <p className="text-lg text-gray-500 font-normal">
              Sure, you could spend ages reading books or sitting in seminarson
              how to become a better spouse , parent or manager- like we did...
            </p>
          </div>
        </motion.div>
      </div>
      <div className="right-side">
        <motion.h1 animate={right} className="ahead text-5xl font-bold pb-8">ahead</motion.h1>
        <motion.div animate={slide} className="right-heading flex flex-col  gap-7 overflow-y-scroll h-[36rem]">
          {new Array(10).fill("mapped-item").map((item, i) => (
            <div key={item + i} className=" bg-white p-8 rounded-3xl">
              <h4 className="text-xl font-semibold text-black py-2">
                Power through, even when the going gets tough
              </h4>
              <p className=" text-base text-gray-500 font-normal pt-2">
                We help you spot and work around whatever stands in the way, be
                it bad, habits , fears,etc.
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
