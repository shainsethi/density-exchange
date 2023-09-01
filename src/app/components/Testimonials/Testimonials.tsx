'use client'
import { motion , useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {

   const { ref , inView } = useInView({
      threshold: 0.3
    });
    const animation = useAnimation();
    const slide = useAnimation();
    const left = useAnimation()
  
    useEffect(()=>{
      if(inView){
        left.start({
          x: 0,
          transition: {
            type: 'spring',
            stiffness: 30,
            bounce: 3
          }
        })
        slide.start({
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 30,
            delay: 0.5,
            duration: 1
          }
        })
        animation.start({
          x: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 30,
            duration: 1,
            delay: 0.5
          }
        })
      }
      if(!inView){
        left.start({
          x: '100vw'
        })
        slide.start({
          y: '100px',
          opacity: 0
        })
        animation.start({
          x: '-100vw',
          opacity: 0,
        })
      }
    },[inView])

  return (
    <motion.div ref={ref} className='rounded-3xl w-2/3 mx-auto mt-24 py-20 testimonials px-20'>
       <motion.h5 animate={left} className='text-xl font-semibold text-black text-center mx-auto tracking-wider'>Let your friends,family, and co-workers rate your skills.</motion.h5>
       <motion.h1 animate={left} className=' pt-4 text-5xl text-black font-bold text-center mx-auto'>Ever wondered what others think of you</motion.h1>
        <motion.div animate={slide} className='flex justify-between items-center gap-24 mt-12 relative'>
          <div className='bar'></div>
           <div className='flex flex-col justify-center items-center'>
              <img width="64" height="64" className='z-10' src="https://img.icons8.com/arcade/64/000000/circled.png" alt="circled"/>
              <h5 className=' text-black font-semibold text-sm text-center pt-3'>Answer questions based on your social skills</h5>
           </div>
           <div className='flex flex-col justify-center items-center'>
              <img width="64" height="64" className='z-10' src="https://img.icons8.com/arcade/64/000000/circled.png" alt="circled"/>
              <h5 className=' text-black font-semibold text-sm text-center pt-3'>Let others anonymously answer the same</h5>
           </div>
           <div className='flex flex-col justify-center items-center'>
              <img width="64" height="64" className='z-10'  src="https://img.icons8.com/arcade/64/000000/circled.png" alt="circled"/>
              <h5 className=' text-black font-semibold text-sm text-center pt-3'>Find out where others and you see things</h5>
           </div>
        </motion.div>
    </motion.div>
  )
}

export default Testimonials;