import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./compo/register";
import Login from "./compo/login";
import Dashboard from "./compo/dashboard";
import DashManage from "./compo/dashmanage";
import DashUpdate from "./compo/dashupdate";

function App(){
  return(
    <Router>
    <Routes>
      
      <Route path="/" element={<Register/>}/> 
      <Route path="/login" element={<Login/>}/>
      <Route path="/login/dashboard" element={<Dashboard/>}/>
      <Route path="/dashboard/dashmanage" element={<DashManage/>}/>
      <Route path="/dashboard/dashupdate/:id" element={<DashUpdate/>}/>


    </Routes>
    
    </Router>
  
  )
}

export default App;