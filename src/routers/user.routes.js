const express = require("express");
const { createUser, getNumberOfSuggestionByEmail } = require("../controllers/user.controller");
const { loginLogic } = require("../controllers/login.controllers");
const { getSuggestion } = require("../controllers/suggestion.controllers");
const { verifyUserRequestbody, verifyLoginUserBody, verifyLoginBeforeSuggection } = require("../middlewares/user.middlewares");


const router = express.Router();

router.post("/register", [verifyUserRequestbody], createUser);
router.post("/login", [verifyLoginUserBody], loginLogic);
router.post("/suggestion", [verifyLoginBeforeSuggection], getSuggestion);
router.get("/users/:email", getNumberOfSuggestionByEmail);




module.exports = router;