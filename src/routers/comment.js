const express = require("express");
const router = express.Router();

router.get("/helloworld", function (request, response) {
	response.send("Hello World");
});

router.get("/goodbye", function (request, response) {
	response.send("GoodBye");
});

module.exports = router;
