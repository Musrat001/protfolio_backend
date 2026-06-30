const User = require("../models/user.models.js");
const constant = require("../utils/constant.js")
const jwt = require("jsonwebtoken")
exports.loginLogic = async (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    console.log(process.env.ACCESS_TOKEN_SECRET);

    // finding user
    const user = await User.findOne({
        username,
        password
    });
    console.log(user);


    if (!user) {
        return res.status(402).send({
            message: "invalid user"
        })
    }


    // generating access Token
    const accessToken = jwt.sign(
        {
            email: user.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: 60
        }
    );


    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false,       // true in production with HTTPS
        sameSite: "Lax",
        maxAge: 24 * 60 * 60 * 1000
    });

    return res.json({
        success: true,
        message: "Login successful",
        accessToken: accessToken,

    });

}