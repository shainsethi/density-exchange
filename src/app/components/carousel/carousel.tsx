"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "./card";
import CrouselHeading from "./crouselHeading";

function Carousel() {
  return (
    <motion.div className="container">
    <CrouselHeading />
    <motion.div className="carousel-container w-screen">
      <motion.div className="carousel overflow-hidden mt-16">
        <motion.div className="inner-carousel flex justify-between items-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </motion.div>
      </motion.div>
    </motion.div>
    </motion.div>
  );
}

export default Carousel;
