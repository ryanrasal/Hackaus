const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/PhoneControllers");

router.get("/phone", itemControllers.browse);
router.get("/phone/:id", itemControllers.read);
router.put("/phone/:id", itemControllers.edit);
router.post("/phone", itemControllers.add);
router.delete("/phone/:id", itemControllers.destroy);

module.exports = router;
