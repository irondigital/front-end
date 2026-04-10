import React from "react";

const Section7 = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Our Expert Instructors
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Instructor 1 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
              className="w-24 h-24 rounded-full mx-auto object-cover"
              alt="Raksi Sharma"
            />
            <h3 className="mt-4 font-semibold text-lg">Raksi Sharma</h3>
            <p className="text-sm text-gray-600">Full Stack Developer</p>
          </div>

          {/* Instructor 2 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              className="w-24 h-24 rounded-full mx-auto object-cover"
              alt="Anita Verma"
            />
            <h3 className="mt-4 font-semibold text-lg">Anita Verma</h3>
            <p className="text-sm text-gray-600">Data Scientist</p>
          </div>

          {/* Instructor 3 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4"
              className="w-24 h-24 rounded-full mx-auto object-cover"
              alt="David Lee"
            />
            <h3 className="mt-4 font-semibold text-lg">David Lee</h3>
            <p className="text-sm text-gray-600">UI / UX Designer</p>
          </div>

          {/* Instructor 4 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              className="w-24 h-24 rounded-full mx-auto object-cover"
              alt="Sophelt Brown"
            />
            <h3 className="mt-4 font-semibold text-lg">Sophelt Brown</h3>
            <p className="text-sm text-gray-600">Cloud Engineer</p>
          </div>

          {/* Instructor 5 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              className="w-24 h-24 rounded-full mx-auto object-cover"
              alt="Aruni Mehta"
            />
            <h3 className="mt-4 font-semibold text-lg">Aruni Mehta</h3>
            <p className="text-sm text-gray-600">Mobile App Developer</p>
          </div>

          {/* Instructor 6 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c"
              className="w-24 h-24 rounded-full mx-auto object-cover"
              alt="Nick Kapoor"
            />
            <h3 className="mt-4 font-semibold text-lg">Nick Kapoor</h3>
            <p className="text-sm text-gray-600">Digital Marketing Expert</p>
          </div>

          {/* Instructor 7 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1557862921-37829c790f19"
              className="w-24 h-24 rounded-full mx-auto object-cover"
              alt="Michael Scott"
            />
            <h3 className="mt-4 font-semibold text-lg">Michael Scott</h3>
            <p className="text-sm text-gray-600">Cyber Security Specialist</p>
          </div>

          {/* Instructor 8 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1546961329-78bef0414d7c"
              className="w-24 h-24 rounded-full mx-auto object-cover"
              alt="Priya Nair"
            />
            <h3 className="mt-4 font-semibold text-lg">Priya Nair</h3>
            <p className="text-sm text-gray-600">
              AI & Machine Learning Trainer
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section7;