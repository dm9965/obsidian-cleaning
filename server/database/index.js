const fs = require('fs')
const path = require('path');
const { Sequelize } = require("sequelize");
const pathname = path.join(__dirname, 'models');
const URI = `postgresql://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SCHEMA}`

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

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

const basename = path.basename(__filename);

fs.readdirSync(pathname)
    .filter((file) => {
        return (
            file.indexOf('.') !== 0 && // Ignore hidden files
            file !== basename && // Exclude `index.js`
            file.slice(-3) === '.js' // Include only `.js` files
        );
    })
    .forEach((file) => {
        const model = require(path.join(pathname, file))(sequelize, Sequelize.DataTypes);
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