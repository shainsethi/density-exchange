'use client'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div className='container rounded-3xl w-2/3 mx-auto py-10 work px-20 flex '>
        <div className='left-side'>
            <h1 className='text-5xl text-black font-bold pb-8'>Work with us</h1>
            <div className=' flex flex-col w-8/12 justify-center items-center rounded-3xl'>
              <div className=' bg-white p-8 pt-3 rounded-t-3xl rounded-tr-3xl'>
                  <Image src="/assets/Saly-1.png" width={100} height={100} alt="" />
                  <h4 className='text-3xl font-bold text-black py-2'>About</h4>
                  <p className='text-lg text-gray-500 font-normal'>At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work and that's what Ahead is all about</p>
              </div>
              <div className=' bg-fuchsia-100 p-8 rounded-bl-3xl rounded-b-3xl'>
                  <h4 className='text-3xl font-bold text-black py-2'>Product</h4>
                  <p  className='text-lg text-gray-500 font-normal'>Sure, you could spend ages reading books or sitting in seminarson how to become a better spouse , parent or manager- like we did...</p>
              </div>
            </div>
        </div>
        <div className='right-side'>
            <div className='right-heading'>
                <h1 className='ahead text-5xl font-bold pb-8'>ahead</h1>
                <div className=' bg-white p-8 rounded-3xl'>
                    <h4 className='text-xl font-semibold text-black py-2'>Power through, even when the going gets tough</h4>
                    <p className=' text-base text-gray-500 font-normal pt-2'>We help you spot and work around whatever stands in the way, be it bad, habits , fears,etc.</p>
                </div>
            </div>
        </div>  
    </div>
  ) 
}

export default Work