import React from 'react'
import Form from './Form.jsx'

export const Contact = () => {
  return (
  <>
  <div className=" min-h-screen py-16 px-6">


  <div className="max-w-6xl mx-auto mb-10 text-gray-500">
    Home / <span className="text-black">Contact</span>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

   
    <div className="bg-white p-8 shadow rounded-lg space-y-8">

     
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
            <i className="fa-solid fa-phone"></i>
          </div>
          <h3 className="font-semibold">Call To Us</h3>
        </div>

        <p className="text-gray-500 text-sm">
          We are available 24/7, 7 days a week.
        </p>

        <p className="text-sm mt-2">
          Phone: +977 9841399247
        </p>
      </div>

      <hr/>

      
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <h3 className="font-semibold">Write To Us</h3>
        </div>

        <p className="text-gray-500 text-sm">
          Fill out our form and we will contact you within 24 hours.
        </p>

        <p className="text-sm mt-2">Emails: customer@exclusive.com</p>
        <p className="text-sm">Emails: uniqueunish@exclusive.com</p>
      </div>

    </div>


   
    <div className="bg-white p-8 shadow rounded-lg md:col-span-2">

    

      <Form/>

    </div>

  </div>

</div>

  </>

  )
}

export default Contact