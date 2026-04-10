import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../admin/AuthContext";
import { Sparkles, Layout, LogOut, LogIn, Rocket } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="glass-nav py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center group perspective-1000">
          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white w-11 h-11 rounded-2xl flex items-center justify-center font-extrabold text-2xl shadow-xl shadow-indigo-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mr-4">
            S
          </div>
          <h1 className="text-2xl font-display font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
            Studi<span className="text-indigo-600">PRO</span>
          </h1>
        </Link>

        {/* Center Navigation - Floating feel */}
        <div className="hidden md:flex items-center bg-slate-50/50 border border-slate-100/50 p-1.5 rounded-2xl shadow-inner animate-fade-in">
          <ul className="flex items-center space-x-1 font-bold text-slate-500 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Pricing", path: "/pricing" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" }
            ].map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`px-5 py-2.5 rounded-xl transition-all duration-300 relative group/link ${isActive(item.path) ? 'text-indigo-700 bg-white shadow-sm' : 'hover:text-slate-900 hover:bg-white/50'}`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)] animate-pulse" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-5 animate-fade-in">
          {user ? (
            <div className="flex items-center space-x-4">
              <Link 
                to={user.role === "admin" ? "/admin/dashboard" : "/user/dashboard"} 
                className="hidden sm:flex items-center text-xs font-extrabold text-slate-600 border border-slate-200 px-4 py-2.5 rounded-xl hover:bg-slate-50 hover:border-indigo-100 transition-all group"
              >
                <Layout className="w-4 h-4 mr-2 text-indigo-500 group-hover:scale-110 transition-transform" />
                {user.role === "admin" ? "ADMIN HQ" : "MY DASHBOARD"}
              </Link>
              <button 
                onClick={logout}
                className="btn-secondary text-rose-500 border-rose-100 hover:bg-rose-50 hover:border-rose-200 py-2.5 px-5 text-xs shadow-none group"
              >
                <LogOut className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                LOGOUT
              </button>
            </div>
          ) : (
            <>
              <button 
                onClick={() => navigate("/user/auth")}
                className="hidden sm:flex items-center text-xs font-extrabold text-slate-700 hover:text-indigo-600 px-4 transition-colors group"
              >
                <LogIn className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                LOGIN
              </button>
              <button 
                onClick={() => navigate("/user/auth")}
                className="btn-primary py-3 px-7 text-xs shadow-indigo-100 group"
              >
                <Rocket className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
                GET STARTED
                <Sparkles className="ml-2 w-4 h-4 animate-pulse" />
              </button>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;