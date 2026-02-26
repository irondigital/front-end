import { Link } from "react-router-dom";
import { FaHome, FaUser, FaChartLine, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-green-900 text-white h-screen p-6 flex flex-col gap-6 sticky top-0">
      <h1 className="text-2xl font-bold tracking-wider mb-4">PlantAdmin</h1>

      <nav className="flex flex-col gap-3 text-sm font-medium">
        <Link to="/mainadmin/dashboard" className="flex items-center gap-3 hover:bg-green-700 px-3 py-2 rounded">
          <FaHome /> Dashboard
        </Link>
        <Link to="/mainadmin/user" className="flex items-center gap-3 hover:bg-green-700 px-3 py-2 rounded">
          <FaUser /> Users
        </Link>
        <Link to="/mainadmin/growth" className="flex items-center gap-3 hover:bg-green-700 px-3 py-2 rounded">
          <FaChartLine /> Growth
        </Link>
        <Link to="/mainadmin/settings" className="flex items-center gap-3 hover:bg-green-700 px-3 py-2 rounded">
          <FaCog /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
