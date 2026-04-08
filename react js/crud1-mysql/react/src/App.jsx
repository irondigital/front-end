import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Form from "./compo/form";
import Manage from "./compo/manage";
import Edit from "./compo/update";

function App(){

    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={ < Form/>} />
                <Route path="/manage" element={ < Manage/>} />
                 <Route path="/update/:id" element={ < Edit/>} />
            </Routes>
        </Router>
        </>
    )
}

export default App;