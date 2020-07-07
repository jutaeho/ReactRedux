const express = require('express');
const path = require('path');

let app = express();

let port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.end('hello react redux');
});

app.listen(port, () => {
    console.log(`starting server port on ${port}`);
})