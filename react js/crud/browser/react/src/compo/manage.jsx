import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Manage(){
    
       const [data, setData] = useState([]);
        const navigate = useNavigate();
        useEffect(() =>{
            axios.get("http://localhost:3000/api/auth/users")
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        })
        const handledelete = (id) => {
  axios.delete(`http://localhost:3000/api/auth/users/${id}`)
    .then(res => {
        alert("Deleted Successfully ✅");
        navigate("/manage");
    })
    .catch(err => console.log(err));
};
         return (


        <>
        <h1>Manage Users</h1>
       
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
               {data.map((item)=> (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td className='space-x-2 '>
                        <button className='bg-blue-500 text-white px-2 py-1 rounded' onClick={() => navigate(`/update/${item.id}`)}>Edit</button>
                        <button className='bg-red-500 text-white px-2 py-1 rounded' onClick={() => handledelete(item.id)}>Delete</button>
                    </td>
                </tr>
                
               ))}
               
            </tbody>
        </table>

        
        </>
    )
}

export default Manage;