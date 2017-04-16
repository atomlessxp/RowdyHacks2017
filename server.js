#!/usr/bin/node
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const favicon = require('serve-favicon')
const path = require('path')
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
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.listen(3000, function() {
    var s2 = fs.createWriteStream("/tmp/myfifo2");
    console.log('listening on 3000')
})
