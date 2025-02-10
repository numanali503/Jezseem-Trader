import React from 'react'
import rexMachine from '../../assets/images/rex70.png'

function ProductSection() {
  return (
    <div className='bg-slate-100 py-12'>
      <div className='max-w-[85rem] mx-auto flex items-center justify-center space-x-4'>
        <div className='h-full w-full'>
          <div className="flex items-center w-full">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center text-slate-800 whitespace-nowrap">
              High Performing Machines
            </h1>
          </div>
          <p className='text-md sm:text-md text-gray-700 text-justify mt-2'>
            The largest and highest technological range of systems of the cutting room. Choosing Morgan Tecnica machinery you will be able to rely on absolute performances of: quality, versatility, reliability and energy saving. The machines are designed to never stop and to follow you wherever your production ambition will lead you. Morgan Tecnica machinery are installed in some of the most important textile companies and most prestigious Italian and international Fashion Houses.The largest and highest technological range of systems of the.
          </p>
        </div>
        <div className='h-full w-1/2'>
          <img src={rexMachine} alt="err" className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default ProductSection
