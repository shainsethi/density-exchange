'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const VerticalScrollBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;
    const progress = (scrollY / maxScroll) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=" w-full fixed z-50 top-0 ">
      <motion.div
        className="bg-black h-2 w-full rounded-lg"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
      />
    </div>
  );
};

export default VerticalScrollBar;
