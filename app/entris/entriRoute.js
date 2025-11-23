const express = require("express");
const router = express.Router();
const entriController = require("./entriController");

router.get("/", entriController.getEntris);
router.get("/:id", entriController.getEntriById);
router.post("/", entriController.createEntri);
router.put("/:id", entriController.updateEntri);
router.delete("/:id", entriController.deleteEntri);

module.exports = router;
