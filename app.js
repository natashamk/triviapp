const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist'));
require('./config/mongoose_setup.js');
require('./config/routes.js')(app);
app.get('/', (req, res) => {
    res.send("Up and running");
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})