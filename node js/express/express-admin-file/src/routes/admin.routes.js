const router = require("express").Router();
const adminAuth = require("../middlewares/adminAuth.middleware");

const adminController = require("../controllers/admin.controller");
const courseController = require("../controllers/course.controller");


router.get("/register", (req, res) => {
  res.render("admin/register");
});

router.post("/register", adminController.register);


/* DASHBOARD */


router.get("/dashboard", adminAuth, adminController.dashboard);

/* COURSES */
router.get("/courses", adminAuth, courseController.list);
router.post("/courses/add", adminAuth, courseController.add);
router.get("/courses/delete/:id", adminAuth, courseController.remove);

/* USERS (READ ONLY) */
router.get("/users", adminAuth, adminController.users);

router.get("/corsee-management",(req,res)=>{
  res.render("admin/corsee-management")
})



// module.exports = router;


// const router = require("express").Router();
// // const adminAuth = require("../middlewares/adminAuth.middleware");

// const adminController = require("../controllers/admin.controller");
// const courseController = require("../controllers/course.controller");

// /* REGISTER (optional) */
// router.get("/register", (req, res) => {
//   res.render("admin/register");
// });

// router.post("/register", adminController.register);

// /* DASHBOARD */
// router.get("/dashboard", adminController.dashboard);

// /* COURSES */
// router.get("/courses", courseController.list);
// router.post("/courses/add", courseController.add);
// router.get("/courses/delete/:id", courseController.remove);

// /* USERS */
// router.get("/users", adminController.users);

// router.get("/corsee-management", (req, res) => {
//   res.render("admin/corsee-management");
// });

// overview routing 
router.get("/pricing", (req, res) => {
  res.render("admin/overview/pricing");
});

router.get("/revenue", (req, res) => {
  res.render("admin/overview/revenue");
});

router.get("/pendingcourse", (req, res) => {
  res.render("admin/overview/pendingcourse");
});

router.get("/complete", (req, res) => {
  res.render("admin/overview/complete");
});

// student-data routes



const db = require("../config/db");

router.get("/contact-message", (req, res) => {
  const sql = "SELECT * FROM contacts ORDER BY created_at DESC";
    // console.log("SQL Query:", sql); // Debugging log
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching contact messages:", err);
      return res.status(500).send("Error fetching contact messages");
    }

    res.render("admin/student-data/contact-message", {
      title: "Contact Messages",
      contacts: results
    });
  });
});

router.post("/contact-message/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM contacts WHERE id = ?", [id], err => {
    if (err) return res.status(500).send("Delete failed");
    res.redirect("/admin/contact-message");
  });
});




module.exports = router;



// router.get("/student-course", (req, res) => {
//   res.render("admin/student-data/student-course");
// });




// admin data 

// router.get("/lists", (req, res) => {
//   res.render("admin/admin-data/adminlist");
// });

router.get("/roles", (req, res) => {
  res.render("admin/admin-data/roles");
});

router.get("/activity", (req, res) => {
  res.render("admin/admin-data/activity");
});

// message and support

router.get("/message", (req, res) => {
  res.render("admin/support/message");
});

router.get("/tickets", (req, res) => {
  res.render("admin/support/tickets");
});


// Payments 


router.get("/history", (req, res) => {
  res.render("admin/payments/payments-history");
});


router.get("/refunds", (req, res) => {
  res.render("admin/payments/refund");
});
  

// charts
router.get("/growth", (req, res) => {
  res.render("admin/charts/growth");
});
  
router.get("/revenuechart", (req, res) => {
  res.render("admin/charts/revenuechart");
});




router.get("/student-course", (req, res) => {
  const sql = "SELECT * FROM study_pro.enrollments ORDER BY created_at DESC";
    // console.log("SQL Query:", sql); // Debugging log
 const data =  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching student data:", err);
      return res.status(500).send("Error fetching student data");
    }

    res.render("admin/student-data/student-course", {
      title: "Student Data",
      enrollments: results
    });
  });
});

router.post("/student-course/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM enrollments WHERE id = ?", [id], err => {
    if (err) return res.status(500).send("Delete failed");
    res.redirect("/admin/student-course");
  });
});

router.get("/admin-data/add-admin", (req, res) => {
  res.render("admin/admin-data/add-admin");
});

const bcrypt = require("bcrypt");

router.post("/admin-data/add-admin", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).send("All fields required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
      INSERT INTO addadmin (name, email, password, role)
      VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [name, email, hashedPassword, role], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("DB error");
      }

      // ✅ CORRECT REDIRECT
      res.redirect("/admin/lists");
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.get("/lists", (req, res) => {
  const sql = "SELECT * FROM study_pro.addadmin ORDER BY created_at DESC";
    // console.log("SQL Query:", sql); // Debugging log
    db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching admin data:", err);
      return res.status(500).send("Error fetching admin data");
    }

    res.render("admin/admin-data/adminlist", {
      title: "Admin List",
      admins: results
    });
  });
});

router.post('/admin-data/adminlist/delete/:id', (req, res) => {
  const adminId = req.params.id;

  const sql = 'DELETE FROM addadmin WHERE id = ?';

  db.query(sql, [adminId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }

    if (result.affectedRows === 0) {
      return res.status(404).send('Admin not found');
    }

    res.redirect('/admin/lists');
  });
});

router.get("/admin-data/edit/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM addadmin WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }

    if (results.length === 0) {
      return res.status(404).render("404");
    }

    res.render("admin/admin-data/edit", {
      admin: results[0]
    });
  });
});



router.post("/admin-data/edit/:id", async (req, res) => {
  const id = req.params.id;
  const { name, email, password, role } = req.body;

  try {
   

    let sql, params;

    if (password && password.trim() !== "") {
      // If admin entered a new password, hash it
      const hashedPassword = await bcrypt.hash(password, 10);
      sql = `
        UPDATE addadmin
        SET name = ?, email = ?, password = ?, role = ?
        WHERE id = ?
      `;
      params = [name, email, hashedPassword, role,  id];
    } else {
      // If password is empty, keep old password
      sql = `
        UPDATE addadmin
        SET name = ?, email = ?, role = ?
        WHERE id = ?
      `;
      params = [name, email, role, id];
    }

    db.query(sql, params, (err, result) => {
      if (err) {
        console.error("Update Error:", err);
        return res.status(500).send("Update failed");
      }

      res.redirect("/admin/lists");
    });
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).send("Update failed");
  }
});
module.exports = router;
