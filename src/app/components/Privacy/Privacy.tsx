import React from "react";

const Privacy = () => {
  return (
    <div className="container text-center mx-auto">
      <h5 className="text-basic text-black font-semibold">
        We take privacy seriously
      </h5>
      <h1 className=" text-2xl text-black font-bold py-4">Before you get started</h1>
      <h3 className=" text-xl text-black w-1/3 mx-auto ">
        "We won't share your answers with anyone and won't ever tell you which
        friends said what about you"
      </h3>
      <h5 className="text-basic text-black font-semibold py-6">with love</h5>
      <button
        className="py-2 px-4 rounded-full border-0 text-sm font-semibold bg-violet-50 file:text-violet-700
      hover:bg-violet-100"
      >Start a test</button>
      <p className="text-xs text-black pt-2">Take only 5 minutes</p>
    </div>
  );
};

export default Privacy;
