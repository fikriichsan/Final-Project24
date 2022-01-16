const express = require("express");
const auth = require("../middleware/auth");

const classRoutes = require("./class");
const modulRoutes = require("./modul");
const subModulRoutes = require("./subModul");
const UserRoutes = require("./User")

const router = express.Router();

router.get("/ping", (req, res) => {
    const ready ={
        status: "server is ready"
    };

    res.status(200).send(ready);
})

router.use("/class", classRoutes);
router.use("/modul", modulRoutes);
router.use("/submodul", subModulRoutes );
router.use("/user", UserRoutes);

module.exports = router