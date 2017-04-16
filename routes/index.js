const express = require('express')
const cp = require('child_process')
const router = express.Router()

router.get('/', (req, res) => {
    res.render("index.ejs")
})

router.post('/', (req, res) => {
    console.log(req.body.passwd)
    cp.spawn("echo > /tmp/myfifo", [req.body.passwd], {"shell":true})
    res.redirect('/')
})

router.get('/results', (req, res) => {
    res.render("results.ejs")
})

module.exports = router;