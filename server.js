#!/usr/bin/node
const express = require('express')
const bodyParser = require('body-parser')
const cp = require('child_process')
const app = express()

//const input = "TEST\n"

/**
 * #####################EXPRESS MODULES#####################
 */
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

//cp.spawn("echo > /tmp/myfifo", [input], {"shell":true})


/**
 * #####################API CALLS###########################
 */
// Render the main page.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/convert', (req, res) => {
    console.log(req.body.passwd)
    cp.spawn("echo > /tmp/myfifo", [req.body.passwd], {"shell":true})
    res.send()
})

app.listen(3000, function() {
    console.log('listening on 3000')
})
