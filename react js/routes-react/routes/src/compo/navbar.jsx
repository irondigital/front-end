import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white px-6 py-3 flex items-center justify-between">
      <h1 className="text-xl font-bold">TasteBite 🍽️</h1>

      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
