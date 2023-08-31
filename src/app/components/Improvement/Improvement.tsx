"use client";
import Image from "next/image";
import React from "react";

const Improvement = () => {
  return (
    <div className="container py-20 pb-32 mt-8">
      <div className="heading mx-auto w-4/5">
        <span className="font-semibold text-lg text-black">
          Wrong with self-improvement & how we're fixing it
        </span>
        <h1 className="text-black font-bold text-5xl flex justify-start items-center">
          Self Improvement. Ugh.
          <div className="mb-5 pl-4">
            <Image src="/assets/Saly-10.png" width={100} height={100} alt="" />
          </div>
        </h1>
      </div>
      <div className="timeline">
        <div className="line "></div>
        <div className="ml-auto w-3/4 mt-8">
          <div className="pb-10">
            <h3 className="text-black font-bold text-2xl">
              it's not as easy as 1-2-3
            </h3>
            <p className="text-black font-normal text-lg w-4/5 pt-2">
              The journey of change may be long , but our sessions are quick. We
              get to point and tell you do what you wanna do
            </p>
          </div>
          <div className="pb-10">
            <h3 className="text-black font-bold text-2xl">
              it's not as easy as 1-2-3
            </h3>
            <p className="text-black font-normal text-lg w-4/5 pt-2">
              The journey of change may be long , but our sessions are quick. We
              get to point and tell you do what you wanna do
            </p>
          </div>
          <div className="pb-10">
            <h3 className="text-black font-bold text-2xl">
              it's not as easy as 1-2-3
            </h3>
            <p className="text-black font-normal text-lg w-4/5 pt-2">
              The journey of change may be long , but our sessions are quick. We
              get to point and tell you do what you wanna do
            </p>
          </div>
          <div className="pb-10">
            <h3 className="text-black font-bold text-2xl">
              it's not as easy as 1-2-3
            </h3>
            <p className="text-black font-normal text-lg w-4/5 pt-2">
              The journey of change may be long , but our sessions are quick. We
              get to point and tell you do what you wanna do
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Improvement;
