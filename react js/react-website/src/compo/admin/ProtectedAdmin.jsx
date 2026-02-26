import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdmin = () => {
    const isAdmin = localStorage.getItem("isAdmin");

    // If not logged in, redirect to login page
    if (!isAdmin) {
        return <Navigate to="/admin-login" replace />;
    }

    // If logged in, render the child routes (MainAdmin)
    return <Outlet />;
};

export default ProtectedAdmin;
