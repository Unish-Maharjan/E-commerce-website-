import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'



export const Page = () => {
  
  return (
    <>


  {/* Top Section */}

    <div className="max-w-7xl mx-auto py-10 flex gap-10">

       
        <aside className="w-64 border-r border-gray-300 pr-6">
          <ul className="space-y-4 text-gray-700">
            <Link to="/womenfashion" className="flex justify-between items-center hover:text-black cursor-pointer font-semibold">
              Woman's Fashion <span className='text-xl'>›</span>
            </Link>
            <Link to="/menfashion" className="flex justify-between items-center hover:text-black cursor-pointer font-semibold">
              Men's Fashion <span className='text-xl'>›</span>
            </Link>
            <Link to="/electronics" className="flex justify-between items-center hover:text-black cursor-pointer font-semibold">
              Electronics <span className='text-xl'>›</span>
            </Link>
            <Link to="/womenfashion" className="flex justify-between items-center hover:text-black cursor-pointer font-semibold">
              Home & Lifestyle <span className='text-xl'>›</span>
            </Link>
            <Link to="/womenfashion" className="flex justify-between items-center hover:text-black cursor-pointer font-semibold">
              Medicine <span className='text-xl'>›</span>
            </Link>
            <Link to="/womenfashion" className="flex justify-between items-center hover:text-black cursor-pointer font-semibold">
              Sports & Outdoor <span className='text-xl'>›</span>
            </Link>
            <Link to="/womenfashion" className="flex justify-between items-center hover:text-black cursor-pointer font-semibold">
              Baby's & Toys <span className='text-xl'>›</span>
            </Link>
            <Link to="/womenfashion" className="flex justify-between items-center hover:text-black cursor-pointer font-semibold">
              Groceries & Pets <span className='text-xl'>›</span>
            </Link>
  
          </ul>
        </aside>

        
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img  src="/iphone.png" className="w-full h-105 object-cover"/>

          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col justify-center pl-16 text-white">
            <h1 className="text-5xl font-semibold mb-6">
              Up to 10% <br /> off Voucher
            </h1>

            <a
              href="#"
              className="flex items-center gap-2 text-lg underline hover:text-gray-300 transition"
            >
              Shop Now →
            </a>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          </div>
        </div>
    </div>



  {/* Flash Sales */}

    <div className='ml-30 mt-15'>
      <div className="flex items-center gap-3 mb-4">
      <div className="w-4 h-8 bg-red-500 rounded"></div>
      <p className="text-red-500 font-semibold text-[20px]">Today's</p>
      </div>
      <div className='flex items-center gap-20'>
      <div>
        <p className='text-4xl font-bold'>Flash Sales</p>
      </div>
      <div>
      <div className='grid grid-cols-4 list-none w-100 font-medium text-[13px]'>
        <li>Days</li>
        <li>Hours</li>
        <li>Minutes</li>
        <li>Seconds</li>
      </div>
      <div className='grid grid-cols-4 list-none w-100 font-medium text-4xl mt-1'>
        <li className='flex items-center'>03 <i class="fa-solid fa-ellipsis-vertical text-3xl text-red-500"></i> </li>
        <li className='flex items-center'>22 <i class="fa-solid fa-ellipsis-vertical text-3xl  text-red-500"></i> </li>
        <li className='flex items-center'>16 <i class="fa-solid fa-ellipsis-vertical text-3xl  text-red-500"></i> </li>
        <li className='flex items-center'>07</li>
      
      </div>
      </div>
      </div>
      
      <div className='grid grid-cols-5 gap-5 mt-3'>
   
    
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/Flash Sales/joystick.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">Joystick</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$30</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(100)</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/Flash Sales/keyboard.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">Ak-900 Wired Keyboard</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$200</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(125)</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/Flash Sales/monitor.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">Gaming Monitor</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$5450</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(1543)</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/Flash Sales/chair.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">S-series Comfort Chair</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$130</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(1346)</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/Cart.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">Asus TUF f15</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$1000</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(159)</span>
        </div>
      </div>
      </div>

      <div className='text-center mt-12'>
        <button className='bg-red-500 text-white w-60 h-10 rounded-[5px]'>View All Products</button>
      </div>

      <hr className='mt-20 w-325 text-gray-300 '></hr>
    </div>

  {/* Browse By Catgory */}

  <div className='ml-30 mt-15 mr-30'>
      <div className="flex items-center gap-3 mb-4">
      <div className="w-4 h-8 bg-red-500 rounded"></div>
      <p className="text-red-500 font-semibold text-[20px]">Categories</p>
      </div>
     <div className="flex justify-between items-center mb-12">
      <h2 className="text-4xl font-bold">Browse By Category</h2>
      <div className="flex gap-4">
        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
          ←
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
          →
        </button>
      </div>
    </div>

    <div className='grid grid-cols-6 list-none ml-20 text-6xl text-gray-400'>

      <li className='border w-40 text-center h-30 hover:bg-red-500 hover:text-white'><i class="fa-solid fa-mobile-button mt-3"></i><p className='text-[20px] font-medium mt-3'>Mobile</p></li>
      <li className='border w-40 text-center h-30 hover:bg-red-500 hover:text-white'><i class="fa-solid fa-desktop mt-3"></i> <p className='text-[20px]  font-medium mt-3'>Computer</p></li>
      <li className='border w-40 text-center h-30 hover:bg-red-500 hover:text-white'><i class="fa-solid fa-car-rear mt-3"></i><p className='text-[20px]  font-medium mt-3'>Car</p></li>
      <li className='border w-40 text-center h-30 hover:bg-red-500 hover:text-white'><i class="fa-solid fa-headphones mt-3"></i><p className='text-[20px]  font-medium mt-3'>Headphone</p></li>
      <li className='border w-40 text-center h-30 hover:bg-red-500 hover:text-white'><i class="fa-solid fa-gamepad mt-3"></i><p className='text-[20px]  font-medium mt-3'>Gaming</p></li>
      <li className='border w-40 text-center h-30 hover:bg-red-500 hover:text-white'><i class="fa-solid fa-camera mt-3"></i><p className='text-[20px]  font-medium mt-3'>Camera</p></li>
      
    </div>
    <hr className='mt-20 w-325 text-gray-300 '></hr>
  </div>


  {/* Best selling */}

    <div className='ml-30 mt-15 mr-30'>
      <div className="flex items-center gap-3 mb-4">
      <div className="w-4 h-8 bg-red-500 rounded"></div>
      <p className="text-red-500 font-semibold text-[20px]">This Month</p>
      </div>

      <div className="flex justify-between items-center mb-12">
      <h2 className="text-4xl font-bold">Best Selling</h2>
      <div className="flex gap-4">
       <button className='bg-red-500 w-30 text-white h-10 rounded-[5px]'>View All</button>
      </div>
      </div>


       <div className='grid grid-cols-4 gap-5 mt-3'>

    

      <div className="bg-white  rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/bestseller/gucci.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2 ml-5">Gucci Bag</h3>
        <div className="flex items-center gap-3 m-5 text-[18px]">
          <span className="text-red-500 font-semibold">$10233</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(123123)</span>
        </div>
      </div>

      <div className="bg-white  rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/bestseller/cpucooler.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2 ml-5">RGB CPU cooler</h3>
        <div className="flex items-center gap-3 m-5 text-[18px]">
          <span className="text-red-500 font-semibold">$30</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(1123)</span>
        </div>
      </div>

      <div className="bg-white  rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/bestseller/bookself.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2 ml-5">Limited Small Book-Self</h3>
        <div className="flex items-center gap-3 m-5 text-[18px]">
          <span className="text-red-500 font-semibold">$1200</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(1220)</span>
        </div>
      </div>

      <div className="bg-white  rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/bestseller/jacket.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2 ml-5">Trekking Jacker</h3>
        <div className="flex items-center gap-3 m-5 text-[18px]">
          <span className="text-red-500 font-semibold">$300</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(12344)</span>
        </div>
      </div>

      

     
      
      </div>
      <hr className='mt-20 w-325 text-gray-300 '></hr>
    </div>



  {/* enhance your music experience */}
    
    <div className='ml-30 mt-15 mr-30 bg-[url("/musicEXP.png")] h-135 '>
    
    <div className='w-[50%] p-15 pt-20'>
      <p className='text-green-400 font-medium text-2xl'>Categories</p>
      <p className='text-white font-bold text-6xl mt-8'>Enhance Your</p>
      <p className='text-white font-bold text-6xl mt-1.5'>Music Experience</p>

      <div className='grid grid-cols-4 list-none w-100 mt-14'>

        <div className='bg-white h-17 w-17 rounded-[50%] text-center font-medium pt-1'>
          <li className='text-xl font-bold'>23</li>
          <li>Hours</li>
        </div>
        <div className='bg-white h-17 w-17 rounded-[50%] text-center font-medium  pt-1'>
          <li className='text-xl font-bold'>05</li>
          <li>Days</li>
        </div>
        <div className='bg-white h-17 w-17 rounded-[50%] text-center font-medium  pt-1'>
          <li className='text-xl font-bold'>59</li>
          <li>Mins</li>
        </div>
        <div className='bg-white h-17 w-17 rounded-[50%] text-center font-medium  pt-1'>
          <li className='text-xl font-bold'>35</li>
          <li>Sec</li>
        </div>

      </div>

      <button className='bg-green-500 text-white mt-10 w-40 h-11 rounded-[5px] font-medium'>Buy Now</button>
    </div>

    </div>
  


  {/* Exlpore Product */}

    
    
   <div className='ml-30 mt-25 mr-30'>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-4 h-8 bg-red-500 rounded"></div>
      <p className="text-red-500 font-semibold text-[20px]">Our Products</p>
    </div>

    <div className="flex justify-between items-center mb-12">
      <h2 className="text-4xl font-bold">Explore Our Products</h2>
      <div className="flex gap-4">
        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
          ←
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
          →
        </button>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-10">
      
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/explore products/petfood.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">Breed Dry dog food</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$100</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(35)</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/explore products/camera.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">Canon Camera</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$360</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(335)</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/Cart.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">Asus FHD Gaming Laptop</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$700</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(223)</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/explore products/curology.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">Curology Product Set</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$500</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(143)</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/explore products/toycar.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">Kids Electric Car</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$960</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(65)</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/explore products/boots.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">KK boots</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$124</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(655)</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/explore products/joystick.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">RCG joystick</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$1240</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(124)</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/explore products/jacket.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">Jacket</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$660</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(1243)</span>
        </div>
      </div>
     
    </div>

    </div>
   
    </>
  )
}

export default Page