import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-blue-800 shadow-md'>
      <div className='flex items-center text-slate-50 container w-11/12 mx-auto py-2 font-bold'>
        <div className='flex-1 font-serif uppercase text-2xl'>
          <Link href='/odin-shopping-cart'>Weapon Shop</Link>
        </div>
        <nav className='flex gap-x-2 uppercase | md:gap-x-5'>
          <Link href='/odin-shopping-cart'>Home</Link>
          <Link href='/shop'>Shop</Link>
          <Link href='/shop/checkout'>Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
