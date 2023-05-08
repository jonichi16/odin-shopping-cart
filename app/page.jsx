import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className='flex-1 flex flex-col gap-y-3 justify-center items-center text-slate-950'>
      <h1 className='font-bold text-xl | md:text-3xl'>
        Welcome to Weapon Shop
      </h1>
      <p className='text-center | md:text-xl'>
        Arm Yourself for Battle:
        <span className='block'>Enter the Weapon Shop</span>
      </p>
      <Link
        href='/shop'
        className='bg-blue-800 text-slate-50 py-2 px-4 uppercase font-bold rounded hover:opacity-90'
      >
        Shop Now
      </Link>
    </main>
  );
};

export default HomePage;
