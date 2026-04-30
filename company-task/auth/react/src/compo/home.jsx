import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <div style={{ minHeight: "100vh", padding: "40px" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <h2>MERN Auth App</h2>

        <div>
          <Link to={"/register"}><button style={{ marginRight: "10px" }}>
            Register
          </button></Link>
            <Link to={"/login"}>
            <button>
            Login
          </button>
          </Link>
        </div>
      </nav>

      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Welcome to Home Page</h1>
        <p>
          This is your JWT Authentication project home page.
        </p>

        {token ? (
          <h3>User is Logged In ✅</h3>
        ) : (
          <h3>Please Login First 🔐</h3>
        )}
      </div>
    </div>
  );
};

export default Home;