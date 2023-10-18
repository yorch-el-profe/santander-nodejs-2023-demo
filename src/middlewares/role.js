const { ROLES } = require("../constants");

module.exports = function (request, response, next) {
	if (
		request.user.roleId !== ROLES.ADMIN ||
		request.user.roleId !== ROLES.MOD
	) {
		return response.status(403).json({
			code: "FORBIDDEN",
			message: "No tienes autorización para este recurso",
		});
	}

	next();
};
