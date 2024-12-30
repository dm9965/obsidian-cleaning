const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailRoutes = require('./routes/routes')

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(express.json());
app.use('/api/emails', emailRoutes);



app.use((err, req, res) => {
    res.status(500).send('Internal Server Error');
});

app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, express, and Postgres api',
        throw : Error('BROKEN') // Express will catch this on its own.
    })
})