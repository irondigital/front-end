import React, { useEffect } from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Chatbot from "./components/Chatbot.jsx";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import Register from "./pages/Register.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import Recommend from "./pages/Recommend.jsx";
import CareReminder from "./pages/CareReminder.jsx";
import DiseaseDetect from "./pages/DiseaseDetect.jsx";
import LocationSuggestion from "./pages/LocationSuggestion.jsx";

import { useThemeStore } from "./store/useThemeStore";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const location = useLocation();
  const { initTheme } = useThemeStore();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                  <Outlet />
                </main>
                <Footer />
              </div>
            }
          >
            <Route index element={<PageTransition><Home /></PageTransition>} />
            <Route path="shop" element={<PageTransition><Shop /></PageTransition>} />
            <Route path="plant/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
            <Route path="recommend" element={<PageTransition><Recommend /></PageTransition>} />
            <Route path="care-reminders" element={<PageTransition><CareReminder /></PageTransition>} />
            <Route path="disease" element={<PageTransition><DiseaseDetect /></PageTransition>} />
            <Route path="location" element={<PageTransition><LocationSuggestion /></PageTransition>} />
            <Route path="dashboard" element={<PageTransition><UserDashboard /></PageTransition>} />
            
            <Route path="login" element={<PageTransition><UserLogin /></PageTransition>} />
            <Route path="register" element={<PageTransition><Register /></PageTransition>} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Chatbot />
    </>
  );
}
