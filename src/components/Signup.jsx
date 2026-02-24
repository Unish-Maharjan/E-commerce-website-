import React from 'react'

export const Signup = () => {
  return (
    <>
    <div className='flex justify-center' >
  <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
    
    <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
    
    <form className="space-y-4">
      
      
      <div>
        <label className="block text-gray-700 mb-1">Full Name</label>
        <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name"/>
      </div>

      
      <div>
        <label className="block text-gray-700 mb-1">Email</label>
        <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email"/>
      </div>

      
      <div>
        <label className="block text-gray-700 mb-1">Password</label>
        <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password"/>
      </div>

      
      <div>
        <label className="block text-gray-700 mb-1">Confirm Password</label>
        <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Confirm your password"/>
      </div>

      
      <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
        Sign Up
      </button>

    </form>

    <p className="text-center text-gray-600 mt-4">
      Already have an account?
      <a href="#" className="text-blue-600 hover:underline">Login</a>
    </p>

  </div>
  </div>
    </>
  )
}

export default Signup