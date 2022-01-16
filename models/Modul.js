const mongoose = require("mongoose");
const Schema = mongoose;

const modulShcema = new mongoose.Schema(
    {
        id_class: {
            type: Schema.Types.ObjectId,
            ref: "Class"
        },
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        sub_modul: [{
            type: Schema.Types.ObjectId, 
            ref: "Sub_Modul"
        }],
    },
    {timestamps: true, versionKey: false}
);

module.exports = mongoose.model("Modul", modulShcema);