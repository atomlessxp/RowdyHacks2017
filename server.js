const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cp

/**
 * #####################EXPRESS MODULES#####################
 */
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

/**
 * #####################API CALLS###########################
 */
// Render the main page.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/convert', (req, res) => {
    console.log(req.body)
})

app.listen(3000, function() {
    console.log('listening on 3000')
})