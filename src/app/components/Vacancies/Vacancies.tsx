'use client'
import { motion , useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Vacancies = () => {

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[inView])

  return (
    <motion.div ref={ref} className="container mx-auto w-4/6 pt-20 pb-10">
      <motion.h1 animate={left} className="text-4xl text-black font-bold pb-4 mx-auto">
        Open vacancies
      </motion.h1>
      <motion.div animate={slide} className="flex justify-center items-center pt-10 gap-16 mx-auto">
        <div className="w-1/3 h-40 bg-fuchsia-100 p-6 rounded-3xl">
          <h5 className="text-basic pl-3 text-black font-bold">
            Senior Full-Stack Engineer
          </h5>
          <ul className="list-disc ml-6 pt-2">
            <li className="text-xs text-black font-semibold leading-loose">
              Full-time position
            </li>
            <li className="text-xs text-black font-semibold leading-loose">
              Full-time position
            </li>
            <li className="text-xs text-black font-semibold leading-loose">
              Full-time position
            </li>
          </ul>
        </div>
        <div className="w-1/3 h-40 bg-fuchsia-100 p-6 rounded-3xl">
          <h5 className="text-basic pl-3 text-black font-bold">
            Senior Full-Stack Engineer
          </h5>
          <ul className="list-disc ml-6 pt-2">
            <li className="text-xs text-black font-semibold leading-loose">
              Full-time position
            </li>
            <li className="text-xs text-black font-semibold leading-loose">
              Full-time position
            </li>
            <li className="text-xs text-black font-semibold leading-loose">
              Full-time position
            </li>
          </ul>
        </div>
        <div className="w-1/3 h-40 bg-fuchsia-100 p-6 rounded-3xl">
          <h5 className="text-basic pl-3 text-black font-bold">
            Senior Full-Stack Engineer
          </h5>
          <ul className="list-disc ml-6 pt-2">
            <li className="text-xs text-black font-semibold leading-loose">
              Full-time position
            </li>
            <li className="text-xs text-black font-semibold leading-loose">
              Full-time position
            </li>
            <li className="text-xs text-black font-semibold leading-loose">
              Full-time position
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Vacancies;
