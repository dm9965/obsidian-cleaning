const fs = require('fs')
const path = require('path');
const Sequelize = require('sequelize');

const URI = process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/database_name';

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false
    }
});

const db = {};

const basename = path.basename(__filename);

fs.readdirSync(__dirname)
    .filter((file) => {
        return (
            file.indexOf('.') !== 0 && // Ignore hidden files
            file !== basename && // Exclude `index.js`
            file.slice(-3) === '.js' // Include only `.js` files
        );
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;