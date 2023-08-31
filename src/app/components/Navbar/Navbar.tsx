"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" fixed h-32 top-0 left-0 right-0 z-40 bg-white p-4 flex items-center justify-between px-16">
      <div className="flex items-center">
        <Image src="/assets/Saly.png" width={100} height={100} alt="Logo" />
      </div>

      <ul className="flex space-x-16 text-black font-normal text-xl">
        <li>
          <Link href="/">Emotions</Link>
        </li>
        <li>
          <Link href="/about">Manifesto</Link>
        </li>
        <li>
          <Link href="/services">Self-awareness test</Link>
        </li>
        <li>
          <Link href="/contact">Work with us</Link>
        </li>
      </ul>

      <button className="bg-black hover:bg-blue-600 text-white py-4 px-6 rounded-full">
        Download app
      </button>
    </nav>
  );
};

export default Navbar;
