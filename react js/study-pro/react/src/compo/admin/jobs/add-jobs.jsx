import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../user/navbar";
import Footer from "../../user/footer";

function AddJob() {
  // ✅ State for job form
  const [jobs, setJobs] = useState({
    jobtitle: "",
    location: "",
    experience: "",
    type: "",
  });

  const navigate = useNavigate();

  // ✅ Handle input change
  const onHandleChange = (e) => {
    setJobs({
      ...jobs,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace "/api/jobs" with your backend endpoint
      const { data } = await axios.post("http://localhost:5000/auth/api/carrier", jobs);
      alert("Job added successfully!");
      navigate("./manage-jobs"); // Navigate to jobs list page
    } catch (err) {
      console.log(err);
      alert("Error adding job");
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="bg-gray-50 py-16 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Job
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Job Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Job Title
            </label>
            <input
              type="text"
              name="jobtitle"
              value={jobs.jobtitle}
              onChange={onHandleChange}
              placeholder="Frontend Developer"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
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
              value={jobs.location}
              onChange={onHandleChange}
              placeholder="Remote / Onsite"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
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
              value={jobs.experience}
              onChange={onHandleChange}
              placeholder="2+ Years"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Job Type
            </label>
            <select
              name="type"
              value={jobs.type}
              onChange={onHandleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>

    <Footer></Footer>
    </>
  );
}

export default AddJob;