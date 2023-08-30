'use client'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div className='container rounded-3xl w-2/3 mx-auto py-10 work px-20'>
        <div className='left-side'>
            <h1 className='text-5xl text-black font-bold'>Work with us</h1>
            <div className=''>
              <div className=''>
                  <Image src="" alt="" />
                  <h4></h4>
                  <p></p>
              </div>
              <div className=''>
                  <Image src="" alt="" />
                  <h4></h4>
                  <p></p>
              </div>
            </div>
        </div>
    </div>
  ) 
}

export default Work