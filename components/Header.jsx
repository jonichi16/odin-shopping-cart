import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-blue-800 shadow-md'>
      <div className='flex items-center text-slate-50 container w-11/12 mx-auto py-2 font-bold'>
        <div className='flex-1 font-serif uppercase text-2xl'>
          <Link href='/'>Weapon Shop</Link>
        </div>
        <nav>
          <Link href='/'>Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
