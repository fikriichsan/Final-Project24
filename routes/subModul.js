const express = require("express");
const router = express.Router();

const subModulController = require("../controllers/SubModulController");

router.get("/classes/:id_class/moduls/:id_modul/sub-modul/:id_sub_modul", subModulController.getSubModulById);
router.post("/classes/:id_class/moduls/:id_modul/add-sub-modul", subModulController.addSubModul);
router.patch("/classes/:id_class/moduls/:id_modul/sub-modul/:id_sub_modul/edit", subModulController.updateSubModul);
router.delete("/classes/:id_class/moduls/:id_modul/sub-modul/:id_sub_modul/delete", subModulController.deleteSubModul);

module.exports = router

