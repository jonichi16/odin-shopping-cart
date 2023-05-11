'use client';

import React from 'react';
import { priceFormatter } from '@/utils/price';

const CartItem = ({ item }) => {
  return (
    <div className='flex justify-between'>
      <h3>{item.name}</h3>
      <p className='text-red-800'>{priceFormatter(item.price * item.qty)}</p>
    </div>
  );
};

export default CartItem;
