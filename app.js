const express = require('express');

const app = express();

const port = 7000;

app.use(express.json());

//ROUTES WILL GO HERE
app.get('/', function(req, res) {
    res.json({ message: 'WELCOME' });
});

app.listen(port, () => {
    console.log("Server is running at " + port);
});