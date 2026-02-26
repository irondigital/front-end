import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


function Update() {
 const navigate = useNavigate();

      const [data, setData] = useState([]);
      const { id } = useParams();
    //   console.log(id);
            useEffect(() =>{
                
                axios.get(`http://localhost:5000/api/auth/user/${id}`)
                .then(res => {
                    setData(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
            },[id])

       const handleChange = (e) => {
  setData({
    ...data,
    [e.target.name]: e.target.value
  });
};

const handleUpdate = (e) => {
  e.preventDefault();

  axios.put(`http://localhost:5000/api/auth/user/${id}`, data)
    .then(res => {
      alert("Updated Successfully ✅");
      navigate("/manage");
    })
    .catch(err => console.log(err));
};




  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center p-10">
      
      <div className="bg-slate-800 text-white rounded-xl shadow-xl w-full max-w-lg p-8">
        
        <h2 className="text-3xl font-bold mb-6 text-center">
          Update Product
        </h2>

        {/* Form UI Only */}
       <form className="space-y-5">

  {data && (
    <>
      <div>
        <label className="block mb-2 text-sm">ID</label>
        <input
          type="text"
          value={data._id}
          readOnly
          className="w-full p-3 rounded bg-slate-700 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm">productname</label>
        <input
          type="text"
          defaultValue={data.productname}
           onChange={handleChange}
              name="productname"
          className="w-full p-3 rounded bg-slate-700 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm">Price</label>
        <input
          type="number"
          defaultValue={data.price}
              onChange={handleChange}
                name="price"    
          className="w-full p-3 rounded bg-slate-700 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm">Description</label>
        <input
          type="text"
          defaultValue={data.description}
                onChange={handleChange}
                name="description"
          className="w-full p-3 rounded bg-slate-700 outline-none"
        />
      </div>
    </>
  )}

  <div className="flex justify-between pt-4">
    <button type="button" className="bg-gray-500 px-5 py-2 rounded">
      Cancel
    </button>

    <button type="button" onClick={handleUpdate} className="bg-yellow-500 px-5 py-2 rounded">
      Update
    </button>
  </div>

</form>

      </div>
    </div>
  );
}

export default Update;