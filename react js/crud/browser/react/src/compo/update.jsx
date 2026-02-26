import React from "react";
import { useState , useEffect } from "react";
import Manage from "./manage";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";


function Update() {

    const navigate = useNavigate();
        const [data, setData] = useState();
        const { id } = useParams();
            useEffect(() =>{
                axios.get(`http://localhost:3000/api/auth/users/${id}`)
                .then(res => {
                    setData(res.data);
                }
                )
                .catch(err => {
                    console.log(err);
                })
            },[id])

            const handleUpdate = (e) => {
  e.preventDefault();

  axios.put(`http://localhost:3000/api/auth/users/${id}`, data)
    .then(res => {
      alert("Updated Successfully ✅");
      navigate("/manage");
    })
    .catch(err => console.log(err));
};




 return (
  <div>
   <h1>Update Component</h1>
   <form action="" onSubmit={handleUpdate}> 
    <div>
     <label htmlFor="name">Name</label>
     <input type="text" name="name" id="name" value={data?.name || ""} onChange={(e) => setData({...data, name: e.target.value})} />
    </div>
    <div>
     <label htmlFor="email">Email</label>
     <input type="email" name="email" id="email" value={data?.email || ""} onChange={(e) => setData({...data, email: e.target.value})} />
    </div>
    <button type="submit">Update</button>
   </form>
  </div>
 );
}

export default Update;