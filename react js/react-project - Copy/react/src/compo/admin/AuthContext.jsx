import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

// Configure axios defaults for cookie support
axios.defaults.withCredentials = true;
const API_BASE = "http://localhost:5000/auth/api";

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check auth state on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${API_BASE}/me`);
        setUser(response.data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${API_BASE}/user/register`, userData);
      return { success: true, message: response.data.message };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || "Registration failed" 
      };
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE}/login`, { email, password });
      setUser(response.data.user);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || "Login failed" 
      };
    }
  };

  const logoutUser = async () => {
    try {
      await axios.post(`${API_BASE}/logout`);
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login: loginUser, logout: logoutUser, register: registerUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;