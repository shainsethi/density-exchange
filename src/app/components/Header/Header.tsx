"use client";
import { HeroWave } from "@/wave";
import { motion, transform } from "framer-motion";
import Image from "next/image";
import React from "react";

const Header = () => {

  return (
    <motion.div className="relative rounded-lg overflow-hidden header w-11/12 mx-auto rounded-b-3xl mb-24 mt-40 pt-0 p-20 flex justify-between items-center">
      <motion.div
        className="w-4/12 rounded-lg overflow-hidden"
      >
        <h5 className="text-lg text-black font-bold pb-4">Ahead app</h5>
        <h1 className="text-black font-bold text-6xl pt-2 pb-10">
          Master your life by mastering emotions
        </h1>
        <div className="flex justify-between items-center">
          <button className="bg-black hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <img src="/assets/app-store.png" className=" rounded pr-1" />
              <span>Download on App Store</span>
            </div>
          </button>
          <div></div>
        </div>
      </motion.div>
      <motion.div className="right-side -rotate-12 translate-y-12 pb-6 ml-4">
        <Image src="/assets/1.png" alt="" width={600} height={400} />
      </motion.div>
      <div className=" w-full absolute bottom-1 left-0 right-0">
        <HeroWave />
      </div>
    </motion.div>
  );
};

export default Header;
