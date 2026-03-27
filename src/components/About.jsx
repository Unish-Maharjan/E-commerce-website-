import React from 'react'

export const About = () => {
  return (
    <>
    <div className=" py-5 px-6">
      
      <div className="max-w-6xl mx-auto">
        
       
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad totam cum nemo vero! Rerum esse, veniam repudiandae 
          </p>
        </div>

       
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
        
          <div>
            <img src="/atasuki.webp" alt="Team" className="rounded-2xl shadow-lg" />
          </div>

          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex culpa molestias dolor. Perspiciatis neque quo veniam ex labore dolor, fugi
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, provident asperiores iusto, officiis voluptatibus beatae eaque molestias quam voluptates similique 
            </p>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-black">50+</h3>
            <p className="text-gray-600 mt-2">Projects</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-black">20+</h3>
            <p className="text-gray-600 mt-2">Clients</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-black">5+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-black">100%</h3>
            <p className="text-gray-600 mt-2">Satisfaction</p>
          </div>

        </div>

      </div>

{/* founder section */}

      <div className='grid grid-cols-3 gap-10 px-30 mt-20'>

  
  <div className='flex flex-col items-center text-center'>
    <div className='w-72 h-80 overflow-hidden rounded-xl shadow-md'>
      <img src='/unish.jpg' className='w-full h-full object-cover object-top hover:scale-105 transition duration-300'/>
    </div>
    <p className='text-2xl font-semibold mt-4'>Unish Maharjan</p>
    <p className='text-gray-500 text-sm'>Founder & Chairman</p>
    <div className='flex gap-3 mt-2 text-gray-600'>
      <i className="fa-brands fa-instagram hover:text-pink-500 cursor-pointer transition"></i>
      <i className="fa-brands fa-twitter hover:text-blue-400 cursor-pointer transition"></i>
      <i className="fa-brands fa-linkedin-in hover:text-blue-600 cursor-pointer transition"></i>
    </div>
  </div>

  
  <div className='flex flex-col items-center text-center'>
    <div className='w-72 h-80 overflow-hidden rounded-xl shadow-md'>
      <img src='/ken.jpg' className='w-full h-full object-cover object-top hover:scale-105 transition duration-300'/>
    </div>
    <p className='text-2xl font-semibold mt-4'>Ken Maharjan</p>
    <p className='text-gray-500 text-sm'>Janitor</p>
    <div className='flex gap-3 mt-2 text-gray-600'>
      <i className="fa-brands fa-instagram hover:text-pink-500 cursor-pointer transition"></i>
      <i className="fa-brands fa-twitter hover:text-blue-400 cursor-pointer transition"></i>
      <i className="fa-brands fa-linkedin-in hover:text-blue-600 cursor-pointer transition"></i>
    </div>
  </div>

  
  <div className='flex flex-col items-center text-center'>
    <div className='w-72 h-80 overflow-hidden rounded-xl shadow-md'>
      <img src='/onil.jpg' className='w-full h-full object-cover object-top hover:scale-105 transition duration-300'/>
    </div>
    <p className='text-2xl font-semibold mt-4'>Onil Maharjan</p>
    <p className='text-gray-500 text-sm'>Khai k position ho</p>
    <div className='flex gap-3 mt-2 text-gray-600'>
      <i className="fa-brands fa-instagram hover:text-pink-500 cursor-pointer transition"></i>
      <i className="fa-brands fa-twitter hover:text-blue-400 cursor-pointer transition"></i>
      <i className="fa-brands fa-linkedin-in hover:text-blue-600 cursor-pointer transition"></i>
    </div>
  </div>

</div>

    
    </div>
    </>
  )
}

export default About