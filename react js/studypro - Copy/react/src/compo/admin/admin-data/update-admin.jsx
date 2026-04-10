import React, { useState } from "react";
import Navbar from "../../user/navbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const EditAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password:"",
    role: "admin",
  });
const {id} = useParams();
const navigate = useNavigate();
    // console.log(id)
   useEffect(()=>{
    const getid = async ()=>{
      try{
        const res = await axios.get(`http://localhost:5000/auth/api/addadmin/${id}`)
        // console.log(res)
      setFormData(res.data);
      }catch(err){
        console.log(err)
      }
    }  
    getid();
  },[])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

   const handleUpadate = async (e) => {
  e.preventDefault();

  try {
    await axios.put(
      `http://localhost:5000/auth/api/addadmin/${id}`,
      formData
    );

    alert("Data updated successfully");

    
    navigate("/admin/admin-data/manage-admin");

  } catch (err) {
    console.log(err);
  }
};

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
            Edit Admin
          </h2>

          <form className="space-y-5" onSubmit={handleUpadate}>
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block mb-1 font-medium">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="admin">Admin</option>
                <option value="superadmin">Super Admin</option>
                <option value="editor">Editor</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
             
            >
              Update Admin
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAdmin;