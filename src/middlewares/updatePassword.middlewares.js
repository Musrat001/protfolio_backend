const User = require("../models/user.models")
const updatePassowrd = async (req, res, next)=>{
    const email = req.body.email;
    const newPassword = req.body.password;
    const confirmNewPassword = req.body.confirmPassword;

    if(!email){
        res.status(401).json({
            message: "Provides registered email"
        })
    }
    if(!newPassword){
        res.status(401).json({
            message: "password field cannot be empty"
        })
    }
    if(!confirmNewPassword){
        res.status(401).json({
            message: "confirm password field cannot be empty"
        })
    }
    // cheking newpassword and confirmnewpassword fields are same

    if(newPassword !== confirmNewPassword){
        res.status(401).json({
            message: "new Password and confirm Password fields are mismatch"
        });
    }

    // check if user exits
    const user = await User.findOne({email});
    if(!user){
        res.status(402).json({
            message: `User with email ${email} is not registered`
        });
    }
    next();

}

module.exports = {
    updatePassowrd: updatePassowrd
}