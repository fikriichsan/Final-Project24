const dotenv = require("dotenv");
dotenv.config();

const key = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");
const User = require('../models/User');
const Class = require('../models/Class')
const bcrypt = require('bcryptjs')

class UserController {
    static async createUser(req, res, next) {
        const { username, email, password, role, id_class } = req.body;
        const user = await User.findOne({ email });
        if (user)
            return res.status(403).json({
                error: {
                    message: "email already in user!"
                },
            });
        const newUser = new User({username, email, password, role, id_class});
        try{
            await newUser.save(async(err, user) => {
                await Class.findOneAndUpdate({_id: req.body.id_class}, {$addToSet: { participants: user._id}}, {new: true});
            });
            const token = getSignedToken(newUser)
            res.status(200).json({
                token,
            })
        } catch (error){
            error.status = 400;
            next(error)
        }
    }

    static async loginUser(req, res){
        try{
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if(!user)
                return res.status(403).json({
                    error: {
                        message: "Invalid email / password",
                    }
                });
            const isValid = await bcrypt.compare(password, user.password)
            if (!isValid)
                return res.status(403).json({
                    error: {
                        message: "Invalid email/Password",
                    }
                });
                const token = getSignedToken(user);
                res.status(200).json({
                    token,
                });
        } catch (error) {
            res.status(500).send({ err: error});
            console.log(error)
        }
    }
}

getSignedToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
        }, 
        key,
        { expiresIn: '12h'}
    );
};

module.exports = UserController