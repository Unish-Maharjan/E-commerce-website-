import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer className='bg-[#111111] h-[30vh]'>
        
        <div className='flex justify-center pt-7 gap-6 text-2xl'>
            <a href='https://www.facebook.com/Unish.maharjn' className='bg-white p-1 rounded-[50px] hover:text-blue-600'><i class="fa-brands fa-facebook-f"></i></a>
            <a href='https://www.instagram.com/unish._.maharjan/' className='bg-white p-1 rounded-[50px] hover:text-blue-600'><i class="fa-brands fa-facebook-messenger"></i></a>
            <a href='https://www.instagram.com/unish._.maharjan/' className='bg-white p-1 rounded-[50px]  hover:text-pink-500'><i class="fa-brands fa-instagram"></i></a>
            <a href='#' className='bg-white p-1 rounded-[50px]  hover:text-blue-400'><i class="fa-brands fa-twitter"></i></a>
            <a href='https://github.com/Unish-Maharjan' className='bg-white p-1 rounded-[50px]  hover:text-purple-600'><i class="fa-brands fa-github"></i></a>
        </div>
        <div className='flex list-none text-white justify-center mt-7 gap-11.25 text-[17px]'>
            <li>Home</li>
            <li>News</li>
            <li>About</li>
            <li>Contact</li>
            <li>Our Team</li>
        </div>
        <div className='text-white flex justify-center mt-13 font-extralight'>
            Copyright 2022:Designed by Unish
        </div>
    </footer>
    </>
  )
}

export default Footer
