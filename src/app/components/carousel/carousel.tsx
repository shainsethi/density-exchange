"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "./card";
import CrouselHeading from "./crouselHeading";
import {cardData} from './card-data';

function Carousel() {
  return (
    <motion.div className="container">
    <CrouselHeading />
    <motion.div className="carousel-container mx-auto min-w-max">
      <motion.div className="carousel overflow-hidden mt-16">
        <motion.div className="inner-carousel flex justify-between items-center gap-6">
            {cardData.map((data:any)=>{
              return <Card emoji={data.emoji}  name={data.name} desc={data.desc} color={data.color}/>
            })}
        </motion.div>
      </motion.div>
    </motion.div>
    </motion.div>
  );
}

export default Carousel;
