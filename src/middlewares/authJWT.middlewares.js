const jwt = require("jsonwebtoken")

const verifyJWT = async (req, res, next)=>{
    const currentToken = req.headers["x-access-token"];
    
    if(!currentToken){
        return res.status(401).json({
            message: "please provide access token"
        })
    }

    jwt.verify(currentToken,  process.env.ACCESS_TOKEN_SECRET,(error, decoded)=>{
        if(error){
            return res.status(401).json({
                message: "Unauthorized access, token expired"
            })
        }

        return email = decoded.email;
    })

    next();
}

module.exports ={
    verifyJWT: verifyJWT
}