import {React, useState} from 'react'

export const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault()
    let user = {username,password}
    console.log(user);
  }

  
  return (
    <>
    <div className='flex justify-center mt-20' >
  <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
    
    <h2 className="text-3xl font-bold text-center mb-6">Log in</h2>
    
    <form className="space-y-4" onSubmit={handleChange}>



         <div>
        <label className="block text-gray-700 mb-1">Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email"/>
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password"/>
      </div>

      
      <button className="w-full bg-red-500 mt-4 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
        LogIN
      </button>

    </form>

  </div>
  </div>
    </>
  )
}

export default Login