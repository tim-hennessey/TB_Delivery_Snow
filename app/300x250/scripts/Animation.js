var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax({repeat:-1, delay:.1});
    var tl2 = new TimelineMax({repeat:-1, delay:.2});
    var tl3 = new TimelineMax({repeat:-1, delay:.3});
    var tl4 = new TimelineMax({repeat:-1, delay:.4});
    var tl5 = new TimelineMax({repeat:-1, delay:.5});

    var pin1 = document.getElementById('pin1');
    var pin2 = document.getElementById('pin2');
    var pin3 = document.getElementById('pin3');
    var pin4 = document.getElementById('pin4');

    var buttonExit = document.getElementById('button-exit');

    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {

        var total = 500;
        var container = document.getElementById("container"), w = window.innerWidth, h = window.innerHeight;

        t.set(banner, {opacity: 1});
        t.set("#container", {perspective: 600});
        t.set(pin1, {transformOrigin: "50% 100%"});
        t.set(pin2, {transformOrigin: "50% 100%"});
        t.set(pin3, {transformOrigin: "50% 100%"});
        t.set(pin4, {transformOrigin: "50% 100%"});
        t.set(pin5, {transformOrigin: "50% 100%"});

        buttonExit.addEventListener('mouseover', function () {

        });
        buttonExit.addEventListener('mouseout', function () {

        });

        for (var i = 0; i < total; i++) {
            var Div = document.createElement('div');
            t.set(Div, {
                attr: {class: 'dot'},
                x: R(-50, w + 50),
                y: R(-200, -150),
                z: R(-200, 200),
                opacity: R(.25, 1)
            });
            container.appendChild(Div);
            animm(Div);
        }

        function animm(elm) {
            t.to(elm, R(3, 6.5), {y: h, ease: Linear.easeNone, repeat: -1, delay: -15});
            t.to(elm, R(5, 7), {x: '+=100', repeat: -1, yoyo: true, ease: Sine.easeInOut});
        }

        function R(min, max) {
            return min + Math.random() * (max - min)
        }

    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {

        tl1.to(pin1, .35, {scaleX: '-=.1', scaleY:"+=.1", ease: Sine.easeInOut}, "+=.1")
            .to(pin1, .35, {y:'-=10',  ease: Sine.easeInOut}, "-=.2")
            .to(pin1, .35, {y:'+=10',  ease: Sine.easeInOut}, "+=.15")
            .to(pin1, .2, {scaleX: '+=.1', scaleY:"-=.1", ease: Sine.easeInOut}, "-=.2");

        tl2.to(pin2, .35, {scaleX: '-=.1', scaleY:"+=.1", ease: Sine.easeInOut}, "+=.1")
            .to(pin2, .35, {y:'-=10',  ease: Sine.easeInOut}, "-=.2")
            .to(pin2, .35, {y:'+=10',  ease: Sine.easeInOut}, "+=.15")
            .to(pin2, .2, {scaleX: '+=.1', scaleY:"-=.1", ease: Sine.easeInOut}, "-=.2");

        tl3.to(pin3, .35, {scaleX: '-=.1', scaleY:"+=.1", ease: Sine.easeInOut}, "+=.1")
            .to(pin3, .35, {y:'-=10',  ease: Sine.easeInOut}, "-=.2")
            .to(pin3, .35, {y:'+=10',  ease: Sine.easeInOut}, "+=.15")
            .to(pin3, .2, {scaleX: '+=.1', scaleY:"-=.1", ease: Sine.easeInOut}, "-=.2");

        tl4.to(pin4, .35, {scaleX: '-=.1', scaleY:"+=.1", ease: Sine.easeInOut}, "+=.1")
            .to(pin4, .35, {y:'-=10',  ease: Sine.easeInOut}, "-=.2")
            .to(pin4, .35, {y:'+=10',  ease: Sine.easeInOut}, "+=.15")
            .to(pin4, .2, {scaleX: '+=.1', scaleY:"-=.1", ease: Sine.easeInOut}, "-=.2");

        tl5.to(pin5, .35, {scaleX: '-=.1', scaleY:"+=.1", ease: Sine.easeInOut}, "+=.1")
            .to(pin5, .35, {y:'-=10',  ease: Sine.easeInOut}, "-=.2")
            .to(pin5, .35, {y:'+=10',  ease: Sine.easeInOut}, "+=.15")
            .to(pin5, .2, {scaleX: '+=.1', scaleY:"-=.1", ease: Sine.easeInOut}, "-=.2");


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
