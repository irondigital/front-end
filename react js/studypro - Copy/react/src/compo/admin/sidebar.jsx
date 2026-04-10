import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  UserRound, 
  Briefcase, 
  GraduationCap, 
  CreditCard, 
  Settings, 
  LogOut,
  ChevronDown,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  Users
} from "lucide-react";
import { useAuth } from "./AuthContext";

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);
    const [openMenus, setOpenMenus] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const { logout, user } = useAuth();

    const toggleMenu = (menu) => {
      if (isCollapsed) setIsCollapsed(false);
      setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };

    const isActive = (path) => location.pathname.includes(path);

    const handleLogout = async () => {
      await logout();
      navigate("/login");
    };

    const navItems = [
      { 
        label: "Dashboard", 
        icon: LayoutDashboard, 
        path: "/admin/dashboard" 
      },
      { 
        label: "Courses", 
        icon: BookOpen, 
        path: "/admin/courses-data",
        submenu: [
          { label: "Add Course", path: "/admin/courses-data/add-course" },
          { label: "Manage Courses", path: "/admin/courses-data/manage-courses" }
        ]
      },
      { 
        label: "Admins", 
        icon: UserRound, 
        path: "/admin/admin-data",
        submenu: [
          { label: "Add Admin", path: "/admin/admin-data/add-admin" },
          { label: "Manage Admins", path: "/admin/admin-data/manage-admin" }
        ]
      },
      { 
        label: "Careers", 
        icon: Briefcase, 
        path: "/admin/jobs",
        submenu: [
          { label: "Add Job", path: "/admin/jobs/add-jobs" },
          { label: "Manage Jobs", path: "/admin/jobs/manage-jobs" }
        ]
      },
      { 
        label: "Payments", 
        icon: CreditCard, 
        path: "/admin/payments" 
      },
      { 
        label: "Enrollments", 
        icon: GraduationCap, 
        path: "/admin/Endrolladmin" 
      },
      { 
        label: "Users", 
        icon: Users, 
        path: "/admin/users" 
      }
    ];

    return (
        <>
            <aside className={`fixed md:sticky top-0 z-40 flex flex-col bg-white border-r border-slate-100 transition-all duration-500 ease-in-out h-screen ${isCollapsed ? 'w-24' : 'w-72'}`}>
                
                {/* Collapse Toggle Button */}
                <button 
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="absolute -right-3 top-20 bg-white border border-slate-200 rounded-full p-1.5 hover:text-indigo-600 hover:shadow-md transition-all z-50 group shadow-sm hidden md:block"
                >
                  {isCollapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
                </button>

                {/* Logo Section */}
                <div className={`p-8 pb-4 transition-all duration-300 ${isCollapsed ? 'items-center px-0' : ''}`}>
                  <Link to="/" className="flex items-center justify-center">
                    <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white w-10 h-10 rounded-2xl flex items-center justify-center font-extrabold text-xl shadow-lg shadow-indigo-200 mr-2 shrink-0 group-hover:scale-110 transition-transform">S</div>
                    {!isCollapsed && (
                      <span className="text-xl font-display font-extrabold text-slate-900 tracking-tight animate-fade-in truncate">
                        Studi<span className="text-indigo-600">PRO</span> 
                        <span className="ml-1 text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-md align-middle uppercase tracking-widest">HQ</span>
                      </span>
                    )}
                  </Link>
                </div>

                {/* Search / Context Section - Only when expanded */}
                {!isCollapsed && (
                  <div className="px-6 py-4 animate-fade-in">
                    <div className="relative group">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                      <input 
                        type="text" 
                        placeholder="Quick search..." 
                        className="w-full bg-slate-50 border border-transparent focus:bg-white focus:border-indigo-100 rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium text-slate-600 focus:outline-none transition-all focus:shadow-sm"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto no-scrollbar">
                    {navItems.map((item) => (
                      <div key={item.label} className="group/item">
                        {item.submenu ? (
                          <>
                            <button
                              onClick={() => toggleMenu(item.label)}
                              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 font-bold text-sm ${isActive(item.path) ? 'bg-indigo-50/50 text-indigo-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                            >
                              <div className="flex items-center">
                                <item.icon className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? 'mx-auto' : 'mr-3'} ${isActive(item.path) ? 'text-indigo-600' : 'text-slate-400 group-hover/item:text-slate-600'}`} />
                                {!isCollapsed && <span>{item.label}</span>}
                              </div>
                              {!isCollapsed && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openMenus[item.label] ? 'rotate-180' : ''}`} />}
                            </button>
                            {!isCollapsed && openMenus[item.label] && (
                              <div className="mt-1 ml-4 pl-4 border-l-2 border-slate-100 space-y-1 animate-slide-up">
                                {item.submenu.map(sub => (
                                  <Link
                                    key={sub.label}
                                    to={sub.path}
                                    className={`block py-2.5 px-3 text-[11px] font-bold rounded-xl transition-all ${location.pathname === sub.path ? 'text-indigo-600 bg-indigo-50/30' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'}`}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            to={item.path}
                            className={`flex items-center px-4 py-3 rounded-2xl transition-all duration-300 font-bold text-sm ${isActive(item.path) ? 'bg-indigo-50/50 text-indigo-700 shadow-sm border border-indigo-100/20' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                          >
                            <item.icon className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? 'mx-auto' : 'mr-3'} ${isActive(item.path) ? 'text-indigo-600' : 'text-slate-400 group-hover/item:text-slate-600'}`} />
                            {!isCollapsed && <span>{item.label}</span>}
                          </Link>
                        )}
                      </div>
                    ))}
                </nav>

                {/* Footer / User Profile Section */}
                <div className={`mt-auto p-4 transition-all duration-300 ${isCollapsed ? 'items-center px-4' : 'px-6'}`}>
                    <div className={`mb-4 overflow-hidden rounded-2xl border border-slate-100 transition-all ${isCollapsed ? 'p-1' : 'p-3 hover:bg-slate-50'}`}>
                      <div className="flex items-center cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-100 to-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0 shadow-inner">
                          {user?.name?.[0] || "A"}
                        </div>
                        {!isCollapsed && (
                          <div className="ml-3 animate-fade-in overflow-hidden">
                            <p className="text-xs font-extrabold text-slate-900 truncate">{user?.name || "Administrator"}</p>
                            <p className="text-[10px] text-slate-400 font-bold truncate">Premium Root</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                        onClick={() => setIsLogoutOpen(true)}
                        className={`flex items-center justify-center transition-all duration-300 font-bold text-sm rounded-2xl ${isCollapsed ? 'w-12 h-12 p-0 text-rose-500 hover:bg-rose-50' : 'w-full px-4 py-3 text-rose-500 hover:bg-rose-50'}`}
                    >
                        <LogOut className={`w-5 h-5 ${isCollapsed ? '' : 'mr-3'}`} />
                        {!isCollapsed && <span>Sign Out</span>}
                    </button>
                </div>
            </aside>

            {/* LOGOUT MODAL */}
            {isLogoutOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-fade-in" onClick={() => setIsLogoutOpen(false)} />
                    <div className="relative glass-card bg-white w-full max-w-sm p-8 animate-scale-in border-white/60 shadow-2xl">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner ring-4 ring-rose-50/50">
                              <LogOut className="w-10 h-10 text-rose-500 animate-pulse" />
                            </div>
                            <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-2 tracking-tight">Ending your session?</h3>
                            <p className="text-slate-500 font-medium text-sm mb-8 px-4">All unsaved data will remain but you'll need to sign in again to access the HQ.</p>
                            
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setIsLogoutOpen(false)}
                                    className="flex-1 btn-secondary py-3.5 text-sm"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-extrabold py-3.5 rounded-xl transition-all duration-300 text-sm shadow-lg shadow-rose-500/25 hover:-translate-y-0.5"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}