import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { forwardRef } from 'react';

const LeaderboardTeaser = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <section ref={ref} id='leaderboard' className='py-10 bg-blue-50'>
      <h2 className='text-3xl font-bold text-center mb-6'>
        Can You Beat These Legends?
      </h2>
      <div className='text-center'>
        <p>John: +$1,000,000</p>
        <p>Emily: Bankrupted 7 times</p>
        <p>Mike: +$500,000 (But he cheated)</p>
        <Popover className='relative'>
          <PopoverButton className='mt-4 bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-300'>
            Join the Madness
          </PopoverButton>
          <PopoverPanel className='absolute z-10 mt-2 w-64 bg-white shadow-lg p-4 rounded'>
            <p className='text-sm text-gray-600'>
              Joining the madness is easy. Just click the button and start
              losing fake money!
            </p>
          </PopoverPanel>
        </Popover>
      </div>
    </section>
  );
});

export default LeaderboardTeaser;
