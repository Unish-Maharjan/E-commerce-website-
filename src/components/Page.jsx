import React from 'react'

export const Page = () => {
  return (
    <>
     <div className="max-w-7xl mx-auto py-10 flex gap-10">

       
        <aside className="w-64 border-r border-gray-300 pr-6">
          <ul className="space-y-6 text-gray-700">
            <li className="flex justify-between items-center hover:text-black cursor-pointer font-semibold">
              Bikes <span>›</span>
            </li>
            <li className="flex justify-between items-center hover:text-black cursor-pointer font-semibold">
              Accessories <span>›</span>
            </li>
            <li className="flex justify-between items-center hover:text-black cursor-pointer font-semibold">
              Services <span>›</span>
            </li>
            <li className="hover:text-black cursor-pointer font-semibold ">Maintenance</li>
            <li className="hover:text-black cursor-pointer font-semibold">Ducati Club</li>
            <li className="hover:text-black cursor-pointer font-semibold">App</li>
            <li className="hover:text-black cursor-pointer font-semibold">Racing</li>
            <li className="hover:text-black cursor-pointer font-semibold">Cooperate</li>
          </ul>
        </aside>

        
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img  src="/ducati.png" className="w-full h-105 object-cover"/>

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

     

  <section className="max-w-7xl mx-auto py-16 px-6">
    
   
    <div className="flex items-center gap-3 mb-4">
      <div className="w-2 h-8 bg-red-500 rounded"></div>
      <p className="text-red-500 font-semibold">Our Products</p>
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

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/Cart.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">Gear set</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$100</span>
          <div className="flex text-yellow-400">
            ★★★☆☆
          </div>
          <span className="text-gray-500">(35)</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/Cart.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">Ducati hoodie</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$360</span>
          <div className="flex text-yellow-400">
            ★★★★☆
          </div>
          <span className="text-gray-500">(95)</span>
        </div>
      </div>

     
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/Cart.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">ASUS FHD Gaming Laptop</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$700</span>
          <div className="flex text-yellow-400">
            ★★★★★
          </div>
          <span className="text-gray-500">(325)</span>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <img src="/Cart.png" className="mx-auto mb-6" />
        <h3 className="text-lg font-medium mb-2">Rossi Tires Product Set</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-semibold">$500</span>
          <div className="flex text-yellow-400">
            ★★★★☆
          </div>
          <span className="text-gray-500">(145)</span>
        </div>
      </div>

    </div>
  </section>
    </>
  )
}

export default Page