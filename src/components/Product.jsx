import React, { useEffect, useState } from "react";

export const Product = () => {
   const [products, setProducts] = useState([]);
   const [search,setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

 
  console.log(search);
  

  return (
    <>
   <section className="max-w-7xl mx-auto py-16 px-6">

      
    
   <div className="flex justify-between">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-8 bg-red-500 rounded"></div>
        <p className="text-red-500 font-semibold">Our Products</p>
      </div>

      <input
            type="text"
            placeholder="Search for your item"
            className="bg-gray-200 w-100 h-9 px-3 outline-none rounded"
            onChange={(e) => setSearch(e.target.value)}
          />

    </div>

      

  <div className="grid grid-cols-4 gap-6 mt-10">
  {products.filter((items) => {
      return search.toLowerCase() === '' ? items : items.title.toLowerCase().includes(search);
  }).map((products) => {
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
