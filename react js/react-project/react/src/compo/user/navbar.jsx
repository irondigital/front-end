import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">StudiPRO</h1>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="/index" className="hover:text-blue-600">Home</a></li>
          {/* <li><a href="/courses" className="hover:text-blue-600">Courses</a></li> */}
          <li><a href="/pricing" className="hover:text-blue-600">Pricing</a></li>
          <li><a href="/about" className="hover:text-blue-600">About</a></li>
          <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          {/* <li><a href="/carrier" className="hover:text-blue-600">Career</a></li> */}
        </ul>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;