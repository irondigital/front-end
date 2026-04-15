import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){
    const Navigate = useNavigate();
   const[data,setdata] = useState({
    name:"",
    email:"",
    password:""
   });
   
   const onchange = (e)=>{
    setdata({...data,[e.target.name]:e.target.value})
   }

   const onsubmit = (e)=>{
    e.preventDefault();
    try{
        const datas = axios.post("http://localhost:5000/auth/api/register",data)
        console.log(datas)
        Navigate("./login")

    }catch(err){
        console.log(err);
    }


   }

    return(
        <>
        <h1 className="text-3xl font-bold text-center mt-5">Register</h1>
        <form onSubmit={onsubmit} className="flex flex-col gap-3 w-1/2 mx-auto mt-5">
            <input type="text" name="name" placeholder="name" onChange={onchange} className="border-2 border-gray-300 p-2 rounded"/>
            <input type="email" name="email" placeholder="email" onChange={onchange} className="border-2 border-gray-300 p-2 rounded"/>
            <input type="password" name="password" placeholder="password" onChange={onchange} className="border-2 border-gray-300 p-2 rounded"/>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Register
            </button>
        </form>

        </>
    )
}

export default Register;