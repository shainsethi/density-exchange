import React from 'react'

const Vacancies = () => {
  return (
    <div className='container mx-auto w-4/6 py-20'>
      <h1 className='text-4xl text-black font-bold pb-4 mx-auto'>
        Open vacancies
      </h1>
      <div className='flex justify-center items-center pt-10 gap-6 mx-auto'>
          <div className='w-1/3 bg-fuchsia-100 p-6 rounded-3xl'>
            <h5 className='text-basic text-black font-bold'>Senior Full-Stack Engineer</h5>
            <ul className='list-disc ml-6 pt-2'>
              <li className='text-xs text-black font-semibold leading-loose'>Full-time position</li>
              <li className='text-xs text-black font-semibold leading-loose'>Full-time position</li>
              <li className='text-xs text-black font-semibold leading-loose'>Full-time position</li>
            </ul>
          </div>
          <div className='w-1/3 bg-fuchsia-100 p-6 rounded-3xl'>
            <h5 className='text-basic text-black font-bold'>Senior Full-Stack Engineer</h5>
            <ul className='list-disc ml-6 pt-2'>
              <li className='text-xs text-black font-semibold leading-loose'>Full-time position</li>
              <li className='text-xs text-black font-semibold leading-loose'>Full-time position</li>
              <li className='text-xs text-black font-semibold leading-loose'>Full-time position</li>
            </ul>
          </div>
          <div className='w-1/3 bg-fuchsia-100 p-6 rounded-3xl'>
            <h5 className='text-basic text-black font-bold'>Senior Full-Stack Engineer</h5>
            <ul className='list-disc ml-6 pt-2'>
              <li className='text-xs text-black font-semibold leading-loose'>Full-time position</li>
              <li className='text-xs text-black font-semibold leading-loose'>Full-time position</li>
              <li className='text-xs text-black font-semibold leading-loose'>Full-time position</li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Vacancies