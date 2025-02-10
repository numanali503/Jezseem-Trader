import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Stats() {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is in view
    triggerOnce: true, // Trigger only once
    onChange: (inView) => {
      if (inView) setStartCount(true);
    },
  });

  return (
    <div
      ref={ref}
      className='px-4 sm:px-8 md:px-16 lg:px-32 w-full bg-mainBlue py-8 md:h-72 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'
    >
      <div className='text-center'>
        <i className="fa-sharp-duotone fa-regular fa-earth-americas text-5xl p-4 bg-orange-400 rounded-full mb-8"></i>
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200'>
          {startCount ? <CountUp start={0} end={656} duration={2.5} suffix="+" /> : '0+'}
        </h1>
        <p className='text-sm sm:text-md font-semibold text-gray-200 mt-2'>World largest manufacturer</p>
      </div>

      <div className='text-center'>
        <i className="fa-duotone fa-light fa-chair-office text-5xl p-4 bg-orange-400 rounded-full mb-8"></i>
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200'>
          {startCount ? <CountUp start={0} end={656} duration={2.5} suffix="+" /> : '0+'}
        </h1>
        <p className='text-sm sm:text-md font-semibold text-gray-200 mt-2'>World wide Offices</p>
      </div>

      <div className='text-center'>
        <i className="fa-duotone fa-light fa-face-smile text-5xl p-4 bg-orange-400 rounded-full mb-8"></i>
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200'>
          {startCount ? <CountUp start={0} end={656} duration={2.5} suffix="+" /> : '0+'}
        </h1>
        <p className='text-sm sm:text-md font-semibold text-gray-200 mt-2'>Satisfied Customers</p>
      </div>

      <div className='text-center'>
        <i className="fa-sharp-duotone fa-light fa-bolt text-5xl p-4 bg-orange-400 rounded-full mb-8"></i>
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200'>
          {startCount ? <CountUp start={0} end={656} duration={2.5} suffix="+" /> : '0+'}
        </h1>
        <p className='text-sm sm:text-md font-semibold text-gray-200 mt-2'>World largest manufacturer</p>
      </div>
    </div>
  );
}

export default Stats;
