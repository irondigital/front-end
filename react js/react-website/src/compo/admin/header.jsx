
import { useNavigate } from "react-router-dom";
import Login from "./admin-login";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  return (
    <div className="w-full bg-white shadow p-4 flex justify-between items-center">

      {/* Logo */}
      <h2 className="text-xl font-bold">Dashboard Overview</h2>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-3 py-2 text-sm outline-none hidden sm:block"
        />



        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
