var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;
if (env === 'production') {
	sequelize = new Sequelize(HEROKU_POSTGRESQL_RED_URL, {
		dialect: 'postgres'
	});
} else {
	sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname+ '/data/dev-todo-api.sqlite'
});
}


var db = {

};

db.record = sequelize.import(__dirname + '/models/record.js');
//db.user = sequelize.import(__dirname + '/models/user.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//db.order.belongsTo(db.user);
//db.user.hasMany(db.order);

module.exports = db;