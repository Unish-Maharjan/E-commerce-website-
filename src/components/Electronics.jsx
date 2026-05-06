import React from 'react'

const Electronics = () => {
         
 const electronicsProduct = [
  {
    title: "iPhone 15 Pro",
    Description: "Apple's flagship smartphone with titanium design and A17 Pro chip",
    Price: 134900,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&fit=crop",
  },
  {
    title: "Samsung 4K Smart TV",
    Description: "55-inch 4K QLED Smart TV with vivid colors and smart features",
    Price: 72000,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=400&fit=crop",
  },
  {
    title: "MacBook Pro 14\"",
    Description: "Powerful Apple laptop with M3 chip for professionals",
    Price: 198000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&fit=crop",
  },
  {
    title: "Sony WH-1000XM5",
    Description: "Industry-leading noise cancelling wireless headphones",
    Price: 29990,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&fit=crop",
  },
  {
    title: "iPad Pro 12.9\"",
    Description: "Apple's most powerful tablet with M2 chip and Liquid Retina display",
    Price: 112900,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&fit=crop",
  },
  {
    title: "Canon EOS R50",
    Description: "Compact mirrorless camera ideal for photography enthusiasts",
    Price: 67000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&fit=crop",
  },
  {
    title: "Apple Watch Series 9",
    Description: "Smart watch with health tracking, GPS and always-on display",
    Price: 41900,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&fit=crop",
  },
  {
    title: "Dell XPS 15 Laptop",
    Description: "High-performance Windows laptop with OLED display",
    Price: 165000,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&fit=crop",
  },
  {
    title: "Sony PlayStation 5",
    Description: "Next-gen gaming console with ultra-fast SSD and 4K gaming",
    Price: 54990,
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&fit=crop",
  },
  {
    title: "AirPods Pro 2nd Gen",
    Description: "Apple earbuds with adaptive transparency and active noise cancellation",
    Price: 24900,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&fit=crop",
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    Description: "Android flagship with S Pen and 200MP camera system",
    Price: 129999,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&fit=crop",
  },
  {
    title: "Mechanical Keyboard",
    Description: "RGB mechanical keyboard with tactile switches for gaming and typing",
    Price: 8500,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&fit=crop",
  },
  {
    title: "LG UltraWide Monitor",
    Description: "34-inch ultrawide curved monitor for immersive productivity",
    Price: 45000,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&fit=crop",
  },
  {
    title: "Kindle Paperwhite",
    Description: "Waterproof e-reader with warm light and weeks of battery life",
    Price: 13999,
    image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400&fit=crop",
  },
  {
    title: "GoPro Hero 12",
    Description: "Rugged action camera with 5.3K video and HyperSmooth stabilization",
    Price: 39990,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&fit=crop",
  },
  {
    title: "Portable Power Bank",
    Description: "20000mAh fast-charging power bank for all your devices",
    Price: 2999,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&fit=crop",
  },
  {
    title: "Smart Home Speaker",
    Description: "Voice-controlled smart speaker with rich 360° sound",
    Price: 9999,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&fit=crop",
  },
  {
    title: "Wireless Gaming Mouse",
    Description: "Ergonomic wireless gaming mouse with 25K DPI sensor",
    Price: 6500,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&fit=crop",
  },
  {
    title: "DJI Mini 4 Pro Drone",
    Description: "Compact foldable drone with 4K HDR video and obstacle sensing",
    Price: 89000,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&fit=crop",
  }
];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
    
   
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-8 bg-red-500 rounded"></div>
        <p className="text-red-500 font-semibold">Men's Fashion</p>
      </div>


  <div className="grid grid-cols-4 gap-6">
 
 {electronicsProduct.map((data, index)=>{
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

export default Electronics