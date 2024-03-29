function parseMessage(data)
{
    var param = data.type;
    switch(param)
    {
        case "start":
            start();
            break;
        case 'next':
            next();
            break;
        case 'previous':
            previous();
            break;
        case 'laser':
            if(data.hasOwnProperty('coordinates'))
                renderLaser(data.coordinates.x, data.coordinates.y);
            else
                laserOff();
            break;
        case 'end':
            presentationOver();
            break;
        default:
            console.log("unknown type. " + type);
    }
}

function renderSlide(num)
{
    $("div#holder img.visible-image").each(function()
    {
        $(this).removeClass().addClass("hidden-image");
    });
    var slide = $("div#holder img").eq((num-1));
    slide.removeClass().addClass("visible-image");
}

function presentationOver()
{
    $("div#holder img").each(function()
    {
        $(this).removeClass().addClass("hidden-image");
    });
}

function start()
{
    //check the current slide is zero
    var slide = slider.get();
    if(0 !== slide)
    {
        console.log("need to refresh.");
    }
    renderSlide(slider.reset());
}

function next()
{
    renderSlide(slider.next());
}

function previous()
{
    renderSlide(slider.previous());
}

function renderLaser(x, y)
{
    var img = $("div#holder img.visible-image").eq(0);
    var div = $("div#holder").eq(0);
    var webx = (div.width() - img.width())/2 + (x * img.width());
    var weby = (div.height() - img.height())/2 + (y * img.height());
    var circle = $("div#circle").eq(0);
    circle.removeClass("invisible").addClass("visible");
    circle.css("left", webx);
    circle.css("top", weby);
}

function laserOff()
{
    $("#circle").removeClass().addClass("invisible");
}

(function()
{
    $(document).ready(function()
    {
        var socket = io.connect('http://37.139.30.151:3700');
        socket.on('message', function(data)
        {
            parseMessage(data);
        })
    });
})();

var slider = (function()
{
    var number = 0;
    var tracker = {};
    tracker.get = function()
    {
        return number;
    };
    tracker.next = function()
    {
        if(number < 3)
            number++;
        return number;
    };
    tracker.previous = function()
    {
        number--;
        return number;
    };
    tracker.reset = function()
    {
        number = 1;
        return number;
    }
    return tracker;
})();