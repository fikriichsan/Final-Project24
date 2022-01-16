const express = require("express");
const router = express.Router();

const ClassController = require('../controllers/ClassController');

router.post("/add_class", ClassController.addClass);
router.get("/classes", ClassController.getAllClass);
router.get("/classes/:id_class", ClassController.getClassById);
router.patch("/classes/:id_class/edit", ClassController.updateClass);
router.delete("/classes/:id_class/delete", ClassController.deleteClass)

module.exports = router;