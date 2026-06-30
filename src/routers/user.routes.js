const express = require("express");
const { loginLogic } = require("../controllers/login.controllers");
const { getSuggestion } = require("../controllers/suggestion.controllers");
const { createUser,
    getNumberOfSuggestionByEmail
    } = require("../controllers/user.controller");

const { verifyUserRequestbody,
    verifyLoginUserBody,
    verifyLoginBeforeSuggection,
    checkNumberOfSuggestion
    } = require("../middlewares/user.middlewares");

const { setNewPassword } = require("../controllers/passwordReset.controllers");
const { updatePassowrd } = require("../middlewares/updatePassword.middlewares");
const { verifyJWT } = require("../middlewares/authJWT.middlewares");


const router = express.Router();

router.post("/register", [verifyUserRequestbody], createUser);
router.post("/login", [verifyLoginUserBody], loginLogic);
router.post("/suggestion/", [verifyLoginBeforeSuggection, verifyJWT], getSuggestion);
router.get("/users/:email", getNumberOfSuggestionByEmail);
router.put("/setPassword",[updatePassowrd] ,setNewPassword);




module.exports = router;