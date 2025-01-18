import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar = ({ scrollToSection }: NavbarProps) => {
  return (
    <nav className='bg-blue-600 p-4 flex justify-between items-center text-white'>
      <h1 className='text-2xl font-bold'>BrokeAF</h1>
      <div className='hidden md:flex md:items-center space-x-4'>
        <a
          className='hover:underline'
          onClick={() => scrollToSection('features')}>
          Features
        </a>
        <a
          className='hover:underline'
          onClick={() => scrollToSection('leaderboard')}>
          Leaderboard
        </a>
        <button
          className='bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300'
          onClick={() => scrollToSection('login')}>
          Start Losing Money
        </button>
      </div>
      <Menu as='div' className='relative md:hidden'>
        <MenuButton className='bg-yellow-400 text-black px-4 py-2 rounded'>
          Menu
        </MenuButton>
        <MenuItems className='absolute right-0 mt-2 w-40 bg-white shadow-lg rounded'>
          <MenuItem>
            {({ active }) => (
              <a
                href='#features'
                className={`block px-4 py-2 ${
                  active ? 'bg-gray-100' : ''
                } text-slate-600`}>
                Features
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href='#leaderboard'
                className={`block px-4 py-2 ${
                  active ? 'bg-gray-100' : ''
                } text-slate-600`}>
                Leaderboard
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                className={`block w-full text-left px-4 py-2 ${
                  active ? 'bg-gray-100' : ''
                } text-slate-600`}>
                Start Losing Money
              </button>
            )}
          </MenuItem>
        </MenuItems>
      </Menu>
    </nav>
  );
};

export default Navbar;
