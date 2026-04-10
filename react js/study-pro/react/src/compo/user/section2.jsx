import React from "react";

const Section2 = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Why Choose StudiPRO?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Expert Mentors</h3>
            <p className="mt-3 text-gray-600">
              Learn from professionals with real-world experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Flexible Learning</h3>
            <p className="mt-3 text-gray-600">
              Learn at your own pace with lifetime access.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Certification</h3>
            <p className="mt-3 text-gray-600">
              Get industry-recognized certificates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;