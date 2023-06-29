const express = require("express");

const multer = require("multer");

const router = express.Router();

const upload = multer({ dest: process.env.UPLOADS_FOLDER });

const { hashPassword, verifyPassword } = require("./services/auth");

const fileControllers = require("./controllers/fileControllers");
const userControllers = require("./controllers/UserControllers");
const authControllers = require("./controllers/authControllers");
const phoneController = require("./controllers/PhoneControllers");
const RefPhoneController = require("./controllers/RefPhoneControllers");
const PhoneBrandControllers = require("./controllers/PhoneBrandControllers");

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
router.post(
  "/phone",
  upload.single("picture"),
  fileControllers.fileRename,
  phoneController.add
);
router.delete("/phone/:id", phoneController.destroy);

/// / REF PHONE ROUTES ////

router.get("/phone-brands", PhoneBrandControllers.getPhoneBrands);
router.get("/phone-ref", RefPhoneController.browse);
router.get("/phone-ref/:id", RefPhoneController.read);
router.put("/phone-ref/:id", RefPhoneController.edit);
router.post(
  "/phone-ref",
  upload.single("picture"),
  fileControllers.fileRename,
  RefPhoneController.add
);
router.delete("/phone-ref/:id", RefPhoneController.destroy);

module.exports = router;
