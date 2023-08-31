"use client"
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Beats = () => {
  const { ref , inView } = useInView({
    threshold: 0.5
  });

  const left = useAnimation();

  useEffect(()=>{
    if(inView){
      left.start({
        x: 0,
        transition: {
          type: 'spring',
           stiffness: 40
        }
      })
    }
    if(!inView){
      left.start({
        x: '-200vw'
      })
    }
  })
      

  return (
    <motion.div ref={ref}>
    <motion.div animate={left} className="flex justify-center items-start w-4/5 mx-auto gap-14">
      <div className="Heading w-1/3 text-3xl font-bold">EQ beats IQ</div>
      <div className="Desc text-gray-500 w-1/3 text-base leading-normal font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut  et dolore magna aliqua. 
      </div>
      <div className="Desc text-gray-500 w-1/3 text-base leading-normal font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna 
      </div>
    </motion.div>
    </motion.div>
  );
};

export default Beats;
