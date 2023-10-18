const express = require("express");
const router = express.Router();
const { createUser, blockUser } = require("../controllers/user");
const { createUserSchema } = require("../validations/user");
const jwtValidator = require("../middlewares/jwt");
const roleValidator = require("../middlewares/role");
const validator = require("../middlewares/validator");

router.post("/users", validator.body(createUserSchema), createUser);

router.patch("/users/:id", jwtValidator, roleValidator, blockUser);

module.exports = router;
