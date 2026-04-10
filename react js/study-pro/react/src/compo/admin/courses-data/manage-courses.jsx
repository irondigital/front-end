import React, { useEffect, useState } from "react";
import Navbar from "../../user/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ManageCoursesTable() {
  const [data,setdata] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
 const fetch = async ()=>{
  try{
    const res = await axios.get("http://localhost:5000/auth/api/addcourses")
    setdata(res.data)
  }catch(err){
    console.error(err);
  }
 }
 fetch();
  },[])

 const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure?");

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `http://localhost:5000/auth/api/addcourses/${id}`
    );

    // remove from UI
    setdata(data.filter((item) => item._id !== id));

  } catch (err) {
    console.log(err);
  }
};
 
  return (
    <>
        <Navbar />

    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Manage Courses
          </h2>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            + Add Course
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-gray-50 text-left text-sm text-gray-600 uppercase tracking-wider">
                 <th className="px-6 py-3">Id</th>
                <th className="px-6 py-3">Course</th>
                <th className="px-6 py-3">Duration</th>
                <th className="px-6 py-3">Level</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">

              {/* Course 1 */}
              {data.map((item) => {
                return (
    <tr
      key={item._id}   // ✅ ADD THIS
      className="hover:bg-gray-50 transition duration-200"
    >
      <td className="px-6 py-4">
        <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 font-medium">
          {item._id}   {/* ✅ use dynamic level */}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt="course image"
            className="w-14 h-14 rounded-lg object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800">
              {item.title}
            </h4>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 text-gray-600 text-sm">
        {item.duration}
      </td>

      <td className="px-6 py-4">
        <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 font-medium">
          {item.level}   {/* ✅ use dynamic level */}
        </span>
      </td>

      <td className="px-6 py-4 text-blue-600 font-semibold">
        ₹{item.price}
      </td>

      <td className="px-6 py-4">
        <div className="flex justify-center gap-3">
       
         <button
  onClick={() => navigate(`/update-course/${item._id}`)}
  className="px-4 py-1 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
>
  Edit
</button>
         
          <button
  onClick={() => handleDelete(item._id)}
  className="px-4 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
>
  Delete
</button>
        </div>
      </td>
    </tr>
  );
})}
              

          

            </tbody>
          </table>
        </div>
      </div>
 </div>

    </>
  );
}

export default ManageCoursesTable;