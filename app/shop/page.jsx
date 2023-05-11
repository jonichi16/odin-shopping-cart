import React, { use } from 'react';
import Card from '@/components/Card';
import Products from '../../data/data';

const ShopPage = () => {
  return (
    <main className='flex-1'>
      <div className='container w-fit mx-auto py-5'>
        <h1 className='font-bold uppercase text-xl text-center'>Equipments</h1>
        <ul className='grid grid-cols-1 gap-3 py-3 justify-items-center | sm:grid-cols-2 sm:gap-5'>
          {Products.map((product) => {
            return (
              <li key={product.id}>
                <Card product={product} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default ShopPage;
