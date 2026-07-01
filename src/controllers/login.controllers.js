const User = require("../models/user.models.js");
const constant = require("../utils/constant.js")
const jwt = require("jsonwebtoken")


exports.loginLogic = async (req, res) => {
    console.log(req.body);

    const username = req.body.username;
    const password = req.body.password;


    // finding user
    const user = await User.findOne({
        username,
        password
    });


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
    
    


    res.cookie("accessToken", process.env.ACCESS_TOKEN_SECRET, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000
    });

    return res.status(200).json({
        success: true,
        message: "Login successful",
        accessToken: accessToken,

    });

}