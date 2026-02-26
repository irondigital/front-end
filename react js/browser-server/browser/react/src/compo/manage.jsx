    import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Update from "./update";
 
    function Manage() {
        var id = 0;
         const [data, setData] = useState([]);
        useEffect(() =>{
            axios.get("http://localhost:5000/api/auth/user")
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        })
//    console.log(data);
const navigate = useNavigate();


const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this item?")) {
    axios.delete(`http://localhost:5000/api/auth/user/${id}`)
        .then(res => {  
            alert("Deleted Successfully 🗑️")
            navigate("/manage")
            })
            .catch(err => console.log(err))
            }};
    
return (
          <div className="min-h-screen bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 p-10">

    <h2 className="text-3xl font-bold mb-6 text-white">
      Manage Data
    </h2>

        {/* Form */}
        

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full text-left">
            <thead className="bg-indigo-600 text-white">
                <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Title</th>
                <th className="p-3">Price</th>
                 <th className="p-3">Description</th>
                <th className="p-3 text-center">Actions</th>
                </tr>
            </thead>

            <tbody>
                {data.length === 0 ? (
                <tr>
                    <td colSpan="4" className="text-center p-5">
                    No Data Found
                    </td>
                </tr>
                ) : (
                data.map((item,id) => (
                    <tr key={item._id} className="border-t">
                    <td className="p-3">{id+1}</td>
                    <td className="p-3">{item.productname}</td>
                    <td className="p-3">{item.price}</td>
                    <td className="p-3">{item.description}</td>
                    <td className="p-3 text-center space-x-3">

                        <button
                       onClick={() => navigate(`/update/${item._id}`)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                        >
                        Update
                        </button>

                        <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                        >
                        Delete
                        </button>

                    </td>
                    </tr>
                ))
                )}
            </tbody>
            </table>
        </div>

        </div>
    );
    }

    export default Manage;