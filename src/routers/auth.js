const express = require("express");
const router = express.Router();
const { login, refresh } = require("../controllers/auth");
const validator = require("../middlewares/validator");
const refreshValidator = require("../middlewares/refresh");
const { loginSchema } = require("../validations/user");

router.post("/login", validator.body(loginSchema), login);
router.post("/refresh", refreshValidator, refresh);

module.exports = router;
