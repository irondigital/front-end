import React, { useState } from "react";
import { CiGrid2H } from "react-icons/ci";
import { FaSearch, FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Glass-bg/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-3 ">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-white">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <span>Planto</span>
        </div>

       {/* Desktop Menu */}
<ul className="hidden md:flex gap-8 text-lg font-medium text-white">
  <li>
    <Link to="/" className="hover:text-gray-200">
      Home
    </Link>
  </li>

  <li>
    <Link to="/plant-types" className="hover:text-gray-200">
      Plant Types
    </Link>
  </li>

  <li>
    <Link to="/more" className="hover:text-gray-200">
      More
    </Link>
  </li>

  <li>
    <Link to="/contact" className="hover:text-gray-200">
      Contact
    </Link>
  </li>
</ul>

{/* Icons */}
<div className="hidden md:flex gap-6 text-2xl text-white">
  <FaSearch />
  <FaCartPlus />
  <CiGrid2H />
</div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

     {/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden bg-green-700 px-4 py-4 space-y-4 text-white">
    
    <Link to="/" className="block">
      Home
    </Link>

    <Link to="/plant-types" className="block">
      Plant Types
    </Link>

    <Link to="/more" className="block">
      More
    </Link>

    <Link to="/contact" className="block">
      Contact
    </Link>

    <div className="flex gap-6 text-2xl pt-4">
      <FaSearch />
      <FaCartPlus />
      <CiGrid2H />
    </div>
  </div>
)}

      
    </header>
  );
};

export default Header;
