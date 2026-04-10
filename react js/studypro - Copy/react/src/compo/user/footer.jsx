import React from "react";
import { Link } from "react-router-dom";
import { Globe, Camera, Briefcase, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-24 pb-12 text-gray-400 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">

        {/* Brand Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center group">
            <div className="bg-indigo-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-xl shadow-lg mr-3">
              S
            </div>
            <h1 className="text-2xl font-display font-extrabold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              Studi<span className="text-indigo-500">PRO</span>
            </h1>
          </Link>
          <p className="text-sm font-medium leading-relaxed max-w-xs">
            Empowering the next generation of digital leaders with high-impact, career-focused online education.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"><Globe size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"><Camera size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"><Briefcase size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-extrabold text-lg mb-8 font-display">Resources</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><Link to="/courses" className="hover:text-indigo-400 transition-colors">Course Catalog</Link></li>
            <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Membership & Pricing</Link></li>
            <li><Link to="/about" className="hover:text-indigo-400 transition-colors">Enterprise Programs</Link></li>
            <li><Link to="/carrier" className="hover:text-indigo-400 transition-colors">Career Services</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-extrabold text-lg mb-8 font-display">Support</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Help Center</Link></li>
            <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
            <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-white font-extrabold text-lg mb-8 font-display">Get in Touch</h4>
          <div className="flex items-start space-x-4">
            <Mail className="w-5 h-5 text-indigo-500 mt-0.5" />
            <div className="text-sm font-bold">
              <span className="block text-white mb-1">Email Support</span>
              Milanbalas@gmail.com
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="w-5 h-5 text-indigo-500 mt-0.5" />
            <div className="text-sm font-bold">
              <span className="block text-white mb-1">Call Center</span>
              +91 91730 34463
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-600">
          © 2026 StudiPRO Global Inc. All rights reserved.
        </p>
        <p className="text-xs font-bold text-gray-600">
          Designed for Excellence by <span className="text-indigo-500 uppercase tracking-tighter">Premium Dev</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;