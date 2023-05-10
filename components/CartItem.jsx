import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className='flex'>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
    </div>
  );
};

export default CartItem;
