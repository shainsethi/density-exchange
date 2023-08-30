import React from "react";

const Card = () => {
  return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-indigo-500">
        <div className="px-6 py-8">
          <div className="icon mb-2">😎</div>
          <div className="font-bold text-base mb-1 text-white">The Coldest Sunset</div>
          <p className="text-xs text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
  );
};

export default Card;
