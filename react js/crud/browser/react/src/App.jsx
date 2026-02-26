import React from "react";
import Form from "./compo/form";
import "./index.css";
import Manage from "./compo/manage";
import Update from "./compo/update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/update" element={<Update />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}