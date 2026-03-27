import React, { useEffect, useState } from "react";

export const Product = () => {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

 

  

  return (
    <>
   <section className="max-w-7xl mx-auto py-16 px-6">
    
   
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-8 bg-red-500 rounded"></div>
        <p className="text-red-500 font-semibold">Our Products</p>
      </div>

      

  <div className="grid grid-cols-4 gap-6">
  {products.map((products) => {
    let number = Math.floor(Math.random() * 100);

    return (
      <div
        key={products.id}
        className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
      >
        {/* Image */}
        <div className="h-48 flex items-center justify-center bg-gray-50 p-4">
          <img
            src={products.thumbnail}
            alt={products.title}
            className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between h-40">
          <h3 className="text-[16px] font-medium text-gray-800 line-clamp-2">
            {products.title}
          </h3>

          <div className="flex items-center gap-2 text-sm mt-2">
            <div className="text-yellow-400">★★★★☆</div>
            <span className="text-gray-500 text-xs">
              ({number})
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-semibold text-red-500">
              ${products.price}
            </span>

            <button className="text-sm bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-gray-800 transition">
              Add
            </button>
          </div>
        </div>
      </div>
    );
  })}
  </div>


  </section>
    </>
  )
}

export default Product
