const User = require("../models/user.models.js");


exports.loginLogic = async (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;



    const user = await User.findOne({
        username,
        password
    });
    console.log(user);

    res.status(202).send(user);

}