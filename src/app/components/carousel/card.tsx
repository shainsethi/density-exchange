'use client'
import React from "react";
import Image from "next/image";

interface CardProps {
  emoji: string;
  name: string;
  desc: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ emoji, name, desc , color }) => {
  return (
    <div className="max-w-xs rounded-3xl overflow-hidden shadow-lg" style={{background: color}}>
      <div className="px-6 py-8">
        <div className="icon mb-2">
            <Image src={emoji} width={60} height={60} alt=""></Image>          
          </div>
        <div className="font-bold text-base mb-1 text-white">{name}</div>
        <p className="text-xs text-gray-200">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
