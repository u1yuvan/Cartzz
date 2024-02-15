import React from 'react'

const Product = (props) => {
    const { pId, pName, pPrice, pImage } = props.data;
    return (
        <div className=' mt-28 rounded-[15px] w-[300px] h-[350px] mx-[100px] flex flex-col justify-center items-center cursor-pointer shadow-sm shadow-black p-5'>
            <img src= {pImage} width={400} className='hover:scale-105'/>
            <div className='bg-white mt-[15px] w-[200px]'>
                <p className=' text-center'>
                    <b> {pName} </b>
                </p>
                <p className=' text-center'> ₹{pPrice} <span></span></p>
         </div>
        </div>
    );
}


export default Product;