import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddData() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productname: "",
    price: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        //   Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(formData)   
      });

      const data = await res.json();
      console.log(data);

      if (data.message === "User created successfully") {
        alert("Data added successfully 🎉");
        navigate("/manage"); // redirect after success
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800">   
          Add Product
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
             productname
            </label>
            <input
              type="text"
              name="productname"
              placeholder="Enter name"
              value={formData.productname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Add Data
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddData;