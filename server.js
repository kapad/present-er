var port = 3700;
var express = require("express");
var app = express();
var socketHandler = require(__dirname + "/socket");
var presenter = require(__dirname + "/routes/presenter");
var viewer = require(__dirname + "/routes/viewer");

var socketClients = [];

app.use(express.static(__dirname + "/public"));

app.get("/", viewer.index);

app.get("/emit", presenter.test(socketClients));
app.get("/start", presenter.start(socketClients));
app.get("/next", presenter.nextSlide(socketClients));
app.get("/previous", presenter.previousSlide(socketClients));
app.get("/render-laser/:x/:y", presenter.renderLaser(socketClients));
app.get("/laser-off", presenter.laserOff(socketClients));

var server = app.listen(port);
console.log("Listening on port: " + port);

socketHandler.launchSockets(server, socketClients);