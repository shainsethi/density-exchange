"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Privacy = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const slide = useAnimation();

  useEffect(() => {
    if (inView) {
      slide.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 40,
          duration: 1,
        },
      });
    }
    if (!inView) {
      slide.start({
        y: "100px",
        opacity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.div ref={ref}>
      <motion.div animate={slide} className="w-11/12 text-center mx-auto py-40">
        <h5 className="text-xl text-black font-semibold">
          We take privacy seriously
        </h5>
        <h1 className=" text-6xl text-black font-bold py-8">
          Before you get started
        </h1>
        <h3 className=" text-base text-black w-1/3 mx-auto ">
         {" We won't share your answers with anyone and won't ever tell you which friends said what about you "}
        </h3>
        <h5 className="text-xl text-black font-bold py-8">with love</h5>
        <button
          className="py-2 px-4 rounded-full border-0 text-sm font-semibold bg-violet-50 file:text-violet-700
      hover:bg-blue-200"
        >
          Start a test
        </button>
        <p className="text-sm text-black pt-8">Take only 5 minutes</p>
      </motion.div>
    </motion.div>
  );
};

export default Privacy;
