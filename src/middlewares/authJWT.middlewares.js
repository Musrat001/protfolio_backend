const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {

    // console.log("Cookies:", req.cookies);

    // console.log("Access Token:", req.cookies);

    const authToken = req.headers.authorization;
    console.log(authToken);


    if (!authToken) {
        return res.status(401).json({
            message: "Authorization headers missing"
        });
    }

    if (!authToken.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Invalid Token formate"
        })
    }

    const token = authToken.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {

        // console.log("Cookie Header:", req.headers.cookie);
        // console.log("Parsed Cookies:", req.cookies);

        if (error) {
            console.log(error);

            return res.status(401).json({
                message: "Invalid  token or Token has expired"
            });
        }

        req.user = decoded;

        next();
    });

}

module.exports = {
    verifyJWT: verifyJWT
}

