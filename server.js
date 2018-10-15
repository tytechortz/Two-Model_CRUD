const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

// const Albums = require('./db/models/album.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send('planet earth')
})
















app.listen(3000, () => {
    console.log("server running");
});