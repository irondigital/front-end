const Menu = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-3xl font-bold">Menu</h2>

      <div className="space-y-3">
        <div className="flex justify-between bg-white shadow p-3 rounded">
          <span>Margherita Pizza</span>
          <span className="text-red-600 font-semibold">₹350</span>
        </div>

        <div className="flex justify-between bg-white shadow p-3 rounded">
          <span>BBQ Chicken Burger</span>
          <span className="text-red-600 font-semibold">₹280</span>
        </div>

        <div className="flex justify-between bg-white shadow p-3 rounded">
          <span>Cold Coffee</span>
          <span className="text-red-600 font-semibold">₹120</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
