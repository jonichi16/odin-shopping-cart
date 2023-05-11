import React from 'react';
import ShopButton from './ShopButton';

const EmptyCart = () => {
  return (
    <div className='flex-1 flex flex-col justify-center items-center gap-y-5'>
      <h2 className='text-center font-bold text-slate-500'>
        Your cart is empty
      </h2>
      <ShopButton />
    </div>
  );
};

export default EmptyCart;
