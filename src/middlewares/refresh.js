const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { findOneByPayload } = require("../services/user");

passport.use(
	"refresh",
	new Strategy(
		{
			secretOrKey: process.env.REFRESH_JWT_SECRET,
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		},
		findOneByPayload
	)
);

module.exports = passport.authenticate("refresh", { session: false });
