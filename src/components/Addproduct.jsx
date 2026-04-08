import React, { useState } from 'react'

const Addproduct = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {

        let setProduct = {title, description, price, image};
        console.log (setProduct);
        props.addproduct(setProduct)
        e.preventDefault();
    }

  return (
    <>
    <div className='flex justify-center mt-20 w-full' >
   <div className="rounded-2xl p-8 w-full">
    
    <h2 className="text-3xl font-bold text-center mb-6">Add product</h2>
    
    <form className="space-y-4 w-full" onSubmit={handleSubmit}>
      
      
      <div>
        <label className="block text-gray-700 mb-1">Title Name</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name"/>
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter product description"/>
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Price</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your Price"/>
      </div>

      
      <div>
        <label className="block text-gray-700 mb-1">Image</label>
        <input type="url" value={image} onChange={(e) => setImage(e.target.value)}  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="enter your product url"/>
      </div>
 
      <button className="w-[50%] ml-75 bg-red-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-300">
        <strong>Submit</strong>
      </button>

    </form>

   


  </div>
  </div>
    </>
  )
}

export default Addproduct