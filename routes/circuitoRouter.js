const express = require("express");
const router = express.Router();
const circuitoController = require("../controller/circuito");

router.get("/", circuitoController.index);
router.get("/create", circuitoController.create);
router.post("/", circuitoController.store);
router.get("/:id/edit", circuitoController.edit);
router.put("/:id", circuitoController.update);
router.delete("/:id", circuitoController.destroy);
module.exports = router;