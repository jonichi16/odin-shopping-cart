'use client';

import React from 'react';
import { useCart } from './CartProvider';
import CartItem from './CartItem';
import EmptyCart from '@/components/EmptyCart';
import { getTotal } from '@/utils/price';

const Cart = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className='bg-blue-800 bg-opacity-20 w-full border-2 border-blue-800 rounded-md py-4 px-2'>
      <ul>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              <CartItem item={item} />
            </li>
          );
        })}
      </ul>
      <p className='text-end uppercase font-bold border-t-2 border-slate-900 pt-2'>
        Total: <span className='text-red-800 ml-3'>{getTotal(cart)}</span>
      </p>
    </div>
  );
};

export default Cart;
