import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      
      <div className="flex justify-between items-center h-20 px-6 md:px-16">

        {/* Logo */}
        <div className="text-3xl font-bold text-red-600">
          UnishPasal
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-[16px] font-semibold">
          <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                      
                    >
          <Tab label="Home" component={Link} to="/home"></Tab>
          <Tab label="About" component={Link} to="/about" ></Tab>
          <Tab label="Contact" component={Link} to="/connect"></Tab>
          <Tab label="Product" component={Link} to="/product"></Tab>
          <Tab label="Sign Up" component={Link} to="/signup"></Tab>
          </Tabs>
        </ul>

        {/* Search + Icons */}
        <div className="hidden md:flex items-center gap-6">
          <input
            type="text"
            placeholder="Search?"
            className="bg-gray-200 w-52 h-9 px-3 outline-none rounded"
          />

          <Link to="/wishlist"><i className="fa-regular fa-heart text-xl"></i></Link>
          <Link to="/cart"><i className="fa-solid fa-cart-arrow-down text-xl"></i></Link>
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