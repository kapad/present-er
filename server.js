var port = 3700;
var express = require("express");
var app = express();

var socketClients = [];

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/tpl");
app.set("view engine", "jade");
app.engine("jade", require("jade").__express);

app.get("/", function(req, res)
{
    res.render("page");
});

app.get("/emit", function(req, res)
{
    var i;
    console.log(socketClients);
    for(var client in socketClients)
    {
        var socket = socketClients[client];
        socket.emit("message", {message : "emmitting via api call."});
    }
    res.status(200);
    res.send("success");
});

var server = app.listen(port);
console.log("Listening on port: " + port);

var io = require("socket.io").listen(server);
io.sockets.on("connection", function (socket) {
    console.log("got socket client");
    console.log(socket);
    var hs = socket.handshake;
    // console.log("handshake");
    // console.log(hs);
    socketClients[socket.id] = socket;
    console.log("all clients");
    console.log(socketClients);
});