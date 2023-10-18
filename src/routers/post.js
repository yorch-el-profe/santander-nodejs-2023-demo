const express = require("express");
const router = express.Router();
const {
	getPosts,
	createPost,
	getPost,
	deletePost,
	updatePost,
	blockPost,
} = require("../controllers/post");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const roleValidator = require("../middlewares/role");
const {
	createPostSchema,
	updatePostSchema,
	paramsSchema,
} = require("../validations/post");

router.get("/posts", getPosts);
router.get("/posts/:id", validator.params(paramsSchema), getPost);
router.post(
	"/posts",
	jwtValidator,
	validator.body(createPostSchema),
	createPost
);
router.put(
	"/posts/:id",
	jwtValidator,
	validator.params(paramsSchema),
	validator.body(updatePostSchema),
	updatePost
);
router.delete(
	"/posts/:id",
	jwtValidator,
	validator.params(paramsSchema),
	deletePost
);
router.patch(
	"/posts/:id",
	jwtValidator,
	roleValidator,
	validator.params(paramsSchema),
	blockPost
);

module.exports = router;
