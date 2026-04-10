import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function Career() {
   const [data,setdata]=useState([])
      
       useEffect(()=>{
          const fetchid = async() =>{
               try{
                  const res  = await axios.get(`http://localhost:5000/auth/api/carrier`)
               setdata(res.data)
               }catch(err){
                  console.log(err);
               }
          } 
          fetchid();
       },[])
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Join the StudiPRO Team
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Help us transform education through technology. 
            We're building the future of online learning and 
            looking for passionate people to grow with us.
          </p>
        </div>

       

        {/* Open Positions */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Open Positions
        </h2>
       
        {data.map((item) => (
  <div key={item._id} className="space-y-6 max-w-4xl mx-auto p-2">
    <div className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row md:justify-between md:items-center">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">
          {item.jobtitle}
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          {item.type} • {item.location} • {item.experience}
        </p>
      </div>
      <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        Apply Now
      </button>
    </div>
  </div>
))}
         </div>
    </div>
  );
}

export default Career;