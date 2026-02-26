import React from "react";

const Section3 = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-blue-600">50K+</h3>
          <p className="text-gray-600 mt-2">Students Enrolled</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-600">120+</h3>
          <p className="text-gray-600 mt-2">Expert Instructors</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-600">300+</h3>
          <p className="text-gray-600 mt-2">Courses Available</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-600">95%</h3>
          <p className="text-gray-600 mt-2">Success Rate</p>
        </div>
      </div>
    </section>
  );
};

export default Section3;