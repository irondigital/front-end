import React from "react";

function More() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center text-white py-20 px-4 bg-green-900">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">More About Greenarry</h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg opacity-80">
          Discover additional plant collections, gardening tips, and resources to help you bring greenery into your life.
        </p>
      </section>

      {/* Content Section */}
      <section className="px-4 md:px-20 py-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Gardening Tips */}
        <div className="bg-green-800 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-semibold mb-3">🌱 Gardening Tips</h2>
          <p className="opacity-80 leading-relaxed">
            Learn how to take care of your plants, from watering schedules to sunlight requirements. Perfect for beginners and pros alike.
          </p>
        </div>

        {/* Plant Care Guides */}
        <div className="bg-green-800 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-semibold mb-3">🌿 Plant Care Guides</h2>
          <p className="opacity-80 leading-relaxed">
            Detailed guides on indoor and outdoor plant care. Discover tricks to keep your plants healthy and thriving all year round.
          </p>
        </div>

        {/* Plant Collections */}
        <div className="bg-green-800 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-semibold mb-3">🌸 Special Plant Collections</h2>
          <p className="opacity-80 leading-relaxed">
            Explore our exclusive plant collections, including rare indoor plants, decorative succulents, and seasonal favorites.
          </p>
        </div>
      </section>
    </>
  );
}

export default More;
