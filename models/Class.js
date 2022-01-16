const mongoose = require("mongoose");
const Schema = mongoose;

const classShcema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        card_image: {
            type: String,
        },
        modul: [{
            type: Schema.Types.ObjectId, 
            ref: "Modul"
        }],
        participants: [{
            type: Schema.Types.ObjectId, 
            ref: "Users"
        }]
    },
    {timestamps: true, versionKey: false}
);

module.exports = mongoose.model("Class", classShcema);