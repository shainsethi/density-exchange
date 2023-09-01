'use cliennt'
import React from 'react'
import Image from 'next/image'

const footer = () => {  
  return (
    <div className='py-10 container mx-auto w-11/12 '>
          <hr />
          <div className=' flex flex-col justify-center items-center mt-12'>
          <Image src="/assets/Saly.png" alt="" width={50} height={50}/>
          <h4 className='ahead text-2xl font-bold'>ahead</h4>
          <div className='flex justify-between items-center py-8 gap-10'>
             <div><Image alt='' className='inline pr-2' height={40} width={40} src='https://img.icons8.com/color/48/marker--v1.png'/>AugustraBe 26, 100117 India</div>
             <div><Image alt='' className='inline pr-2' height={40} width={40} src='https://img.icons8.com/fluency/48/mail--v1.png'/>hi@ahead-app.com</div>
          </div>
          <button className="bg-black hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <Image alt='' src="/assets/app-store.png" className=" rounded pr-1" />
              <span>Download on App Store</span>
            </div>
          </button>
          <div className='mt-8'>2022 Ahead app. All right reserved</div>
       </div>
    </div>
  )
}

export default footer