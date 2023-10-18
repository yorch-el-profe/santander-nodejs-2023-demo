module.exports = function (...roles) {
	return function (request, response, next) {
		if (!roles.includes(request.user.roleId)) {
			return response.status(403).json({
				code: "FORBIDDEN",
				message: "No tienes autorización para este recurso",
			});
		}

		next();
	};
};
