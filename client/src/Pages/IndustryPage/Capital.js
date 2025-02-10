import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Capital() {
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
      className='max-w-[85rem] mx-4 md:mx-auto space-y-4 md:space-y-0 flex items-center flex-wrap md:flex-nowrap justify-between md:space-x-4'
    >
      <div className="flex flex-col space-y-4 items-center p-6 w-full border border-t-4 border-greenPrimary hover:shadow-2xl transition-shadow duration-300">
        <p className='text-xl font-semibold'>Investment Required</p>
        <h1 className='text-greenPrimary text-2xl font-semibold'>
          PKR{' '}
          <span className='text-4xl md:text-8xl font-bold'>
            {startCount ? <CountUp start={0} end={250} duration={2.5} /> : '0'}
          </span>
          /million
        </h1>
      </div>
      <div className="flex flex-col space-y-4 items-center p-6 w-full border border-t-4 border-mainYellow hover:shadow-2xl transition-shadow duration-300">
        <p className='text-xl font-semibold'>Market Potential</p>
        <h1 className='text-orangeSecondary text-4xl md:text-8xl font-bold'>
          {startCount ? (
            <>
              <CountUp start={0} end={45} duration={1.5} /> -{' '}
              <CountUp start={0} end={60} duration={1.5} />%
            </>
          ) : '45 - 60%'}
        </h1>
      </div>
    </div>
  );
}

export default Capital;
