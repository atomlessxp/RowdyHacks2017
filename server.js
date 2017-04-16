#!/usr/bin/node
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

/**
 * ####################INTERNAL ROUTES#####################
 */
const indexRoutes = require('./routes/index.js')

/**
 * #####################EXPRESS MODULES#####################
 */
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use('/', indexRoutes);


app.listen(3000, function() {
    console.log('listening on 3000')
})
