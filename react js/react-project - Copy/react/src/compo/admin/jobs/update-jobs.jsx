import React, { useEffect, useState } from "react";
import Navbar from "../../user/navbar";
import Footer from "../../user/footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditJob() {
   const navigate = useNavigate();
    const [data,setdata]=useState({
         jobtitle: "",
         location: "",
         experience: "",
         type: "",
    })
    const {id}  = useParams();
     useEffect(()=>{
        const fetchid = async() =>{
             try{
                const res  = await axios.get(`http://localhost:5000/auth/api/carrier/${id}`)
             setdata(res.data)
             }catch(err){
                console.log(err);
             }
        } 
        fetchid();
     },[id])
    
     const handlechange = (e)=>{
        setdata({
            ...data,
            [e.target.name] : e.target.value
        })
     }

      const handleupdate = async(e)=>{
        e.preventDefault();
        try{
            const data2 = await axios.put(`http://localhost:5000/auth/api/carrier/${id}`,data)
            alert("data updated")
            navigate("/admin/jobs/manage-jobs");
        }catch(err){
            console.log(err)
        }
      }

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 py-16 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Edit Job
          </h2>

          <form className="space-y-4" onSubmit={handleupdate}>
            {/* Job Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Job Title
              </label>
              <input
                type="text"
               name="jobtitle"
               value={data.jobtitle}
               onChange={handlechange}
                
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
               value={data.location}
               onChange={handlechange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Experience
              </label>
              <input
                type="text"
                name="experience"
               value={data.experience}
               onChange={handlechange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Job Type
              </label>
              <select
               name="type"
               value={data.type}
               onChange={handlechange} 
              
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-4 pt-4">
              <button
                type="button"
                className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                // onClick={navigate("/admin/jobs/manage-jobs")}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EditJob;