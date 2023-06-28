const express = require("express");

const router = express.Router();

const phoneController = require("./controllers/PhoneControllers");
const RefPhoneController = require("./controllers/RefPhoneControllers");

router.get("/phone", phoneController.browse);
router.get("/phone/:id", phoneController.read);
router.put("/phone/:id", phoneController.edit);
router.post("/phone", phoneController.add);
router.delete("/phone/:id", phoneController.destroy);

router.get("/phone-ref", RefPhoneController.browse);
router.get("/phone-ref/:id", RefPhoneController.read);
router.put("/phone-ref/:id", RefPhoneController.edit);
router.post("/phone-ref", RefPhoneController.add);
router.delete("/phone-ref/:id", RefPhoneController.destroy);

module.exports = router;
