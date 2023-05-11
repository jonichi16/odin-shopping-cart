import React from 'react';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';

const Card = ({ product }) => {
  return (
    <div className='bg-slate-50 w-fit rounded-md shadow'>
      <Image
        priority
        src={product.image.src}
        width={250}
        height={250}
        alt={product.name}
        className='p-3'
      />
      <div className='border-t-2 px-3 py-5'>
        <h2 className='text-lg font-bold pb-2'>{product.name}</h2>
        <div className='flex items-center'>
          <p className='text-red-500 text-sm font-bold flex-1'>
            {product.price} Gil
          </p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default Card;
