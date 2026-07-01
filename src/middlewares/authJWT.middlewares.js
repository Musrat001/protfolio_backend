const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {

    console.log("Cookies:", req.cookies);

    console.log("Access Token:", req.cookies.accessToken);

    const currentToken = req.cookies.accessToken;

    if(!currentToken){
        return res.status(401).json({
            message:"please provide access token"
        });
    }

    jwt.verify(currentToken, process.env.ACCESS_TOKEN_SECRET, (error, decoded)=>{

        if(error){
            console.log(error);

            return res.status(401).json({
                message:"Unauthorized access"
            });
        }

        req.user = decoded;

        next();
    });

}

module.exports = {
    verifyJWT: verifyJWT
}

