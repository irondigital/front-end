import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  // Fetch dummy users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-3">
          <p className="hover:text-blue-400 cursor-pointer">🏠 Home</p>
          <p className="hover:text-blue-400 cursor-pointer">👤 Users</p>
          <p className="hover:text-blue-400 cursor-pointer">📦 Products</p>
          <p className="hover:text-blue-400 cursor-pointer">⚙️ Settings</p>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-4">

        <h1 className="text-2xl font-bold mb-6">
          Admin Dashboard 📊
        </h1>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mb-6">
          <div className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-gray-400">Users</h3>
            <p className="text-2xl font-bold">{users.length}</p>
          </div>

          <div className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-gray-400">Revenue</h3>
            <p className="text-2xl font-bold">$12,340</p>
          </div>

          <div className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-gray-400">Orders</h3>
            <p className="text-2xl font-bold">320</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-gray-800 rounded shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-700">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">City</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr
                  key={u.id}
                  className="border-b border-gray-700 hover:bg-gray-700"
                >
                  <td className="p-2">{u.name}</td>
                  <td className="p-2">{u.email}</td>
                  <td className="p-2">{u.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>

    </div>
  );
}