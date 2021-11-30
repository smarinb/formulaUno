const express = require("express");
const router = express.Router();
const calendarioController = require("../controller/calendario");

router.get("/", calendarioController.index);
router.get("/create", calendarioController.create);
router.post("/", calendarioController.store);
router.get("/:id/edit", calendarioController.edit);
router.put("/:id", calendarioController.update);
router.delete("/:id", calendarioController.destroy);
module.exports = router;