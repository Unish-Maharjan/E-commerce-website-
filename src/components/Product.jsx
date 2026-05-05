import React, { useEffect, useState } from "react";
import Addproduct from "./Addproduct";
import { useGetProductQuery } from "../services/productApi";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const newdata = (setProd) => {
    const updated = [setProd, ...products];
    setProducts(updated);
  };

  const { data, isLoading } = useGetProductQuery();

  const filtered = data?.products?.filter((item) =>
    search.toLowerCase() === ""
      ? true
      : item.title.toLowerCase().includes(search.toLowerCase())
  );

  const StarRating = ({ rating = 4 }) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-red-500 rounded"></div>
          <div>
            <p className="text-red-500 font-semibold text-sm tracking-wide uppercase">
              Our Products
            </p>
            <p className="text-gray-800 font-bold text-2xl mt-0.5">
              Explore the Collection
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-gray-100 border border-gray-200 focus:border-red-400 focus:bg-white h-10 pl-9 pr-4 outline-none rounded-lg text-sm text-gray-700 transition-all duration-200"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Results count */}
      {search && (
        <p className="text-sm text-gray-500 mb-4">
          {filtered?.length ?? 0} result{filtered?.length !== 1 ? "s" : ""} for{" "}
          <span className="text-gray-800 font-medium">"{search}"</span>
        </p>
      )}

      {/* Grid */}
      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-xl h-80 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered?.map((product) => {
            const reviewCount = Math.floor(Math.random() * 100) + 10;
            const rating = Math.floor(Math.random() * 2) + 3; // 3–5 stars
            const discount = Math.floor(Math.random() * 30) + 5;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                    -{discount}%
                  </span>
                  <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-50">
                    <svg
                      className="w-3.5 h-3.5 text-gray-400 hover:text-red-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug mb-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <StarRating rating={rating} />
                      <span className="text-gray-400 text-xs">({reviewCount})</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-base font-bold text-red-500">
                        ${product.price}
                      </span>
                      <span className="text-xs text-gray-400 line-through ml-1.5">
                        ${(product.price * (1 + discount / 100)).toFixed(0)}
                      </span>
                    </div>

                    <button className="text-xs font-medium bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 active:scale-95 transition-all duration-150 flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Empty state */}
      {!isLoading && filtered?.length === 0 && (
        <div className="text-center py-24 text-gray-400">
          <svg
            className="w-12 h-12 mx-auto mb-3 text-gray-300"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <p className="text-sm">No products found for "{search}"</p>
        </div>
      )}

      <Addproduct addproduct={newdata} />
    </section>
  );
};

export default Product;