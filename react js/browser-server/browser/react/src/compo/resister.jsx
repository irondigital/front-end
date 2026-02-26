import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

   const data = localStorage.setItem("token", res.data);
   const data1 = await res.json()
    console.log(data)

    if (data1.success) {
      alert("Registration successful 🎉");
      navigate("./login");
    } else {
      alert(data1.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Register to continue
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?
          <span
            onClick={() => navigate("./login")}
            className="text-indigo-600 font-medium cursor-pointer hover:underline ml-1"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;