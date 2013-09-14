var port = 3700;
var express = require("express");
var app = express();
var socketHandler = require(__dirname + "/socket");
var presenter = require(__dirname + "/routes/presenter");
var viewer = require(__dirname + "/routes/viewer");

var socketClients = [];

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/tpl");
app.set("view engine", "jade");
app.engine("jade", require("jade").__express);

app.get("/", viewer.index);

app.get("/emit", presenter.test(socketClients));

var server = app.listen(port);
console.log("Listening on port: " + port);

socketHandler.launchSockets(server, socketClients);