'use client';

import React from 'react';
import { useCart } from './CartProvider';

const AddToCartButton = ({ product }) => {
  const { cart, setCart } = useCart();

  const handleClick = (e) => {
    e.preventDefault();

    const { id, name, price, image } = product;

    const index = cart.findIndex((item) => item.name === name);

    if (index !== -1) {
      const updatedItem = {
        ...cart[index],
        qty: cart[index].qty + 1,
      };
      const updatedCart = [...cart];
      updatedCart[index] = updatedItem;
      setCart(updatedCart);
    } else {
      const newItem = {
        id: Date.now(),
        itemId: id,
        name,
        price,
        image,
        qty: 1,
      };
      setCart((prev) => [...prev, newItem]);
    }
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
