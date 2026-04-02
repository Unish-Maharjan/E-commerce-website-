import React from 'react'

const MenFashion = () => {
         
 const menProduct = [
  {
    title: "Classic White Shirt",
    Description: "Crisp white formal shirt for office and occasions",
    Price: 1800,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&fit=crop",
  },
  {
    title: "Slim Fit Chinos",
    Description: "Versatile slim fit chinos for smart casual look",
    Price: 2500,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&fit=crop",
  },
  {
    title: "Men's Denim Jacket",
    Description: "Rugged denim jacket for a cool casual style",
    Price: 3400,
    image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=400&fit=crop",
  },
  {
    title: "Slim Fit Suit",
    Description: "Elegant slim fit suit for formal events",
    Price: 8500,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&fit=crop",
  },
  {
    title: "Graphic Tee",
    Description: "Trendy graphic t-shirt for streetwear style",
    Price: 1200,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&fit=crop",
  },
  {
    title: "Men's Leather Jacket",
    Description: "Premium leather jacket for a bold statement",
    Price: 6500,
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400&fit=crop",
  },
  {
    title: "Linen Shirt",
    Description: "Breathable linen shirt perfect for summer days",
    Price: 2000,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&fit=crop",
  },
  {
    title: "Cargo Pants",
    Description: "Functional cargo pants with multiple pockets",
    Price: 2800,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&fit=crop",
  },
  {
    title: "Men's Hoodie",
    Description: "Cozy pullover hoodie for relaxed everyday wear",
    Price: 2600,
    image: "https://images.unsplash.com/photo-1614495640340-02853d943c4f?w=400&fit=crop",
  },
  {
    title: "Polo Shirt",
    Description: "Classic polo shirt for a smart casual look",
    Price: 1600,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&fit=crop",
  },
  {
    title: "Tailored Blazer",
    Description: "Sharp tailored blazer for professional settings",
    Price: 4800,
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&fit=crop",
  },
  {
    title: "Jogger Sweatpants",
    Description: "Comfortable joggers for workouts and lounging",
    Price: 2100,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&fit=crop",
  },
  {
    title: "Turtleneck Sweater",
    Description: "Stylish turtleneck for a sophisticated winter look",
    Price: 3000,
    image: "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?w=400&fit=crop",
  },
  {
    title: "Shorts",
    Description: "Lightweight shorts for casual summer outings",
    Price: 1400,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&fit=crop",
  },
  {
    title: "Bomber Jacket",
    Description: "Trendy bomber jacket for a street-style edge",
    Price: 3800,
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&fit=crop",
  },
  {
    title: "Dress Trousers",
    Description: "Classic dress trousers for formal occasions",
    Price: 3200,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&fit=crop",
  },
  {
    title: "Flannel Shirt",
    Description: "Warm flannel shirt for a cozy autumn vibe",
    Price: 2200,
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=400&fit=crop",
  },
  {
    title: "Tank Top",
    Description: "Essential tank top for gym or casual wear",
    Price: 900,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&fit=crop",
  },
  {
    title: "Trench Coat",
    Description: "Sophisticated trench coat for a timeless look",
    Price: 7200,
    image: "https://images.unsplash.com/photo-1520012218364-3dbe62c99bee?w=400&fit=crop",
  },
  {
    title: "Knit Cardigan",
    Description: "Relaxed knit cardigan for layering in cool weather",
    Price: 2900,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&fit=crop",
  },
];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
    
   
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-8 bg-red-500 rounded"></div>
        <p className="text-red-500 font-semibold">Men's Fashion</p>
      </div>


  <div className="grid grid-cols-4 gap-6">
 
 {menProduct.map((data, index)=>{
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

export default MenFashion