"use client";
import { motion, useAnimation} from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import slay from "../../../../public/assets/Saly.png";

const CrouselHeading = () => {

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
    <motion.div ref={ref}>
    <motion.h1
      animate= {animation}
      className="font-bold text-4xl mx-auto w-4/5 pt-20"
    >
      Does this sound familiar...
      <motion.div animate={slide} className=" inline-block ml-10 ">
        <Image src={slay} width={70} height={70} alt="" />
      </motion.div>
    </motion.h1>
    </motion.div>
  );
};

export default CrouselHeading;
