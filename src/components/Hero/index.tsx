import { Dialog } from '@headlessui/react';
import { useState } from 'react';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white'>
      <div className='max-w-2xl mx-auto'>
        <img
          src='/piggy.svg' // Replace with your actual logo path
          alt='Sad Piggy Bank Logo'
          className='w-32 h-32 mx-auto mb-6'
        />
        <h1 className='text-4xl font-extrabold mb-4'>
          Invest Like a Pro... Or a Clown, We Won’t Judge!
        </h1>
        <p className='text-lg mb-6'>
          Trade fake stocks, lose fake money, and stress less!
        </p>
        <div className='space-x-4'>
          <button
            className='bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-300'
            onClick={() => setIsOpen(true)}>
            Start Losing Fake Money
          </button>
          <button className='bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-200'>
            Watch the Chaos
          </button>
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='fixed inset-0 z-10'>
        <div className='flex items-center justify-center min-h-screen'>
          <Dialog.Panel className='bg-white p-6 rounded shadow-lg'>
            <Dialog.Title className='text-lg font-bold'>
              Get Started
            </Dialog.Title>
            <Dialog.Description className='mt-2 text-gray-500'>
              Ready to lose some fake money? Let&apos;s dive in!
            </Dialog.Description>
            <button
              className='mt-4 bg-red-500 text-white px-4 py-2 rounded'
              onClick={() => setIsOpen(false)}>
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default Hero;
