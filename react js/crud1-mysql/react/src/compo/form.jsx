import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Form(){
const navigate = useNavigate();
 const [data,setdata] = useState({
    name:"",
    email:""
   
 });

 function onchange(e){
  setdata({
    ...data,
    [e.target.name]: e.target.value
  });
 }

 async function onsubmit(e){
   e.preventDefault();

   try{
      const res = await axios.post(
        "http://localhost:5000/auth/api/info",
        data
      );
    //   console.log(data)
      console.log(res.data);
      navigate("./manage")
  
   }catch(err){
      console.log(err);
   }
 }

 return(
  <>
    <h1>data form</h1>

    <form onSubmit={onsubmit}>

      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={onchange}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={onchange}
        />
      </div>

    

      <button type="submit">Submit</button>

    </form>
  </>
 );
}

export default Form;