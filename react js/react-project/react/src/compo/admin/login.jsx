import { useState } from "react";

function AdminLogin() {
  


  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center justify-center">
      
      {/* Login Card */}
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">

        {/* Logo / Branding */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
              E
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            StudyPRO Admin
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Sign in to manage your platform
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit="" className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="admin@edupro.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © 2026 StudiPRO. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;