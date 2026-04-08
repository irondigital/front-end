import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Manage(){
 const id = useParams();
 const navigate = useNavigate();
  const [data,setdata] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/auth/api/crud3")
    .then(res=>{
      setdata(res.data);
    })
    .catch(err=>{
      console.log(err);
    });
  },[]);
  
  const handleDelete = async(id)=>{
  try{

    const res = await axios.delete(
      `http://localhost:5000/auth/api/crud3/${id}`
    );

    setdata(data.filter(item => item._id !== id));

  }catch(err){
    console.log(err);
  }
}
  return(
    <>
      <h1>Manage Data</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r)=>(
            <tr key={r._id}>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>
                <button onClick={()=>navigate(`/update/${r._id}`)}>Edit</button>
               <button onClick={()=>handleDelete(r._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Manage;