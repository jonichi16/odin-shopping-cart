'use client';

import React from 'react';
import { useCart } from './CartProvider';

const AddToCartButton = ({ product }) => {
  const { setCart } = useCart();

  const handleClick = (e) => {
    e.preventDefault();

    setCart((prev) => [...prev, product]);
  };

  return (
    <button
      className='bg-blue-800 text-slate-50 py-1 px-5 uppercase font-bold text-sm rounded-full hover:opacity-90 active:scale-95'
      onClick={handleClick}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
