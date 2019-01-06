var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    // var tl1 = new TimelineMax();
    var buttonExit = document.getElementById('button-exit');


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        t.set(banner, {opacity: 1});

        buttonExit.addEventListener('mouseover', function () {

        });

        buttonExit.addEventListener('mouseout', function () {

        });
    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {

    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }

})();
