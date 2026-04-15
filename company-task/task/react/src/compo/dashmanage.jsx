import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function DashManage(){
    const [data,setdata] = useState();
    const {id} = useParams();   
  const navigate = useNavigate();

  const fetchdata = ()=>{
    axios.get("http://localhost:5000/auth/api/dashboard")
    .then(res=> {
        // console.log(res.data);
        setdata(res.data.data)
    })
    .catch(err=>console.log(err))
  }
    useEffect(()=>{
        fetchdata();
    },[]);

    

    const handledelete = (id)=>{
        axios.delete(`http://localhost:5000/auth/api/dashboard/${id}`)
        .then(res=> {
            // console.log(res.data);
            setdata(data.filter(item=>item._id !== id))
        })
        .catch(err=>console.log(err))
    }

    return(
    <>
    <h1 className="text-3xl font-bold text-center mt-5">Manage Dashboard</h1>
    <table className="table-auto w-full mt-5">
        <thead>
            <tr>
                <th className="border border-gray-400 px-4 py-2">Title</th>
                <th className="border border-gray-400 px-4 py-2">Content</th>
                <th className="border border-gray-400 px-4 py-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            {data?.map((blog)=>
                (
                     <tr key={blog._id}>
                    <td className="border border-gray-400 px-4 py-2">{blog.title}</td>
                    <td className="border border-gray-400 px-4 py-2">{blog.content}</td>
                    <td className="border border-gray-400 px-4 py-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"

                            onClick={() => navigate(`/dashboard/dashupdate/${blog._id}`)}>Edit</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={()=>handledelete(blog._id)}>Delete</button>
                    </td>
                </tr>
                )
            )}
        </tbody>
    </table>
    </>
   )}


export default DashManage;

