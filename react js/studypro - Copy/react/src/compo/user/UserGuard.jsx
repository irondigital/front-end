import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../admin/AuthContext";

const UserGuard = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user || user.role !== "user") {
    return <Navigate to="/user/auth" state={{ from: location }} replace />;
  }

  return children;
};

export default UserGuard;
