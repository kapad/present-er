function parseMessage(data)
{

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
    renderSlide(slider.next());
}

function next()
{

}

function previous()
{
    
}

function renderLaser(x, y)
{

}

function laserOff()
{

}

(function()
{
    $(document).ready(function()
    {
        var socket = io.connect('http://localhost:3700');
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
        number++;
        return number;
    };
    tracker.previous = function()
    {
        number--;
        return number;
    };
    return tracker;
})();