const express = require("express");
const router = express.Router();
const equipoController = require("../controller/equipo");

router.get("/", equipoController.index);
router.get("/create", equipoController.create);
router.post("/", equipoController.store);
router.get("/:id/edit", equipoController.edit);
router.put("/:id", equipoController.update);
router.delete("/:id", equipoController.destroy);
module.exports = router;