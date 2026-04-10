import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Enroll from "./endroll";

const Section4 = () => {

  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/api/addcourses");
        setdata(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();   // ✅ CALL FUNCTION
  }, []);          // ✅ ADD DEPENDENCY ARRAY

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Courses
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div 
              key={item._id} 
              className="bg-white rounded-xl shadow transition transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-t-xl h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2">
                  {item.desc}
                </p>
                <p className="mt-3 font-bold text-blue-600">
                  ₹{item.price}
                </p>
                <Link to="./endroll">
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
                  Enroll Now
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section4;