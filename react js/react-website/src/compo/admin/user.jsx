function Users() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Users</h2>
      <p className="text-gray-600 text-sm">
        Manage and view all plant admins, customers, or user accounts.
      </p>

      {/* Placeholder Table */}
      <div className="bg-white shadow rounded-xl p-4 min-h-[250px]">
        <p className="text-gray-500 text-sm">User data will appear here.</p>
      </div>
    </div>
  );
}

export default Users;
