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
            socket.emit("message", { message : "emmitting via api call."});
        }
        // console.log("sent messages to " + i + " clients.");
        res.status(200);
        res.send("success");
    }
}