import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <>
    <nav className=' sticky top-0 z-10'>
    <div className='flex justify-between h-20 bg-white items-center ml-26'>
        <div className=' text-3xl p-3  text-bold font-bold text-red-600'>
         UnishPasal
        </div>
        <div className='flex list-none gap-12 items-baseline-last mr-25 text-[16px] font-semibold h-full mb-10'>
            <Link to="/home"><li className='hover:animate-pulse'>Home</li></Link>
            <Link to="/about"><li className='hover:animate-pulse'>About</li></Link>
            <Link to="/connect"><li className='hover:animate-pulse'>Contact</li></Link>
            <Link to="/product"><li className='hover:animate-pulse'>Product</li></Link>
            <Link to="/signup"><li className='hover:animate-pulse'>Sign Up</li></Link>
        </div>
        <div className='flex mr-30 w-80 justify-center items-baseline-last gap-7 h-full mb-10 '>
          <input type='text' placeholder='Search?' className='bg-gray-200 w-60 h-8 p-4 outline-none rounded-[5px]'/>
          <i class="fa-regular fa-heart text-2xl"></i>
          <i class="fa-solid fa-cart-arrow-down text-2xl"></i>
        </div>
    </div>
    <hr className='text-gray-300'/>
    </nav>
    </>
  )
}

export default Header