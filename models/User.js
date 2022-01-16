const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            validate: [emailValidator, "incorrect mail format"],
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            lowercase: true
        },
        id_class: {
            type: Schema.Types.ObjectId,
            ref: "Class"
        }
    },
    {timestamps: true, versionKey: false}
);

function emailValidator(value) {
    return /^.+@.+\..+$/.test(value);
}

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.password, salt);
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("Users", userSchema);