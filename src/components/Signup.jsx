import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import Login from './Login.jsx';

export const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    e.preventDefault()
    let user = {name, email, password, username}
    console.log(user);
  }

  
  return (
    <>
    <div className='flex justify-center mt-20' >
  <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
    
    <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
    
    <form className="space-y-4" onSubmit={handleChange}>
      
      
      <div>
        <label className="block text-gray-700 mb-1">Full Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name"/>
      </div>

      
      <div>
        <label className="block text-gray-700 mb-1">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email"/>
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email"/>
      </div>

      
      <div>
        <label className="block text-gray-700 mb-1">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password"/>
      </div>

      
      <div>
        <label className="block text-gray-700 mb-1">Confirm Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Confirm your password"/>
      </div>

      
      <button className="w-full bg-red-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-300">
        Sign Up
      </button>

    </form>

    <p className="text-center text-gray-600 mt-4">
      Already have an account?
      <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
    </p>


  </div>
  </div>
    </>
  )
}

export default Signup