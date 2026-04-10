import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Enroll() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     try{
      axios.post("http://localhost:5000/auth/api/Studentdata",formData)

      alert("added successfully")
     navigate("/")
      

      // reset form
      setFormData({
        
      });
     }catch(err){
      console.log(err)
     }
  
  }

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h1 className="text-3xl font-bold mb-2 text-blue-600">
            Enrollment Form
          </h1>

          <p className="text-gray-600 mb-8">
            Fill the form below to complete your enrollment
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Course
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full bg-gray-100 border rounded-lg px-4 py-2"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Message (optional)
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-blue-500"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Confirm Enrollment
              </button>
            </div>

          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Enroll;