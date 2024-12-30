const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5005;
const allowedOrigins = [process.env.CLIENT_URL, 'https://www.obsidiancleaning.com/'];

app.use(cors({
    origin: function(origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1) {
            return callback(null, true);
        }

        return callback(null, false);
    },
    credentials: true,
}));

app.use(express.json());
app.use(require('./routes'));

app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, express, and Postgres api',
        throw : Error('BROKEN') // Express will catch this on its own.
    })
});

app.listen(port, () => console.log(`Listening on Port ${port}!`));