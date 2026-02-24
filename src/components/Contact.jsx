import React from 'react'

export const Contact = () => {
  return (
    <>
     <div className='flex justify-center'>
    <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden mb-5">
    
    
    <div className="bg-black text-white p-8 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-6 text-blue-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor doloribus voluptas at! Perferendis, nihil nesciunt. Error recusandae quas 
      </p>

      <div className="space-y-3">
        <p>Kathmandu, Nepal</p>
        <p>uniqueunish93@email.com</p>
        <p> +977 9841399247</p>
      </div>
    </div>

    
    <div className="p-8">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Form</h3>

      <form className="space-y-4">
        
        
        <div>
          <label className="block text-gray-700 mb-1">Full Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500" placeholder="Enter your name"/>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500" placeholder="Enter your email"/>
        </div>

       
        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500"
            placeholder="Write your message"></textarea>
        </div>

       
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Send Message
        </button>

      </form>
    </div>

  </div>
  </div>
  </>
  )
}

export default Contact