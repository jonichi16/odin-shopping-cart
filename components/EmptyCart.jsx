import React from 'react';
import ShopButton from './ShopButton';

const EmptyCart = () => {
  return (
    <main className='flex-1 flex flex-col justify-center items-center'>
      <h2 className='text-center'>Your cart is empty</h2>
      <ShopButton />
    </main>
  );
};

export default EmptyCart;
