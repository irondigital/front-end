const Sidebar = () => {
  return (
    <aside className="w-60 bg-gray-100 h-full p-4 space-y-3 border-r">
      <h2 className="font-bold text-lg mb-2">Menu Categories</h2>

      <ul className="space-y-2 text-gray-700">
        <li>Pizza</li>
        <li>Burgers</li>
        <li>Pasta</li>
        <li>Beverages</li>
        <li>Desserts</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
