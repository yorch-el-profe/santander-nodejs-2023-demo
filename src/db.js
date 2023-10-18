const { connect, sync } = require("./models/sequelize");
const User = require("./models/user");
const Post = require("./models/post");
const Comment = require("./models/comment");
const Role = require("./models/role");
const { ROLES } = require("./constants");

// "Un usuario crea muchas publicaciones"
User.hasMany(Post);
Post.belongsTo(User);

// "Una publicación tiene muchos comentarios"
Post.hasMany(Comment);
Comment.belongsTo(Post);

// "Un usuario crea muchos comentarios"
User.hasMany(Comment);
Comment.belongsTo(User);

// "Un rol está asignado a varios usuarios"
Role.hasMany(User);
User.belongsTo(Role);

/*
  Insertar registros iniciales
  al ejecutar el proyecto.
*/
async function seed() {
	await Promise.allSettled([
		Role.create({ id: ROLES.USER, name: "USER" }),
		Role.create({ id: ROLES.ADMIN, name: "ADMIN" }),
		User.create({
			id: 1,
			username: "admin",
			email: "admin@admin.com",
			password: "adminadmin",
			roleId: ROLES.ADMIN,
		}),
	]);
}

exports.initDatabase = async function () {
	await connect();
	await sync();
	await seed();
};
