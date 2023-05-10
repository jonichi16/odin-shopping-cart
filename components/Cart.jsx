'use client';

import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import LoadingPage from '@/app/loading';
import EmptyCart from '@/components/EmptyCart';
import { getTotal } from '@/utils/total';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch('http://localhost:3000/api/cart');
      const data = await response.json();
      setCart(data);
      setIsLoading(false);
    };

    fetchCart();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  } else if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <ul>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              <CartItem item={item} />
            </li>
          );
        })}
      </ul>
      <p>Total: {getTotal(cart)}</p>
    </>
  );
};

export default Cart;
