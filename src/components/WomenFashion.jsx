import React from 'react'

const WomenFashion = () => {
         
  const product = [
  {
    title: "Floral Summer Dress",
    Description: "Lightweight floral dress perfect for summer outings",
    Price: 2500,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&fit=crop",
  },
  {
    title: "Denim Jacket",
    Description: "Classic blue denim jacket for casual wear",
    Price: 3200,
    image: "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=400&fit=crop",
  },
  {
    title: "Black Bodycon Dress",
    Description: "Elegant bodycon dress for evening parties",
    Price: 2800,
    image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=400&fit=crop",
  },
  {
    title: "White Crop Top",
    Description: "Trendy crop top made with soft cotton fabric",
    Price: 1200,
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=400&fit=crop",
  },
  {
    title: "High Waist Jeans",
    Description: "Comfortable high waist jeans with stretch",
    Price: 3000,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&fit=crop",
  },
  {
    title: "Pleated Skirt",
    Description: "Stylish pleated skirt for formal and casual wear",
    Price: 2200,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&fit=crop",
  },
  {
    title: "Silk Blouse",
    Description: "Premium silk blouse for office wear",
    Price: 3500,
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&fit=crop",
  },
  {
    title: "Yoga Leggings",
    Description: "Flexible and breathable leggings for workouts",
    Price: 1800,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&fit=crop",
  },
  {
    title: "Leather Jacket",
    Description: "Stylish leather jacket for a bold look",
    Price: 5000,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&fit=crop",
  },
  {
    title: "Maxi Dress",
    Description: "Flowy maxi dress perfect for vacations",
    Price: 3100,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&fit=crop",
  },
  {
    title: "Knitted Sweater",
    Description: "Warm knitted sweater for winter season",
    Price: 2600,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&fit=crop",
  },
  {
    title: "Formal Blazer",
    Description: "Smart blazer for professional settings",
    Price: 4200,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&fit=crop",
  },
  {
    title: "Casual T-Shirt",
    Description: "Soft cotton t-shirt for everyday comfort",
    Price: 1000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&fit=crop",
  },
  {
    title: "Pencil Skirt",
    Description: "Slim fit skirt ideal for office wear",
    Price: 2100,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&fit=crop",
  },
  {
    title: "Off Shoulder Top",
    Description: "Trendy off-shoulder top for stylish look",
    Price: 1600,
    image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=400&fit=crop",
  },
  {
    title: "Jogger Pants",
    Description: "Comfortable joggers for casual outings",
    Price: 2000,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&fit=crop",
  },
  {
    title: "Wrap Dress",
    Description: "Elegant wrap dress with flattering fit",
    Price: 2900,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&fit=crop",
  },
  {
    title: "Tank Top",
    Description: "Basic tank top for layering or casual wear",
    Price: 900,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&fit=crop",
  },
  {
    title: "Wide Leg Pants",
    Description: "Trendy wide leg pants for a chic look",
    Price: 2800,
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=400&fit=crop",
  },
];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
    
   
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-8 bg-red-500 rounded"></div>
        <p className="text-red-500 font-semibold">Our Products</p>
      </div>

      


    
    

  <div className="grid grid-cols-4 gap-6">
 
 {product.map((data, index)=>{
      let number = Math.floor(Math.random() * 100);

      return(
      <div
        key={index}
        className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
      >
        <div className="h-48 flex items-center justify-center bg-gray-50 p-4">
          <img
            src={data.image}
            alt="hahah"
            className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between h-40">
          <h3 className="text-[16px] font-medium text-gray-800 line-clamp-2">
            {data.title}
          </h3>

          <div className="flex items-center gap-2 text-sm mt-2">
            <div className="text-yellow-400">★★★★☆</div>
            <span className="text-gray-500 text-xs">
              ({number})
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-semibold text-red-500">
              {data.Price}
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
  )
}

export default WomenFashion