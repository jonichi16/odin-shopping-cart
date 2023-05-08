import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-blue-800 text-slate-50 text-sm'>
      <div className='text-center py-2'>
        <p className='inline-block'>Created by: </p>
        <a
          href='https://github.com/jonichi16/odin-shopping-cart'
          className='hover:font-bold hover:underline'
        >
          jonichi
        </a>
      </div>
    </footer>
  );
};

export default Footer;
