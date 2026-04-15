import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, PlusCircle, Home } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar glass">
            <div className="container nav-content">
                <Link to="/" className="logo">
                    Blog<span>Hub</span>
                </Link>

                <div className="nav-links">
                    <Link to="/" className="nav-item">
                        <Home size={20} />
                        <span>Feed</span>
                    </Link>

                    {user ? (
                        <>
                            <Link to="/dashboard" className="nav-item">
                                <PlusCircle size={20} />
                                <span>Write</span>
                            </Link>
                            <Link to="/profile" className="nav-item">
                                <User size={20} />
                                <span>Profile</span>
                            </Link>
                            <button onClick={handleLogout} className="btn-logout">
                                <LogOut size={20} />
                                <span>Logout</span>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-outline">Login</Link>
                            <Link to="/register" className="btn btn-primary">Join Now</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
