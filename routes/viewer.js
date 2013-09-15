var images = [
    "/img/p1.png",
    "/img/p2.png",
    "/img/p3.png"
];

var jade = require("jade");

exports.index = function(req, res)
{
    res.set('Content-Type', 'text/html');
    res.status(200);
    var html = jade.renderFile(__dirname + "/../tpl/presentation-viewer.jade", 
        {
            image_urls : images
        });
    // console.log(html);
    res.send(html);
}