import React from "react";

const Intro = () => {
  return (
    <div className="container bg-fuchsia-400 w-11/12 mx-auto mt-16 flex justify-between items-center py-12">
      <div className="heading pt-16 w-2/4 px-8">
        <span className="text-base text-black font-semibold">Built out of frustation</span>
        <h1 className="text-black font-bold text-5xl pt-2">Meet the ahead app</h1>
      </div>
      <div className="Description w-2/4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia
        </p>
      </div>
    </div>
  );
};

export default Intro;
