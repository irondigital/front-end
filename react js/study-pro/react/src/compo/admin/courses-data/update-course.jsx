import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../user/navbar";
import ManageCoursesTable from "./manage-courses";

function EditCourse() {

  const [data, setdata] = useState({
    title: "",
    desc: "",
    duration: "",
    level: "",
    price: "",
    image: "",
    link: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/auth/api/addcourses/${id}`
        );
        setdata(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourse();
  }, [id]);

  const handlechange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleupdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/auth/api/addcourses/${id}`,
        data
      );
      alert("Update successfully");
      navigate("/admin/courses-data/manage-courses");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-8 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Edit Course</h2>

        <form className="space-y-4" onSubmit={handleupdate}>
          <input type="text" name="title" value={data.title} onChange={handlechange} placeholder="Title" className="w-full border p-2 rounded" />
          <input type="text" name="desc" value={data.desc} onChange={handlechange} placeholder="Description" className="w-full border p-2 rounded" />
          <input type="text" name="duration" value={data.duration} onChange={handlechange} placeholder="Duration" className="w-full border p-2 rounded" />
          <input type="text" name="level" value={data.level} onChange={handlechange} placeholder="Level" className="w-full border p-2 rounded" />
          <input type="text" name="price" value={data.price} onChange={handlechange} placeholder="Price" className="w-full border p-2 rounded" />
          <input type="text" name="image" value={data.image} onChange={handlechange} placeholder="Image URL" className="w-full border p-2 rounded" />
          <input type="text" name="link" value={data.link} onChange={handlechange} placeholder="Course Link" className="w-full border p-2 rounded" />

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Update Course
          </button>
        </form>
      </div>
    </>
  );
}

export default EditCourse;