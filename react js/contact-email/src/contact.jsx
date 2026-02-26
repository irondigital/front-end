    import React from "react";
    import emailjs from "@emailjs/browser";

    const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
        "service_xn30chm",
        "template_os6xyoe",
        e.target,
        "0udxnkWUecSkP13ZG"
        )
        .then((res) => {
        console.log("Email Sent:", res);
        alert("Your message has been sent successfully!");
        e.target.reset();
        })
        .catch((err) => {
        console.log("Email Error:", err);
        alert("Failed to send! Try again later.");
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

            {/* Form */}
            <div className="bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                Contact Us
            </h2>

            <form onSubmit={sendEmail} className="space-y-5">

                <div>
                <label className="font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" required placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-200 focus:border-indigo-500 transition" />
                </div>

                <div>
                <label className="font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" required placeholder="example@gmail.com"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-200 focus:border-indigo-500 transition" />
                </div>

                <div>
                <label className="font-medium text-gray-700">Phone Number</label>
                <input type="tel" name="phone" required placeholder="+91 00000 00000"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-200 focus:border-indigo-500 transition" />
                </div>

                <div>
                <label className="font-medium text-gray-700">Message</label>
                <textarea name="message" rows="4" required placeholder="Write your message..."
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-200 focus:border-indigo-500 transition"></textarea>
                </div>

                <button type="submit" className="w-full p-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
                Submit
                </button>
            </form>
            </div>

        </div>
        </div>
    );
    };

    export default Contact;
        