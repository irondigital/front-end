import React from "react";
import Form from "./compo/form";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Manage from "./compo/manage";

function App(){
  return(
    <Router>
  <Routes>
    <Route path="/" element={<Form />} />
    <Route path="/manage" element={<Manage />} />
  </Routes>
</Router>
  )
}

export default App;