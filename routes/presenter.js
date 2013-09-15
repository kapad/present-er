var images = [
    "/img/p1.png",
    "/img/p2.png",
    "/img/p3.png"
];

var presentSlide = 0;

function emitClients(clients, data)
{
    var i = 0;
    for(i = 0; i < clients.length; i++)
    {
        var socket = clients[i];
        socket.emit("message", data);
    }
}

exports.test = function(clients)
{
    return function(req, res)
    {
        var i;
        for(i = 0; i < clients.length; i++)
        {
            var socket = clients[i];
            socket.emit("message", { slide : 1 });
        }
        // console.log("sent messages to " + i + " clients.");
        res.status(200);
        res.send("success");
    }
}

exports.start = function(clients)
{
    return function(req, res)
    {
        var data = { type : "start" };
        emitClients(clients, data);
        res.status(200);
        res.send();
    }
}

exports.nextSlide = function(clients)
{
    return function(req, res)
    {
        var data = { type : "next" };
        emitClients(clients, data);
        res.status(200);
        res.send();
    }
}
exports.previousSlide = function(clients)
{
    return function(req, res)
    {
        var data = { type : "previous" };
        emitClients(clients, data);
        res.status(200);
        res.send();
    }
}

exports.renderLaser = function(clients)
{
    return function(req, res)
    {
        var sx = 720;
        var sy = 480;
        var rx = req.params.x/sx;
        var ry = req.params.y/sy;
        var data = 
        {
            type : "laser",
            coordinates : 
            {
                x : rx,
                y : ry
            }
        };
        emitClients(clients, data);
        res.status(200);
        res.send();
    }
}

exports.laserOff = function(clients)
{
    return function(req, res)
    {
        var data = { type : "laser" };
        emitClients(clients, data);
        res.status(200);
        res.send();
    }
}