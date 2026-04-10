import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function AuthGuard({ children }) {
  const { user } = useAuth();

//   console.log("USER:", user); // ✅ now correct

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default AuthGuard;