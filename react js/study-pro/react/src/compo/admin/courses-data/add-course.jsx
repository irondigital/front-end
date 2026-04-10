import { useState } from "react";
import axios from "axios";
import Navbar from "../../user/navbar";
import { useNavigate } from "react-router-dom";


// import Sidebar from "../sidebar";

function AdminAddCourse() {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    duration: "",
    level: "",
    price: "",
    image: "",
    link: "",
  });

  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      
    });
   
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const res = await axios.post("http://localhost:5000/auth/api/addcourses", formData);

     alert("added successfully")
     navigate("./manage-courses")
      

      // reset form
      setFormData({
        title: "",
        desc: "",
        duration: "",
        level: "",
        price: "",
        image: "",
        link: "",
      });
      
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setMessage("");
    }
  };

  return (
    <>
      <Navbar />
       
           
    <div className="min-h-screen bg-gray-100 py-12 px-6">
         
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Course
        </h2>



        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />

          {/* Description */}
          <textarea
            name="desc"
            placeholder="Course Description"
            value={formData.desc}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />

          {/* Duration */}
          <input
            type="text"
            name="duration"
            placeholder="Duration (e.g. 6 Weeks)"
            value={formData.duration}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />

          {/* Level */}
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          {/* Price */}
          <input
            type="text"
            name="price"
            placeholder="Price (e.g. ₹1999)"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />

          {/* Image URL */}
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />

          {/* Course Link */}
          <input
            type="text"
            name="link"
            placeholder="Course Link"
            value={formData.link}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
    
    </>
  );

}

export default AdminAddCourse;