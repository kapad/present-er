exports.launchSockets = function(server, clients)
{
    var io = require("socket.io").listen(server);
    io.sockets.on("connection", function(socket)
    {
        var length = clients.push(socket);
        socket.on("disconnect", function()
        {
            clients.splice((length-1), 1);
        });
    });
};