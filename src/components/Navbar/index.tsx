import { Menu } from '@headlessui/react';

const Navbar = () => {
  return (
    <nav className='bg-blue-600 p-4 flex justify-between items-center text-white'>
      <h1 className='text-2xl font-bold'>BrokeAF</h1>
      <div className='hidden md:flex space-x-4'>
        <a href='#features' className='hover:underline'>
          Features
        </a>
        <a href='#leaderboard' className='hover:underline'>
          Leaderboard
        </a>
        <button className='bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300'>
          Start Losing Money
        </button>
      </div>
      <Menu as='div' className='relative md:hidden'>
        <Menu.Button className='bg-yellow-400 text-black px-4 py-2 rounded'>
          Menu
        </Menu.Button>
        <Menu.Items className='absolute right-0 mt-2 w-40 bg-white shadow-lg rounded'>
          <Menu.Item>
            {({ active }) => (
              <a
                href='#features'
                className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''}`}>
                Features
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href='#leaderboard'
                className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''}`}>
                Leaderboard
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`block w-full text-left px-4 py-2 ${
                  active ? 'bg-gray-100' : ''
                }`}>
                Start Losing Money
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </nav>
  );
};

export default Navbar;
