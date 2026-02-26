import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/mainadmin/dashboard");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-500 relative overflow-hidden">

      {/* Background animated circles */}
      <div className="absolute w-72 h-72 bg-green-800 rounded-full blur-3xl opacity-40 -top-10 -left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-green-600 rounded-full blur-3xl opacity-40 bottom-10 right-10 animate-pulse"></div>

      {/* Card */}
      <div className="relative w-[90%] sm:w-[380px] bg-white/10 backdrop-blur-2xl shadow-2xl rounded-3xl p-8 animate-fadein border border-white/20">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-white text-center">
          Admin Login
        </h1>
        <p className="text-white/70 text-center mt-2 text-sm">
          Access your plant admin dashboard
        </p>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>

          {/* Email */}
          <div className="flex items-center gap-3 bg-white/20 rounded-xl px-4 py-3 border border-white/30">
            <FaUser className="text-white/90" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent w-full text-white placeholder-white/70 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-3 bg-white/20 rounded-xl px-4 py-3 border border-white/30">
            <FaLock className="text-white/90" />
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent w-full text-white placeholder-white/70 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="cursor-pointer text-white/70 hover:text-white transition text-sm"
            >
              {show ? "Hide" : "Show"}
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-white text-green-900 font-semibold py-3 rounded-xl shadow-xl hover:bg-white/90 transition uppercase tracking-wide cursor-pointer"
          >
            Login
          </button>

        </form>

        {/* Forgot password */}
        <p className="text-center text-white/80 text-sm mt-4 cursor-pointer hover:text-white transition">
          Forgot Password?
        </p>
      </div>
    </div>
  );
}

export default Login;
