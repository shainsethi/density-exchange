"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Card from "./card";
import CrouselHeading from "./crouselHeading";
import {cardData} from './card-data';
import { useInView } from "react-intersection-observer";

function Carousel() {

  const { ref , inView } = useInView({
    threshold: 0.4
  });

  const left: any = useAnimation()

  useEffect(()=>{
    if(inView){
      left.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 30,
          delay: 0.5,
          duration: 2,
        }
      })
    }
    if(!inView){
      left.start({
        x: '-200vw',
        opacity: 0
      })
    }
  }, [inView , left])

  return (
    <motion.div className="pt-4" ref={ref}>
    <CrouselHeading />
    <motion.div className="carousel-container mx-auto pt-4">
      <motion.div className="carousel overflow-hidden mt-16">
        <motion.div animate={left} className="inner-carousel flex justify-between items-center gap-6">
            {cardData.map((data:any)=>{
              return <Card emoji={data.emoji}  name={data.name} desc={data.desc} color={data.color} key={data.color}/>
            })}
        </motion.div>
      </motion.div>
    </motion.div>
    </motion.div>
  );
}

export default Carousel;
