const express = require("express");
const multer = require("multer");
const WorkflowAgent = require("../agents/workflowAgent");

const workflow = new WorkflowAgent();
const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/run", upload.single("resume"), async (req, res) => {
  try {
    const { keywords, location, email } = req.body;
    const results = await workflow.run({
      keywords,
      location,
      resumePath: req.file ? req.file.path : null,
      email,
    });
    res.json({ success: true, jobsProcessed: results.length, results });
  } catch (err) {
    console.error("Workflow error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;