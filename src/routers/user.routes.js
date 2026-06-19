const express = require("express");
const { createUser } = require("../controllers/user.controller");
const { loginLogic } = require("../controllers/login.controllers");
const { getSuggestion} = require("../controllers/suggestion.controllers");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginLogic);
router.post("/suggestion", getSuggestion);




module.exports = router;