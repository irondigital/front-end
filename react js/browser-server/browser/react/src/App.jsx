import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "./compo/login";
import Home from "./compo/home";
import Register from "./compo/resister";
import AddData from "./compo/adddata";
import Manage from "./compo/manage";
import Update from "./compo/update";


function App(){

  return(
<>
<BrowserRouter>
<Routes>
         <Route path="/" element={<Home />} />
         <Route path="/resister" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Home />} />
         <Route path="/adddata" element={<AddData />} />
         <Route path="/manage" element={<Manage />} />
          <Route path="/update" element={<Update />} />
           <Route path="/update/:id" element={<Update />} />
       
       
</Routes>
</BrowserRouter>

</>
  )
}

export default App