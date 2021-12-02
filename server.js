var express = require("express")
var app = express()
var path = require("path")
var PORT = process.env.PORT || 3000;

// app.use(express.static('static'))


app.get('/user/:id', function (req, res) {

    var id = req.params.id
    if (id == 2)
        res.send("odsyłam stronę usera z id = 2")
    else
        res.send("taki user nie istnieje")
});

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})