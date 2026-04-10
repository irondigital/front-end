import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can connect API here later
    console.log(formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      <Navbar />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Get in Touch with StudiPRO
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Have questions about courses, pricing, or career guidance?
              Our team is here to help you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Contact Information
                </h3>
                <p className="mt-3 text-gray-600">
                  Reach out to us through any of the following methods.
                </p>
              </div>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Office Address</h4>
                    <p className="text-gray-600">
                      StudiPRO Learning Pvt. Ltd.<br />
                      Rajkot, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                    📧
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">
                      support@StudiPRO.com<br />
                      careers@StudiPRO.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">
                      +91 91730 34463<br />
                      Mon – Sat (9:00 AM – 7:00 PM)
                    </p>
                  </div>
                </div>

              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700 font-medium">
                  Trusted by 50,000+ students across India 🇮🇳
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Average response time: under 24 hours
                </p>
              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow">

              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-5" onSubmit={handleSubmit}>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Course / Pricing / Support"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;