const express = require('express')
const cp = require('child_process')
const fs = require('fs')
const router = express.Router()

var arr = {};
var index = 0;

router.get('/', (req, res) => {
    res.render("index.ejs");
})

router.post('/', (req, res) => {
    //console.log(req.body.passwd)
    cp.spawn("echo > /tmp/myfifo", [req.body.passwd], {"shell":true})
    var s = fs.createReadStream("/tmp/myfifo2");
    s.on("data", function(data) {
        arr[req.headers.host] = data;
        //console.log("arr=" + JSON.stringify(arr));
        return res.redirect('/results');
    });
})

router.get('/results', (req, res) => {
    console.log("arr = " + arr[req.headers.host]);
    //console.log("headers = " + JSON.stringify(req.headers));
    return res.render("results.ejs", {result: arr[req.headers.host]});/*, function(err, html) {
        res.send(html);
    });*/
})

module.exports = router;
