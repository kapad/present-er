var jade = require("jade");

exports.index = function(req, res)
{
    res.set('Content-Type', 'text/html');
    res.status(200);
    var html = jade.renderFile(__dirname + "/../tpl/presentation-viewer.jade");
    // console.log(html);
    res.send(html);
}