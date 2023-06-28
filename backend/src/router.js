const express = require("express");

const router = express.Router();
const { hashPassword, verifyPassword } = require("./services/auth");

const itemControllers = require("./controllers/PhoneControllers");
const userControllers = require("./controllers/UserControllers");
const authControllers = require("./controllers/authControllers");

/// /// LOGIN ROUTE //////

router.post(
  "/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

/// // USER ROUTES /////

router.post("/users", hashPassword, userControllers.add);
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

/// / PHONE ROUTES ////

router.get("/phone", itemControllers.browse);
router.get("/phone/:id", itemControllers.read);
router.put("/phone/:id", itemControllers.edit);
router.post("/phone", itemControllers.add);
router.delete("/phone/:id", itemControllers.destroy);

module.exports = router;
