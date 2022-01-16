const mongoose = require("mongoose");
const Modul = require("./Modul");
const Schema = mongoose;

const subModulShcema = new mongoose.Schema(
    {
        id_modul: {
            type: Schema.Types.ObjectId,
            ref: Modul
        },
        name: {
            type: String,
        },
        materi: {
            type: String,
        },
    },
    {timestamps: true, versionKey: false}
);

module.exports = mongoose.model("Sub_Modul", subModulShcema);