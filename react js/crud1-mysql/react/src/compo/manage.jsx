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
    axios.get("http://localhost:5000/auth/api/info")
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
      `http://localhost:5000/auth/api/info/${id}`
    );

    setdata(data.filter(item => item.id !== id));

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
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r)=>(
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>
                <button onClick={()=>navigate(`/update/${r.id}`)}>Edit</button>
               <button onClick={()=>handleDelete(r.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Manage;