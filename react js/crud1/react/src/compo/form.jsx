import React from "react";
import { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Manage from "./manage";

function Form(){
const navigate = useNavigate();
    const[form,setform] = useState({
        name:"",
        email:""
    });

    const change = (e) =>{
       setform({
        ...form,
        [e.target.name] : e.target.value
       })
    }

    const submit = async (e) => {
  e.preventDefault();

  try {
    const data = await axios.post(
      "http://localhost:5000/auth/api/studentdata",
      form
    );

    console.log(data);
    alert("data added");

    navigate("/manage"); // now it will navigate
  } catch (err) {
    console.log(err);
  }
};

    return(
        <>
       <h1 className="text-center mt-5 text-2xl font-bold"> student data </h1>
      
        <form action="" onSubmit={submit} className="text-center mt-20 border-xl w-100 border h-auto bg-gray-200 p-5 align-center">
        <div>
        
        <label htmlFor="name">name:</label>
        <input type="text" className="rounded-l m-5"
        name="name"
        onChange={change}
      value={form.name}
        />
       </div>
       <div>
        <label htmlFor="email">email:</label>
        <input type="text" name="email" className="rounded-l m-5"
        onChange={change}
        value={form.email}
        />
        </div>

        <div>
            <button type="submit">submit</button>
        </div>
        </form>
        
        </>
    )
}

export default Form;