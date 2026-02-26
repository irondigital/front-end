import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Register from "./resister";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      // Save token
       const data = localStorage.setItem("token", res.data.token);
       console.log(data)

      // Redirect after login
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full mb-5 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Login
        </button>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          <a href="./resister">Resister</a>
        </button>
      </form>
    </div>
  );
}

export default Login;


   