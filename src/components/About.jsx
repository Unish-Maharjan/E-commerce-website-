import React from 'react'

export const About = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen py-5 px-6">
      
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
    </div>
    </>
  )
}

export default About