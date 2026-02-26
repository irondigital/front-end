import React from "react";
import avtar2 from "../../assets/Plant/avtar2.jpg";
import avtar3 from "../../assets/Plant/avtar3.jpg";
import avtar4 from "../../assets/Plant/avtar4.jpg";
import { FaStar } from "react-icons/fa";

function Review() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl text-white font-bold text-center mt-16 md:mt-20">
        Our Review
      </h1>

      <section className="flex flex-col md:flex-row gap-6 px-4 md:px-20 mt-10">
        
        {/* Review Card 1 */}
        <div className="bg-green-700 w-full md:w-1/3 rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={avtar2}
              alt="User"
              className="w-12 h-12 rounded-full border border-white p-1 object-cover"
            />
            <div>
              <h4 className="text-lg text-white font-medium capitalize">
                Artoan Tyae
              </h4>
              <span className="flex text-yellow-500">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
            </div>
          </div>
          <p className="text-white opacity-80 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            corporis reiciendis officia sunt adipisci nulla corrupti voluptas et.
          </p>
        </div>

        {/* Review Card 2 */}
        <div className="bg-green-700 w-full md:w-1/3 rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={avtar3}
              alt="User"
              className="w-12 h-12 rounded-full border border-white p-1 object-cover"
            />
            <div>
              <h4 className="text-lg text-white font-medium capitalize">
                Alen Mark
              </h4>
              <span className="flex text-yellow-500">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
            </div>
          </div>
          <p className="text-white opacity-80 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            corporis reiciendis officia sunt adipisci nulla corrupti voluptas et.
          </p>
        </div>

        {/* Review Card 3 */}
        <div className="bg-green-700 w-full md:w-1/3 rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={avtar4}
              alt="User"
              className="w-12 h-12 rounded-full border border-white p-1 object-cover"
            />
            <div>
              <h4 className="text-lg text-white font-medium capitalize">
                Sara Khan
              </h4>
              <span className="flex text-yellow-500">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
            </div>
          </div>
          <p className="text-white opacity-80 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            corporis reiciendis officia sunt adipisci nulla corrupti voluptas et.
          </p>
        </div>

      </section>
    </>
  );
}

export default Review;
