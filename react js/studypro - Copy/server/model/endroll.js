const mongoose = require("mongoose");

const Endroll = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    course: { type: String, require: true },
    message: { type: String },
    paymentMethod: { type: String, default: "None" },
    paymentStatus: { 
        type: String, 
        enum: ["Pending", "Verified", "Rejected"], 
        default: "Pending" 
    },
    transactionId: { type: String },
    amount: { type: Number },
    createdAt: { type: Date, default: Date.now }
});
const Studentendroll = mongoose.model("Studentsdata",Endroll);
module.exports = Studentendroll;