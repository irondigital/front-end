import React from "react";

const Section6 = () => {
  return (
    <>
      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Students Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600">
                “EduPro helped me switch my career into web development.”
              </p>
              <h4 className="mt-4 font-semibold">— Aman Patel</h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600">
                “The instructors are very professional and helpful.”
              </p>
              <h4 className="mt-4 font-semibold">— Neha Singh</h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600">
                “Best platform for beginners and professionals.”
              </p>
              <h4 className="mt-4 font-semibold">— Rohit Kumar</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">
                Is lifetime access included?
              </h4>
              <p className="text-gray-600 mt-2">
                Yes, you get lifetime access to all enrolled courses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Do I get a certificate?
              </h4>
              <p className="text-gray-600 mt-2">
                Yes, certificates are provided after course completion.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Are courses beginner-friendly?
              </h4>
              <p className="text-gray-600 mt-2">
                Absolutely! We offer beginner to advanced courses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section6;