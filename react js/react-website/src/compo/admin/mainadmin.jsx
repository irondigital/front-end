import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar.jsx";
import Header from "./header.jsx";
import Dashboard from "./dashboard.jsx";
import Users from "./user.jsx";
import Growth from "./growth.jsx";
import Settings from "./settings.jsx";

const MainAdmin = () => {
  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <Routes>
          <Route index element={<Dashboard />} />         {/* default */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<Users />} />
          <Route path="growth" element={<Growth />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainAdmin;
