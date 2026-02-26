import React, { useState } from "react";
import logo from "../../assets/Glass-bg/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Better social icons

function Footer() {
     const [email,setemail] = useState("");

     const submit = ()=>{
      if (!email){
        alert("enter your email");
        value.current.focus();
        return;
      }
    

     const confirm = window.confirm(`is your email : ${email}`)
        if(confirm){
          alert(" thanks for suscribe")
          setemail(" ");
        }else {
          value.current.focus();
        }
      };
  return (
    <footer className="px-6 pb-10 mt-20">
      <section className="bg-green-950 rounded-3xl p-8 md:p-12 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 text-white">
        
        {/* Column 1: Logo and About */}
        <div className="flex-1 max-w-sm">
          <div className="flex items-center gap-2 text-3xl font-bold">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span>Planto</span>
          </div>
          <p className="mt-6 text-gray-300 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nulla assumenda qui eius voluptatum quam eligendi veritatis.
          </p>
          <div className="flex gap-6 mt-10">
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-green-950 transition-all"><FaFacebookF /></a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-green-950 transition-all"><FaTwitter /></a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-green-950 transition-all"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-semibold mb-6">Quick Links</h1>
          <ul className="space-y-4 text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Plant Types</a></li>
            <li><a href="#" className="hover:text-white transition-colors">More</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div className="flex-1 max-w-md">
          <h1 className="text-2xl font-semibold mb-6">For Every Update</h1>
          <div className="flex items-center border border-white rounded-xl overflow-hidden p-1">
            <input 
              type="email" 
              placeholder="Enter email..." 
              className="bg-transparent border-none outline-none px-4 py-2 w-full placeholder:text-gray-400"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
            />
            <button className="bg-white text-green-950 px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition-all "onClick={submit} >
              Subscribe
            </button>
          </div>
          <p className="mt-16 text-gray-400 text-sm md:text-base">
            Planto © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

      </section>
    </footer>
  );
}

export default Footer;