const Content = () => {
  return (
    <main className="flex-1 p-6 space-y-6 overflow-auto">

      {/* Hero Style */}
      <section className="bg-red-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold">Welcome to TasteBite Restaurant</h2>
        <p className="mt-2 w-[400px]">
          Fresh, delicious meals made with quality ingredients.
        </p>
      </section>

      {/* About */}
      <section>
        <h3 className="text-xl font-bold">About Us</h3>
        <p className="text-gray-600 mt-1 w-[450px]">
          We specialize in Italian dishes prepared by experienced chefs.
        </p>
      </section>

      {/* Sample Menu */}
      <section>
        <h3 className="text-xl font-bold mb-2">Popular Dishes</h3>

        <div className="space-y-3">
          <div className="flex justify-between bg-white shadow p-3 rounded">
            <span>Margherita Pizza</span>
            <span className="text-red-600">₹350</span>
          </div>

          <div className="flex justify-between bg-white shadow p-3 rounded">
            <span>BBQ Chicken Burger</span>
            <span className="text-red-600">₹280</span>
          </div>

          <div className="flex justify-between bg-white shadow p-3 rounded">
            <span>Cold Coffee</span>
            <span className="text-red-600">₹120</span>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Content;
