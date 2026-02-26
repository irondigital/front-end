const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
   
    title: { type: String, required: true },
    desc: { type: String, required: true },
    duration: { type: String, required: true },
    level: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true }
});

const Course = mongoose.model('addcourses', CourseSchema);

module.exports = Course;