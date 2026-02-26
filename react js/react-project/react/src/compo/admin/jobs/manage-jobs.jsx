import React, { useEffect, useState } from "react";
import Navbar from "../../user/navbar";
import Footer from "../../user/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ManageJobs() {
    const navigate = useNavigate();
  const [data,setdata] = useState([]);
  const i=0;
 
  useEffect(()=>{
    const fetch=async()=>{
       try{
         const res = await axios.get("http://localhost:5000/auth/api/carrier")
        //  console.log(data)
        setdata(res.data);
       }catch(err){
        console.log(err)
       }

    }
    fetch();
  },[])
  
const handledelete = (id)=>{
    try{
        const data =  axios.delete(`http://localhost:5000/auth/api/carrier/${id}`)
     setdata((prevData) =>
      prevData.filter((item) => item._id !== id)
    );
    }catch(err){
        console.log(err)
    }

}


  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Manage Jobs
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border">ID</th>
                  <th className="p-3 border">Job Title</th>
                  <th className="p-3 border">Location</th>
                  <th className="p-3 border">Experience</th>
                  <th className="p-3 border">Type</th>
                  <th className="p-3 border text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
               {data.map((job,i)=>{
                return (
                     <tr key={i+1} className="hover:bg-gray-50">
                    <td className="p-3 border">{i + 1}</td>
                    <td className="p-3 border font-medium">
                      {job.jobtitle}
                    </td>
                    <td className="p-3 border">{job.location}</td>
                    <td className="p-3 border">{job.experience}</td>
                    <td className="p-3 border">{job.type}</td>
                    <td className="p-3 border text-center space-x-2">
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                      onClick={() => navigate(`/admin/jobs/manage-jobs/update-jobs/${job._id}`)}>
                        Edit
                      </button>
                      <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                      onClick={()=>handledelete(job._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                )
               })}
              </tbody>
            </table>
          </div>

          {/* Add Job Button */}
          <div className="text-right mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              + Add New Job
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ManageJobs;