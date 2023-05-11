import React from 'react';
import Cart from '@/components/Cart';

const CheckoutPage = () => {
  return (
    <main className='container w-11/12 mx-auto flex-1 flex flex-col items-center py-6 gap-3 | sm:w-6/12 sm:gap-5'>
      <h2 className='font-bold text-lg uppercase'>Checkout:</h2>
      <Cart />
    </main>
  );
};

export default CheckoutPage;
