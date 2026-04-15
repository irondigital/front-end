import { createContext, useState, useEffect, useContext } from 'react';
import api from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const { data } = await api.post('/auth/login', { email, password });
        if (data.success) {
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            return { success: true };
        }
        return { success: false, message: data.message };
    };

    const register = async (name, email, password) => {
        const { data } = await api.post('/auth/register', { name, email, password });
        if (data.success) {
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            return { success: true };
        }
        return { success: false, message: data.message };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const updateProfile = async (profileData) => {
        const { data } = await api.put('/auth/profile', profileData);
        if (data.success) {
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            return { success: true };
        }
        return { success: false, message: data.message };
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
