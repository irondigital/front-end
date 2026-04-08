const express = require('express');
const bcrypt = require("bcryptjs")

const router = express.Router();
const Course = require('../model/student-course');
const admindata = require('../model/admin-data')
const Students = require("../model/endroll")
const jobsre = require("../model/jobs");
const Payment = require("../model/Payment");

const { 
    register, 
    login, 
    logout, 
    me, 
    getAllUsers, 
    deleteUser 
} = require("../controller/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Course Routes
router.post("/addcourses", authMiddleware, (req, res) => {
    const { title, desc, duration, level, price, image, link } = req.body;
    try {
        const newCourse = new Course({ title, desc, duration, level, price, image, link });
        newCourse.save();
        res.status(201).json({ message: "Course added successfully", course: newCourse });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/addcourses", async (req, res) => {
    try {
        const data = await Course.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
});

router.get("/addcourses/:id", async (req, res) => {
    try {
        const data = await Course.findById(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
});

router.put("/addcourses/:id", authMiddleware, async (req, res) => {
    try {
        const data = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
});

router.delete("/addcourses/:id", authMiddleware, async (req, res) => {
    try {
        const data = await Course.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
});

// Admin Management Routes
router.post("/addadmin", authMiddleware, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: "Only administrators can create new admin accounts." });
    }
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newAdmin = new admindata({ name, email, password: hashedPassword, role });
        await newAdmin.save();
        res.status(201).json({ message: "successfully added" });
    } catch (err) {
        res.status(500).json({ message: "server err" });
    }
});

router.get("/addadmin", authMiddleware, async (req, res) => {
    try {
        const data = await admindata.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
});

router.get("/addadmin/:id", authMiddleware, async (req, res) => {
    try {
        const data = await admindata.findById(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
});

router.put("/addadmin/:id", authMiddleware, async (req, res) => {
    try {
        const data = await admindata.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Admin updated successfully", data });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

router.delete("/addadmin/:id", authMiddleware, async (req, res) => {
    try {
        const data = await admindata.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Admin deleted successfully", data });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// Regular User Management (Admin Only)
router.get("/users", authMiddleware, async (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: "Unauthorized access." });
    }
    next();
}, getAllUsers);

router.delete("/users/:id", authMiddleware, async (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: "Unauthorized access." });
    }
    next();
}, deleteUser);

// Student/Enrollment Routes
router.post("/Studentdata", async (req, res) => {
    const { name, email, phone, course, message, paymentMethod, transactionId, amount } = req.body;
    try {
        const students = new Students({ 
            name, 
            email, 
            phone, 
            course, 
            message, 
            paymentMethod, 
            transactionId, 
            amount 
        });
        await students.save();
        res.status(200).json({ message: "Enrollment submitted successfully", data: students });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

// Update Enrollment Status (Admin only)
router.patch("/Studentdata/:id/status", authMiddleware, async (req, res) => {
    try {
        const { paymentStatus } = req.body;
        if (!["Pending", "Verified", "Rejected"].includes(paymentStatus)) {
            return res.status(400).json({ message: "Invalid status" });
        }
        
        const enrollment = await Students.findByIdAndUpdate(
            req.params.id, 
            { paymentStatus }, 
            { new: true }
        );
        res.status(200).json({ message: "Status updated", data: enrollment });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/Studentdata", authMiddleware, async (req, res) => {
    try {
        const data = await Students.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
});

router.delete("/Studentdata/:id", authMiddleware, async (req, res) => {
    try {
        const data = await Students.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
});

// Career/Jobs Routes
router.post("/carrier", authMiddleware, async (req, res) => {
    const { jobtitle, location, experience, type } = req.body;
    try {
        const jobs = new jobsre({ jobtitle, location, experience, type });
        await jobs.save();
        res.status(200).json({ message: "data inserted" });
    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
});

router.get("/carrier", authMiddleware, async (req, res) => {
    try {
        const data = await jobsre.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
});

router.get("/carrier/:id", authMiddleware, async (req, res) => {
    try {
        const data = await jobsre.findById(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
});

router.put("/carrier/:id", authMiddleware, async (req, res) => {
    try {
        const data = await jobsre.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
});

router.delete("/carrier/:id", authMiddleware, async (req, res) => {
    try {
        const data = await jobsre.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: "server error" });
    }
});

// Authentication Routes
router.post("/user/register", (req, res, next) => {
    // Force role to user for public registration
    req.body.role = "user";
    next();
}, register);

router.post("/register", authMiddleware, (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: "Only administrators can register new users." });
    }
    next();
}, register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", authMiddleware, me);

// Payment Management Routes (Public for Fetching, Protected for CRUD)
router.get("/payments", async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/payments", authMiddleware, async (req, res) => {
    try {
        const { name, details, status, icon } = req.body;
        const newPayment = new Payment({ name, details, status, icon });
        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

router.put("/payments/:id", authMiddleware, async (req, res) => {
    try {
        const updated = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

router.delete("/payments/:id", authMiddleware, async (req, res) => {
    try {
        await Payment.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Payment method deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;