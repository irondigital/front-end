import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(){

  const[data,setdata] = useState({
    title:"",
    content:""
  });
  const navigate = useNavigate();

  const onchange = (e)=>{
    setdata({...data,
        [e.target.name]:e.target.value
    }
    )
  }
  const onsubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/auth/api/dashboard",data)
    .then(res=> {
      console.log(res.data);
      navigate("/dashboard/dashmanage");
    })
    .catch(err=>console.log(err))
}


    return(
        <>
        <h1 className="text-3xl font-bold text-center mt-5">Dashboard</h1>
        <form className="flex flex-col gap-3 w-1/2 mx-auto mt-5" onSubmit={onsubmit}>
            <input type="text" name="title" placeholder="title" className="border-2 border-gray-300 p-2 rounded" onChange={onchange}/>
            <textarea name="content" placeholder="content" className="border-2 border-gray-300 p-2 rounded" onChange={onchange}></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create Blog
            </button>
        </form>
        </>
    )
}

export default Dashboard;