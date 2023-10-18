module.exports =
	(...roles) =>
	(request, response, next) =>
		!roles.includes(request.user.roleId)
			? response.status(403).json({
					code: "FORBIDDEN",
					message: "No tienes autorización para este recurso",
			  })
			: next();
