const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

mongoose.set('userFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/meanCrud',{useNewUrlParser : true});

app.use('/users', userRoutes);

module.exports = app;