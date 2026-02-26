import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Courses from "./compo/user/courses";
import Pricing from "./compo/user/pricing";
import Contact from "./compo/user/contact";
import About from "./compo/user/about";
import Career from "./compo/user/carrier";
import Enroll from "./compo/user/endroll";

// admin files
import  AdminLogin from "./compo/admin/login";
import Dashboard from "./compo/admin/dashboard";
import Register from "./compo/admin/resister";
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



const App = () => {
  return (

   <Router>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/courses" element = {<Courses />} />
     <Route path="/pricing" element = {<Pricing />} />
     <Route path="/contact" element = {<Contact />} />
     <Route path="/about" element = {<About />} />
     <Route path="/carrier" element={<Career />} />
     <Route path="/endroll" element={<Enroll />} />

     {/* admin routes */}

      <Route path="/admin/login" element = {<AdminLogin />} />
      <Route path="/admin/dashboard" element = {<Dashboard />} />
      <Route path="/admin/Endrolladmin" element = {<ManageEnrollments />} />
      <Route path="/admin/resister" element = {<Register />} />
      <Route path="/admin/courses-data/add-course" element = {<AdminAddCourse />} />
     
      <Route path="/admin/courses-data/manage-courses" element = {<ManageCoursesTable />} />
      <Route path="/admin/courses-data/add-course/manage-courses" element = {<ManageCoursesTable />} />
      {/* <Route path="/admin/courses-data/add-course/manage-courses/update-course/:id" element = {<ManageCoursesTable />} /> */}
     
     <Route path="/update-course/:id" element={<EditCourse />} />
      <Route path="/update-course/:id/manage-courses" element={<ManageCoursesTable />} />
      <Route path="/admin/admin-data/add-admin" element={<AddAdmin />} />
      <Route path="/admin/admin-data/manage-admin" element={<ManageAdmin />} />
      <Route path="/admin/admin-data/add-admin/manage-admin" element={<ManageAdmin />} />
      <Route path="/admin/admin-data/manage-admin/update-admin/:id" element={<EditAdmin />} />
      <Route path="/admin/jobs/add-jobs" element={< AddJob  />} />
       <Route path="/admin/jobs/add-jobs/manage-jobs" element={< ManageJobs  />} />
       <Route path="/admin/jobs/manage-jobs" element={< ManageJobs  />} />
         <Route path="/admin/jobs/manage-jobs/update-jobs" element={< EditJob  />} />
         <Route path="/admin/jobs/manage-jobs/update-jobs/:id" element={< EditJob  />} />
        
  
  
  


   </Routes>
   
   </Router>
   


 
  );
};

export default App;