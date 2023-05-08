import React from 'react';
import Image from 'next/image';
import Products from '@/data/products';

const ShopPage = () => {
  return (
    <main className='flex-1'>
      <div className='container w-11/12 mx-auto py-5'>
        <h1 className='font-bold uppercase text-xl text-center'>Equipments</h1>
        <ul>
          {Products.map((product) => {
            return (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <Image
                  priority
                  src={product.image.src}
                  width={product.image.width}
                  height={product.image.height}
                  alt={product.name}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default ShopPage;
