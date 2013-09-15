var images = [
    "/img/p1.png",
    "/img/p2.png",
    "/img/p3.png"
];

var presentSlide = 0;

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
        console.log(req);
        res.send("success");
    }
}

exports.nextSlide = function(clients)
{
    return function(req, res)
    {
        console.log(req);
        res.send("success");
    }
}
exports.previousSlide = function(clients)
{
    return function(req, res)
    {
        console.log(req);
        res.send("success");
    }
}

exports.renderLaser = function(clients)
{
    return function(req, res)
    {
        console.log(req);
        console.log(req.params);
        console.log(req.params.x);
        console.log(req.params.y);
        res.send("success");
    }
}

exports.laserOff = function(clients)
{
    return function(req, res)
    {
        console.log(req);
        res.send("success");
    }
}