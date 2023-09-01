"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" fixed h-28 top-0 left-0 right-0 z-40 bg-white p-4 flex items-center justify-between px-16">
      <div className="flex items-center">
        <Image src="/assets/Saly.png" width={80} height={80} alt="Logo" />
      </div>

      <ul className="flex space-x-12 text-black font-normal text-lg">
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

      <button className="bg-black hover:bg-blue-600 text-white py-3 px-5 rounded-full">
        Download app
      </button>
    </nav>
  );
};

export default Navbar;
