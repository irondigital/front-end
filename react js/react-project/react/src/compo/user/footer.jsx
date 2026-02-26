import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold text-white">StudiPRO</h3>
          <p className="mt-3 text-sm">
            Learn skills that help you grow professionally.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Courses</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="mt-3 text-sm">support@StudiPRO.com</p>
          <p className="text-sm">+91 91730 34463</p>
        </div>

      </div>

      <p className="text-center text-sm mt-8 text-gray-500">
        © 2026 StudiPRO. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;