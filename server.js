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
    for(i = 0; i < socketClients.length; i++)
    {
        var socket = socketClients[i];
        socket.emit('message', {message : "emitting via api call."});
    }
    res.status(200);
    res.send("success");
});

var server = app.listen(port);

var io = require("socket.io").listen(server);
io.sockets.on("connection", function (socket) {
    console.log("got socket client");
    console.log(socket);
    socketClients.push[socket];
    // socket.on("send", function (data) {
    //     console.log("got message; tag:send; " + data.valueOf());
    //     io.sockets.emit("message", data);
    // });
});


console.log("Listening on port: " + port);