const express = require("express");
const router = express.Router();

router.get("/helloworld", function (request, response) {
	response.send("Hello World");
});

module.exports = router;
