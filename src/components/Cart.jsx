import React from 'react'

const Cart = () => {
  return (
    <>
  <div class="px-10 py-5 flex items-center gap-2 text-sm text-gray-400">
    <a href="#" class="hover:text-gray-600 transition-colors">Home</a>
    <span>/</span>
    <span class="text-gray-700 font-medium">Cart</span>
  </div>

  <div class="px-10 pb-16">

   
    <div class="border border-gray-200 rounded overflow-hidden mb-7">

     
      <div class="grid grid-cols-4 px-6 py-4 border-b border-gray-200 text-sm font-medium text-gray-500">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

     
      <div class="grid grid-cols-4 items-center px-6 py-5 border-b border-gray-100">
       
        <div class="flex items-center gap-4">
          <div class="relative">
            <button class="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center hover:bg-red-600 transition-colors z-10">
              ×
            </button>
            <img src="/explore products/camera.png"
                 alt="LCD Monitor"
                 class="w-12 h-12 object-contain bg-gray-50 rounded p-1" />
          </div>
          <span class="text-sm text-gray-700">Camera</span>
        </div>
        <span class="text-sm text-gray-700">$650</span>
       
        <div class="flex items-center border border-gray-300 rounded w-18 h-9 overflow-hidden">
          <input type="text" value="01" readonly
                 class="w-10 text-center text-sm bg-transparent outline-none text-gray-700" />
          <div class="flex flex-col border-l border-gray-300 h-full">
            <button class="flex-1 px-1.5 text-[10px] text-gray-500 hover:bg-gray-100 transition-colors">▲</button>
            <button class="flex-1 px-1.5 text-[10px] text-gray-500 hover:bg-gray-100 transition-colors border-t border-gray-300">▼</button>
          </div>
        </div>
       
        <span class="text-sm font-medium text-gray-800">$650</span>
      </div>

    
      <div class="grid grid-cols-4 items-center px-6 py-5">
       
        <div class="flex items-center gap-4">
          <div class="relative">
            <button class="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center hover:bg-red-600 transition-colors z-10">
              ×
            </button>
            <img src="/explore products/joystick.png"
                 alt="H1 Gamepad"
                 class="w-12 h-12 object-contain bg-gray-50 rounded p-1" />
          </div>
          <span class="text-sm text-gray-700">H1 Gamepad</span>
        </div>
       
        <span class="text-sm text-gray-700">$550</span>
      
        <div class="flex items-center border border-gray-300 rounded w-18 h-9 overflow-hidden">
          <input type="text" value="02" readonly
                 class="w-10 text-center text-sm bg-transparent outline-none text-gray-700" />
          <div class="flex flex-col border-l border-gray-300 h-full">
            <button class="flex-1 px-1.5 text-[10px] text-gray-500 hover:bg-gray-100 transition-colors">▲</button>
            <button class="flex-1 px-1.5 text-[10px] text-gray-500 hover:bg-gray-100 transition-colors border-t border-gray-300">▼</button>
          </div>
        </div>
       
        <span class="text-sm font-medium text-gray-800">$1100</span>
      </div>

    </div>

    <div class="flex justify-between mb-10">
      <button class="px-6 py-2.5 border border-gray-800 rounded text-sm font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
        Return To Shop
      </button>
      <button class="px-6 py-2.5 border border-gray-800 rounded text-sm font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
        Update Cart
      </button>
    </div>

    <div class="grid grid-cols-2 gap-16 items-start">

      <div>
        <div class="flex gap-3">
          <input type="text" placeholder="Coupon Code"
                 class="flex-1 border border-gray-300 rounded px-4 py-2.5 text-sm outline-none focus:border-gray-500 text-gray-700 placeholder-gray-400" />
          <button class="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded transition-colors whitespace-nowrap">
            Apply Coupon
          </button>
        </div>
      </div>


      <div class="border border-gray-300 rounded p-7">
        <h2 class="text-lg font-semibold text-gray-800 mb-5">Cart Total</h2>

        <div class="flex justify-between py-3 border-b border-gray-200 text-sm text-gray-700">
          <span>Subtotal:</span>
          <span>$1750</span>
        </div>

        <div class="flex justify-between py-3 border-b border-gray-200 text-sm text-gray-700">
          <span>Shipping:</span>
          <span class="text-green-500 font-medium">Free</span>
        </div>

        <div class="flex justify-between py-3 text-sm font-semibold text-gray-800">
          <span>Total:</span>
          <span>$1750</span>
        </div>

        <button class="w-full mt-5 py-3.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded transition-colors">
          Proceed to checkout
        </button>
      </div>

    </div>
  </div>

    </>
  )
}

export default Cart