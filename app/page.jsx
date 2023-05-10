import React from 'react';
import ShopButton from '@/components/ShopButton';

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
      <ShopButton />
    </main>
  );
};

export default HomePage;
