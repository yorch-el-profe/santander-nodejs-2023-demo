const { findByUsername } = require("../services/user");
const jwt = require("jsonwebtoken");

exports.login = async function (request, response) {
	const { username, password } = request.body;

	const user = await findByUsername(username);

	if (!user) {
		return response.status(400).json({
			message: "Usuario o contraseña inválidos",
			messagedev: "No se encontro el usuario en la base de datos",
			code: "ERR_AUTH",
		});
	}

	if (user.password !== password) {
		return response.status(400).json({
			message: "Usuario o contraseña inválidos",
			messagedev: "No se encontro el usuario en la base de datos",
			code: "ERR_AUTH",
		});
	}

	const payload = { id: user.id };

	const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5m" });

	const refresh = jwt.sign(payload, process.env.REFRESH_JWT_SECRET, {
		expiresIn: "1d",
	});

	response.status(200).json({
		jwt: token,
		refresh,
	});
};

exports.refresh = function (request, response) {
	const payload = { id: request.user.id };

	const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5m" });

	const refresh = jwt.sign(payload, process.env.REFRESH_JWT_SECRET, {
		expiresIn: "1d",
	});

	response.status(200).json({
		jwt: token,
		refresh,
	});
};
