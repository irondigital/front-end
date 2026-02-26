import React from "react";

import emailjs from "@emailjs/browser";


function Contact() {

  const sendemail = (e) => {
e.preventDefault()


    emailjs.sendForm(
      "service_bh0s7gl",
      "template_r03dngb",
      e.target,
      "0udxnkWUecSkP13ZG"
    )
      .then(() => {
        alert("Message Sent Successfully!");
      })
      .catch((err) => {
        console.log("EmailJS Error:", err);
      });
  }


  return (
    <>
      {/* Hero Section */}
      <section className="text-center text-white py-20 px-4  bg-green-900">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg opacity-80">
          Have questions or suggestions? Reach out to us and we'll be happy to help you bring greenery into your life.
        </p>
      </section>

      {/* Contact Form */}
      <section className="px-4 md:px-20 py-16 flex justify-center">
        <form className="bg-green-800 p-8 rounded-2xl w-full max-w-lg text-white space-y-6" onSubmit={sendemail}>
          <div>
            <label className="block mb-2 font-medium" >Name</label>
            <input
              type="text"
              placeholder="Your Name"
              name="Name"
              className="w-full p-3 rounded-lg bg-green-900 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              name="Email"
              className="w-full p-3 rounded-lg bg-green-900 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              placeholder="Your Message"
             name="message"
              className="w-full p-3 rounded-lg bg-green-900 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 h-32 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
