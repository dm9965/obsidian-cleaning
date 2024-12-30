const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailRoutes = require('./routes/routes')

const app = express();
const port = process.env.PORT || 5005;
const allowedOrigins = [process.env.CLIENT_URL, 'https://www.obsidiancleaning.com/']

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

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
app.use('/api/send', emailRoutes);



app.use((err, req, res) => {
    res.status(500).send('Internal Server Error');
});

app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, express, and Postgres api',
        throw : Error('BROKEN') // Express will catch this on its own.
    })
})

app.list(port, () => console.log(`Listening on Port ${port}!`))