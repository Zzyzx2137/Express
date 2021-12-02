var express = require("express")
var app = express()
var path = require("path")
const PORT = 3000;

// app.use(express.static('static'))


var page = ""

app.get('/', function (req, res) {
    console.log(req.query) // to jest obiekt z danymi pobranymi z paska adresu    
    for (let i = 0; i < parseInt(req.query.count); i++) {
        page = page + `<div class="square" style="background-color:${req.query.color}; width:50px; height:50px;"></div>`
        console.log(page)
    }
    res.send(page)
    page = ""

});

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})