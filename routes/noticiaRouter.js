const express = require("express");
const router = express.Router();
const noticiaController = require("../controller/noticia");

router.get("/", noticiaController.index);
router.get("/create", noticiaController.create);
router.post("/", noticiaController.store);
router.get("/:id/edit", noticiaController.edit);
router.put("/:id", noticiaController.update);
router.delete("/:id", noticiaController.destroy);
module.exports = router;