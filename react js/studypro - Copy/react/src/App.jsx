import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Courses from "./compo/user/courses";
import Pricing from "./compo/user/pricing";
import Contact from "./compo/user/contact";
import About from "./compo/user/about";
import Career from "./compo/user/carrier";
import Enroll from "./compo/user/endroll";

// Admin Files
import AdminLogin from "./compo/admin/login";
import Dashboard from "./compo/admin/dashboard";
import AdminAddCourse from "./compo/admin/courses-data/add-course";
import ManageCoursesTable from "./compo/admin/courses-data/manage-courses";
import EditCourse from "./compo/admin/courses-data/update-course";
import AddAdmin from "./compo/admin/admin-data/add-admin";
import ManageAdmin from "./compo/admin/admin-data/manage-admin";
import EditAdmin from "./compo/admin/admin-data/update-admin";
import ManageEnrollments from "./compo/admin/Endrolladmin";
import AddJob from "./compo/admin/jobs/add-jobs";
import ManageJobs from "./compo/admin/jobs/manage-jobs";
import EditJob from "./compo/admin/jobs/update-jobs";
import ManagePayments from "./compo/admin/payments/ManagePayments";
import ManageUsers from "./compo/admin/users/ManageUsers";

// User Panel Files
import UserAuth from "./compo/user/UserAuth";
import UserDashboard from "./compo/user/UserDashboard";
import UserGuard from "./compo/user/UserGuard";

import AuthProvider from "./compo/admin/AuthContext";
import AuthGuard from "./compo/admin/AuthGuard";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/carrier" element={<Career />} />
          <Route path="/endroll" element={<Enroll />} />

          {/* User Auth & Dashboard */}
          <Route path="/user/auth" element={<UserAuth />} />
          <Route path="/user/dashboard" element={<UserGuard><UserDashboard /></UserGuard>} />

          {/* Admin Login */}
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected Admin Routes */}
          <Route path="/admin/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
          <Route path="/admin/payments" element={<AuthGuard><ManagePayments /></AuthGuard>} />
          <Route path="/admin/Endrolladmin" element={<AuthGuard><ManageEnrollments /></AuthGuard>} />
          <Route path="/admin/users" element={<AuthGuard><ManageUsers /></AuthGuard>} />
          
          {/* Courses Management */}
          <Route path="/admin/courses-data/add-course" element={<AuthGuard><AdminAddCourse /></AuthGuard>} />
          <Route path="/admin/courses-data/manage-courses" element={<AuthGuard><ManageCoursesTable /></AuthGuard>} />
          <Route path="/update-course/:id" element={<AuthGuard><EditCourse /></AuthGuard>} />
          
          {/* Admin Management */}
          <Route path="/admin/admin-data/add-admin" element={<AuthGuard><AddAdmin /></AuthGuard>} />
          <Route path="/admin/admin-data/manage-admin" element={<AuthGuard><ManageAdmin /></AuthGuard>} />
          <Route path="/admin/admin-data/manage-admin/update-admin/:id" element={<AuthGuard><EditAdmin /></AuthGuard>} />
          
          {/* Jobs Management */}
          <Route path="/admin/jobs/add-jobs" element={<AuthGuard><AddJob /></AuthGuard>} />
          <Route path="/admin/jobs/manage-jobs" element={<AuthGuard><ManageJobs /></AuthGuard>} />
          <Route path="/admin/jobs/manage-jobs/update-jobs/:id" element={<AuthGuard><EditJob /></AuthGuard>} />

        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;