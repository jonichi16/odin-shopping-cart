import React from 'react';
import Link from 'next/link';

const ShopButton = () => {
  return (
    <Link
      href='/shop'
      className='bg-blue-800 text-slate-50 py-2 px-4 uppercase font-bold rounded hover:opacity-90'
    >
      Shop Now
    </Link>
  );
};

export default ShopButton;
