import React from "react";

const Section1 = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Learn Skills That Matter <br /> For Your Career
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Online courses from industry experts. Learn anytime, anywhere.
          </p>

          <div className="mt-8 space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
              Explore Courses
            </button>
            <button className="border border-white px-6 py-3 rounded-lg">
              Watch Demo
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="rounded-xl shadow-lg"
            alt="Online Learning"
          />
        </div>

      </div>
    </section>
  );
};

export default Section1;