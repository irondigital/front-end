function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Users</p>
          <h3 className="text-3xl font-bold">1,245</h3>
          <p className="text-green-600 text-xs mt-1">+18% this month</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Orders</p>
          <h3 className="text-3xl font-bold">389</h3>
          <p className="text-blue-600 text-xs mt-1">+6% this week</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Revenue</p>
          <h3 className="text-3xl font-bold">₹52,430</h3>
          <p className="text-orange-600 text-xs mt-1">+₹7,120 this month</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Growth Rate</p>
          <h3 className="text-3xl font-bold">+27%</h3>
          <p className="text-purple-600 text-xs mt-1">Stable Growth</p>
        </div>
      </div>

      {/* Placeholder Charts Area */}
      <div className="bg-white rounded-xl shadow p-6 h-[300px]">
        <p className="font-semibold mb-2">Growth Chart (coming)</p>
        <p className="text-gray-500 text-sm">We'll add graphs here later.</p>
      </div>

    </div>
  );
}

export default Dashboard;
