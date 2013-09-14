// var express = require("express");
// var app = express();
// var port = 3700;

// app.use(express.static(__dirname + "/public")); 

// app.set("views", __dirname + "/tpl");
// app.set("view engine", "jade");
// app.engine("jade", require("jade").__express);

// app.get("/", function(req, res){
//     res.render("page");
// });
 
// var io = require("socket.io").listen(app.listen(port));

// io.sockets.on("connection", function (socket) {
//     socket.emit("message", { message: "welcome to the chat" });
//     socket.on("send", function (data) {
//         console.log("got message; tag:send; " + data.valueOf());
//         io.sockets.emit("message", data);
//     });
// });

// console.log("Listening on port " + port);


