const express = require("express");
const router = express.Router();

const ModulController = require("../controllers/ModulController");

router.get("/classes/:id_class/moduls/:id_modul", ModulController.getModulById);
router.post("/classes/:id_class/add-modul", ModulController.addModul);

module.exports = router

