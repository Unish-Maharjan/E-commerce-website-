import React from 'react'

export const Contact = () => {
  return (
  <>
  <div class=" min-h-screen py-16 px-6">


  <div class="max-w-6xl mx-auto mb-10 text-gray-500">
    Home / <span class="text-black">Contact</span>
  </div>

  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

   
    <div class="bg-white p-8 shadow rounded-lg space-y-8">

     
      <div>
        <div class="flex items-center gap-3 mb-3">
          <div class="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
            <i class="fa-solid fa-phone"></i>
          </div>
          <h3 class="font-semibold">Call To Us</h3>
        </div>

        <p class="text-gray-500 text-sm">
          We are available 24/7, 7 days a week.
        </p>

        <p class="text-sm mt-2">
          Phone: +977 9841399247
        </p>
      </div>

      <hr/>

      
      <div>
        <div class="flex items-center gap-3 mb-3">
          <div class="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <h3 class="font-semibold">Write To Us</h3>
        </div>

        <p class="text-gray-500 text-sm">
          Fill out our form and we will contact you within 24 hours.
        </p>

        <p class="text-sm mt-2">Emails: customer@exclusive.com</p>
        <p class="text-sm">Emails: uniqueunish@exclusive.com</p>
      </div>

    </div>


   
    <div class="bg-white p-8 shadow rounded-lg md:col-span-2">

      <form class="space-y-6"/>

      
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Your Name *"
            class="bg-gray-100 p-3 rounded outline-none mt-2"
          />

          <input
            type="email"
            placeholder="Your Email *"
            class="bg-gray-100 p-3 rounded outline-none"
          />

          <input
            type="text"
            placeholder="Your Phone *"
            class="bg-gray-100 p-3 rounded outline-none"
          />

        </div>

        
        <textarea
          rows="6"
          placeholder="Your Message"
          class="w-full bg-gray-100 p-4 rounded outline-none mt-5"
        ></textarea>

        
        <div class="flex justify-end mt-4">
          <button
            class="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </div>

      

    </div>

  </div>

</div>
  </>
  )
}

export default Contact