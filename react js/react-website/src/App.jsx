import React from "react";
import Header from "./compo/pages/header.jsx";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./compo/pages/home.jsx";
import PlantTypes from "./compo/pages/plant-types.jsx";
import More from "./compo/pages/more.jsx";
import Contact from "./compo/pages/contact.jsx";
import Login from "./compo/admin/admin-login.jsx";
import MainAdmin from "./compo/admin/mainadmin.jsx";


import ProtectedAdmin from "./compo/admin/ProtectedAdmin.jsx";


function App() {
  return (
    <>
      <Routes>

        {/* USER LAYOUT */}
        <Route
          path="/"
          element={
            <div className="container">
              <Header />
              <Outlet />  {/* <- renders child pages */}
            </div>
          }
        >
          <Route index element={<Home />} />
          <Route path="plant-types" element={<PlantTypes />} />
          <Route path="more" element={<More />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* ADMIN / AUTH LAYOUT */}
        <Route path="/admin-login" element={<Login />} />

        {/* Protected Admin Routes */}
        <Route element={<ProtectedAdmin />} >
          <Route path="/mainadmin/*" element={<MainAdmin />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
