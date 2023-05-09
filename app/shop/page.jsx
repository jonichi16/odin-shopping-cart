import React from 'react';
import Card from '@/components/Card';

async function fetchProducts() {
  const response = await fetch('http://localhost:3000/api/products', {
    next: {
      revalidate: 60,
    },
  });
  const products = await response.json();

  return products;
}

const ShopPage = async () => {
  const products = await fetchProducts();

  return (
    <main className='flex-1'>
      <div className='container w-fit mx-auto py-5'>
        <h1 className='font-bold uppercase text-xl text-center'>Equipments</h1>
        <ul className='grid grid-cols-1 gap-3 py-3 justify-items-center | sm:grid-cols-2 sm:gap-5'>
          {products.map((product) => {
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
