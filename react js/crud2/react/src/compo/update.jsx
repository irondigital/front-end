
import React from "react";
import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

function Edit(){

 const {id} = useParams();
 const navigate = useNavigate();

 const [data,setdata] = useState({
  name:"",
  email:""
 });

 useEffect(()=>{
  axios.get(`http://localhost:5000/auth/api/crud3/${id}`)
  .then(res=>{
    setdata(res.data);
  })
  .catch(err=>{
    console.log(err);
  });
 },[id]);

 const onchange = (e)=>{
  setdata({
    ...data,
    [e.target.name]:e.target.value
  });
 }

 const onsubmit = async(e)=>{
  e.preventDefault();

  try{

    await axios.put(
      `http://localhost:5000/auth/api/crud3/${id}`,
      data
    );

    navigate("/manage");

  }catch(err){
    console.log(err);
  }
 }

 return(
  <>
  <h1>Edit Data</h1>

  <form onSubmit={onsubmit}>

    <input
      type="text"
      name="name"
      value={data.name}
      onChange={onchange}
    />

    <input
      type="email"
      name="email"
      value={data.email}
      onChange={onchange}
    />

    <button type="submit">Update</button>

  </form>
  </>
 )
}

export default Edit;