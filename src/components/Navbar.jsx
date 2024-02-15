import { ShoppingCart } from 'phosphor-react';
import React from 'react';
import { Logo } from '../assets'
import {Link} from 'react-router-dom';
import { TypeAnimation} from 'react-type-animation'



const Navbar = () => {
  return (
    <div className='w-[100%] h-[80px] bg-[#0a192f] flex justify-between items-center fixed mb-28'>
      <img src={ Logo } width={70} className=' flex justify-start  rounded-full ml-5  shadow-md shadow-black'/>
      <TypeAnimation
              sequence={[
                'Welcome to',
                1000,
                'Cartzz',
                3000,
             
              ]}

              wrapper="span"
              speed={50}
              className=' text-white text-[32px] font-bold'
              style={{ display: 'inline-block' }}
              repeat={1} />

        <div className=' mr-[50px] flex justify-end  items-center'> 
            <Link to="/" className=' text-white text-[25px]  cursor-pointer '> Shop </Link>
            <Link to="/cart"> 
              <ShoppingCart size={32} className=' text-gray-300 ml-5 cursor-pointer '/>
            </Link>
       </div>
    </div>
  )
}

export default Navbar;