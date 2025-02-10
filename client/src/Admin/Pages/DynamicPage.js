import React from 'react'

function DynamicPage() {
    return (
        <div className='p-12'>
            <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-8">
                <h1 className="text-2xl font-bold text-center text-mainBlue md:text-4xl md:whitespace-nowrap">
                    Dynamic Product & Service Content
                </h1>
                <div className="bg-gray-300 h-0.5 md:w-full w-0"></div>
            </div>
            <h1 className="text-md text-justify mt-4">
                What truly sets Jezseem Traderss apart is our customer-centric ethos.
            </h1>


            <div class="relative mt-8">
                <label for="" class="leading-7 text-sm text-gray-600">TextFiled</label>
                <input type="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

        </div>
    )
}

export default DynamicPage
