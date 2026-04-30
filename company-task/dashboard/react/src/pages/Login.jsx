import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = async () => {
  try {
    const res = await axios.post(
      "http://localhost:5000/auth/api/login",
      { email, password }
    );

    localStorage.setItem("token", res.data.token);
    navigate("/Dashboard");

  } catch (error) {
    console.log(error.response.data);
    alert(error.response.data.message);
  }
};

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p>
          No account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;