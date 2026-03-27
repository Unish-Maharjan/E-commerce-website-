import React from 'react'

const Wishlist = () => {
  return (
    <>
     <div className='ml-30 mt-15 mr-30'>
      
    
      <div className="flex justify-between items-center mb-12">
      <h2 className="text-xl font-medium">Wishlist(4)</h2>
      <div className="flex gap-4">
       <button className='bg-white w-40 text-black h-10 rounded-[5px] border border-gray-400'>Move all to bag</button>
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
        <div className='ml-30 mt-15 mr-30'>
      <div className="flex items-center gap-3 mb-4 justify-between">
        <div className='flex gap-2'>
      <div className="w-4 h-8 bg-red-500 rounded">
        
    </div>
    <p className="text-black font-semibold text-[20px]">Just for you</p>
    </div>
      
      <div className="flex gap-4">
       <button className='bg-white w-30 text-black h-10 rounded-[5px] border border-gray-400'>See All</button>
      </div>
      </div>

      


       <div className='grid grid-cols-4 gap-5 mt-10'>

    

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
        <img src="/explore products/toycar.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2 ml-5">Babal toycard</h3>
        <div className="flex items-center gap-3 m-5 text-[18px]">
          <span className="text-red-500 font-semibold">$30</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(1123)</span>
        </div>
      </div>

      <div className="bg-white  rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/explore products/curology.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2 ml-5">Shaving cream</h3>
        <div className="flex items-center gap-3 m-5 text-[18px]">
          <span className="text-red-500 font-semibold">$1200</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(1220)</span>
        </div>
      </div>

      <div className="bg-white  rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/explore products/joystick.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2 ml-5">Joystick</h3>
        <div className="flex items-center gap-3 m-5 text-[18px]">
          <span className="text-red-500 font-semibold">$300</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(12344)</span>
        </div>
      </div>

      

     
      
      </div>
      
    </div>

    </>
  )
}

export default Wishlist