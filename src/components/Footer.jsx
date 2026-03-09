import React from 'react'

export const Footer = () => {
  return (
    <>
  <footer class="bg-black text-gray-300 pt-16 pb-6 mt-20">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-5 gap-10">

   
    <div>
      <h2 class="text-white text-xl font-semibold mb-4">Exclusive</h2>
      <p class="text-white mb-2">Subscribe</p>
      <p class="text-sm mb-4">Get 10% off your first order</p>

      <div class="flex border border-gray-500 rounded">
        <input 
          type="email"
          placeholder="Enter your email"
          class="bg-transparent px-3 py-2 outline-none w-full text-sm"
        />
        <button class="px-3 text-white">➤</button>
      </div>
    </div>

   
    <div>
      <h2 class="text-white text-lg font-semibold mb-4">Support</h2>
      <p class="text-sm mb-2">
        Kathmandu, Nepal.
      </p>
      <p class="text-sm mb-2">uniqueunish93@gmail.com</p>
      <p class="text-sm">+977 9841-399247</p>
    </div>

    
    <div>
      <h2 class="text-white text-lg font-semibold mb-4">Account</h2>
      <ul class="space-y-2 text-sm">
        <li>My Account</li>
        <li>Login / Register</li>
        <li>Cart</li>
        <li>Wishlist</li>
        <li>Shop</li>
      </ul>
    </div>

    
    <div>
      <h2 class="text-white text-lg font-semibold mb-4">Quick Link</h2>
      <ul class="space-y-2 text-sm">
        <li>Privacy Policy</li>
        <li>Terms Of Use</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
    </div>

    
    <div>
      <h2 class="text-white text-lg font-semibold mb-4">Download App</h2>
      <p class="text-sm mb-4">Save $3 with App New User Only</p>

      <div class="flex gap-3 mb-4">
        <img src="/Footer/Qr Code.png" alt="QR" class="w-16 h-16"/>

        <div class="flex flex-col gap-2">
          <img src="/Footer/playstore.png" class="w-28"/>
          <img src="/Footer/applestore.png" class="w-28"/>
        </div>
      </div>

      <div class="flex gap-4 text-xl">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin"></i>
      </div>
    </div>

  </div>

  
  <div class="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
    © Copyright Unish 2026. All right reserved
  </div>
</footer>
    </>
  )
}

export default Footer
