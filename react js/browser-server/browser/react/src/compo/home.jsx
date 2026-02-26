import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">

        {/* Navbar */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center px-8 py-5 relative"
        >

          {/* Left Side */}
          <div className="flex items-center gap-4">
            
            {/* Hamburger */}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="text-2xl font-bold"
            >
              ☰
            </button>

            <h1 className="text-2xl font-bold tracking-wide">MyApp</h1>
          </div>

          <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
            <Link to="/login">Login</Link>
          </button>

          {/* Dropdown Menu */}
          {openMenu && (
            <div className="absolute top-16 left-8 bg-white text-black rounded-lg shadow-lg w-48 p-4 space-y-3">

              <Link 
                to="/adddata" 
                className="block hover:text-indigo-600"
                onClick={() => setOpenMenu(false)}
              >
                Add Data
              </Link>

              <Link 
                to="/manage" 
                className="block hover:text-indigo-600"
                onClick={() => setOpenMenu(false)}
              >
                Manage
              </Link>

              <Link 
                to="/profile" 
                className="block hover:text-indigo-600"
                onClick={() => setOpenMenu(false)}
              >
                Profile
              </Link>

              <Link 
                to="/settings" 
                className="block hover:text-indigo-600"
                onClick={() => setOpenMenu(false)}
              >
                Settings
              </Link>

            </div>
          )}

        </motion.div>

        {/* Main Content (UNCHANGED) */}
        <div className="flex flex-col items-center justify-center px-4 mt-20">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-center"
          >
            Welcome to Your Dashboard 🚀
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-center text-indigo-100 mt-4 max-w-xl"
          >
            You are successfully authenticated. This is your home page where
            you can manage everything.
          </motion.p>

          {/* Cards Section (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-6xl"
          >
            {[
              { title: "Profile", desc: "Manage your personal information" },
              { title: "Analytics", desc: "View insights and performance" },
              { title: "Settings", desc: "Customize your experience" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-indigo-100">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </>
  );
}

export default Home;