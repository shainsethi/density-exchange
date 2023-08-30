"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from "react";
import Image from "next/image";
import slay from "../../../../public/assets/Saly.png";

const CrouselHeading = () => {

    const headingVariant = {
    hidden: {
      x: -1000,
      scale: 0,
    },
    visible: {
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const imageVariant = {
    hidden: {
      x: 200,
      y: 100,
      z: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      z: 0,
      opacity: 1,
      transition: {
        type: "spring",
        ease: "linear",
      },
    },
  };
  
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.h1
      ref={ref}
      variants={headingVariant}
      initial="hidden"
      animate= "visible"
      className="font-bold text-4xl mx-auto w-4/5 pt-16"
    >
      Does this sound familiar...
      <motion.div ref={ref} variants={imageVariant} className=" inline-block ml-10 ">
        <Image src={slay} width={70} height={70} alt="" />
      </motion.div>
    </motion.h1>
  );
};

export default CrouselHeading;
