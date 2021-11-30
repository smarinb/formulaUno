const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario");

router.get("/", usuarioController.index);
router.get("/create", usuarioController.create);
router.post("/", usuarioController.store);
router.post("/signin", usuarioController.login);
router.get("/logout", usuarioController.destroy);
router.delete("/", usuarioController.destroy);


module.exports = router;