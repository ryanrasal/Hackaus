const express = require("express");

const router = express.Router();
const { hashPassword, verifyPassword } = require("./services/auth");

const userControllers = require("./controllers/UserControllers");
const authControllers = require("./controllers/authControllers");
const phoneController = require("./controllers/PhoneControllers");
const RefPhoneController = require("./controllers/RefPhoneControllers");

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

router.get("/phone", phoneController.browse);
router.get("/phone/:id", phoneController.read);
router.put("/phone/:id", phoneController.edit);
router.post("/phone", phoneController.add);
router.delete("/phone/:id", phoneController.destroy);

/// / REF PHONE ROUTES ////

router.get("/phone-ref", RefPhoneController.browse);
router.get("/phone-ref/:id", RefPhoneController.read);
router.put("/phone-ref/:id", RefPhoneController.edit);
router.post("/phone-ref", RefPhoneController.add);
router.delete("/phone-ref/:id", RefPhoneController.destroy);

module.exports = router;
