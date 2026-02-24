import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <>
     <nav className='bg-black m-3 rounded-[50px] sticky top-0 z-10'>
    <div className='flex justify-between'>
        <div className=' text-4xl p-3 text-white text-bold ml-50 font-bold'>
         <i class="fa-solid fa-shield-halved"></i>Ducati
        </div>
        <div className='flex list-none gap-12 items-center mr-25 text-xl text-white font-semibold'>
            <Link to="/home"><li className='hover:animate-pulse'>Home</li></Link>
            <Link to="/about"><li className='hover:animate-pulse'>About</li></Link>
            <Link to="/connect"><li className='hover:animate-pulse'>Contact</li></Link>
            <Link to="/product"><li className='hover:animate-pulse'>Product</li></Link>
            
            
            <Link to="/signup"><button className='bg-white text-black p-2 rounded-[50px] w-25 hover:bg-black hover:text-white'>Sign up</button></Link>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Header