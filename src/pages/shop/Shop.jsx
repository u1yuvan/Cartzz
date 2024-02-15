import React from 'react';
import products from '../../products';
import Product from './product';

const shop = () => {
  return (
    <div className=''>
      <div className=' items-center text-[40px]'>
        <h1> Cartzz </h1>
      </div>
      <div className='w-[100%] h-auto grid grid-cols-4 place-items-center '>
        {" "}
            {products.map((product) => 
            <Product  data={product}/>)}
      </div>
    </div>
  )
}

export default shop;