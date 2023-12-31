const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { findOneByPayload } = require("../services/user");

passport.use(
	new Strategy(
		{
			secretOrKey: process.env.JWT_SECRET,
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		},
		findOneByPayload
	)
);

module.exports = passport.authenticate("jwt", { session: false });
