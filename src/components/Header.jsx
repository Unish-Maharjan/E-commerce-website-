import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      
      <div className="flex justify-between items-center h-20 px-6 md:px-16">

        {/* Logo */}
        <div className="text-3xl font-bold text-red-600">
          UnishPasal
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-[16px] font-semibold">
          <Link to="/home"><li className="hover:text-red-500">Home</li></Link>
          <Link to="/about"><li className="hover:text-red-500">About</li></Link>
          <Link to="/connect"><li className="hover:text-red-500">Contact</li></Link>
          <Link to="/product"><li className="hover:text-red-500">Product</li></Link>
          <Link to="/signup"><li className="hover:text-red-500">Sign Up</li></Link>
        </ul>

        {/* Search + Icons */}
        <div className="hidden md:flex items-center gap-6">
          <input
            type="text"
            placeholder="Search?"
            className="bg-gray-200 w-52 h-9 px-3 outline-none rounded"
          />

          <Link to="/wishlist"><i className="fa-regular fa-heart text-xl"></i></Link>
          <Link to="/wishlist"><i className="fa-solid fa-cart-arrow-down text-xl"></i></Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 font-semibold">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/connect">Contact</Link>
          <Link to="/product">Product</Link>
          <Link to="/signup">Sign Up</Link>

          <input
            type="text"
            placeholder="Search?"
            className="bg-gray-200 w-3/4 h-9 px-3 outline-none rounded"
          />
        </div>
      )}

      <hr className="text-gray-300" />
    </nav>
  );
};

export default Header;