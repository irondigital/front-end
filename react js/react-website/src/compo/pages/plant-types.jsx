import React from "react";

function PlantTypes() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center text-white py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Our Plant Types
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg opacity-80">
          Discover a wide variety of greenery plants carefully selected to suit
          your home, office, and outdoor spaces. Each plant type is chosen to
          bring beauty, freshness, and positive energy into your life.
        </p>
      </section>

      {/* Plant Categories */}
      <section className="px-4 md:px-20 pb-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {/* Indoor Plants */}
        <div className="bg-green-800 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-semibold mb-3">
            🌱 Indoor Plants
          </h2>
          <p className="opacity-80 leading-relaxed">
            Indoor plants are perfect for homes and offices. They improve air
            quality, reduce stress, and add a natural aesthetic to your space.
            These plants require minimal sunlight and maintenance.
          </p>
        </div>

        {/* Outdoor Plants */}
        <div className="bg-green-800 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-semibold mb-3">
            🌿 Outdoor Plants
          </h2>
          <p className="opacity-80 leading-relaxed">
            Outdoor plants enhance gardens, balconies, and landscapes. They grow
            well in natural sunlight and create a refreshing environment around
            your home.
          </p>
        </div>

        {/* Flowering Plants */}
        <div className="bg-green-800 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-semibold mb-3">
            🌸 Flowering Plants
          </h2>
          <p className="opacity-80 leading-relaxed">
            Flowering plants add color, fragrance, and beauty to any space. They
            are ideal for decoration and bring joy with their vibrant blooms.
          </p>
        </div>

        {/* Succulents */}
        <div className="bg-green-800 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-semibold mb-3">
            🌵 Succulents & Cactus
          </h2>
          <p className="opacity-80 leading-relaxed">
            Succulents and cactus are low-maintenance plants with a modern look.
            They require very little water and are perfect for beginners.
          </p>
        </div>

        {/* Medicinal Plants */}
        <div className="bg-green-800 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-semibold mb-3">
            🍃 Medicinal Plants
          </h2>
          <p className="opacity-80 leading-relaxed">
            Medicinal plants are known for their healing and wellness benefits.
            They are widely used in natural remedies and promote healthy living.
          </p>
        </div>

        {/* Air Purifying Plants */}
        <div className="bg-green-800 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-semibold mb-3">
            💨 Air Purifying Plants
          </h2>
          <p className="opacity-80 leading-relaxed">
            These plants help remove toxins from the air, improve oxygen levels,
            and create a healthier indoor environment for your family.
          </p>
        </div>

      </section>
    </>
  );
}

export default PlantTypes;
