import { motion } from 'framer-motion'
import React from 'react'

const CrouselHeading = () => {
  return (
    <motion.h1 className="font-bold text-4xl mx-auto w-4/5 pt-16">
        Does this sound familiar...
        <motion.div className=" inline-block ml-16 ">😲</motion.div>
      </motion.h1>
  )
}

export default CrouselHeading

