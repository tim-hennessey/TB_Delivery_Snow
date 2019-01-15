var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax({repeat: -1, paused: true});
    var tl2 = new TimelineMax({repeat: -1, paused: true});
    var tl3 = new TimelineMax({repeat: -1, paused: true});
    var tl4 = new TimelineMax({repeat: -1, paused: true});
    var tl5 = new TimelineMax({repeat: -1, paused: true});

    var pintl1 = new TimelineMax();
    var pintl2 = new TimelineMax();
    var pintl3 = new TimelineMax();
    var pintl4 = new TimelineMax();
    var pintl5 = new TimelineMax();

    var tltxt = new TimelineMax();

    var pin1 = document.getElementById('pin1');
    var pin2 = document.getElementById('pin2');
    var pin3 = document.getElementById('pin3');
    var pin4 = document.getElementById('pin4');

    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var txt3 = document.getElementById('txt3');

    var cta = document.getElementById('cta');
    var cta_bg = document.getElementById('cta_bg');

    var buttonExit = document.getElementById('button-exit');

    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {


        t.set(banner, {opacity: 1});
        t.set("#container", {perspective: 600});
        t.set(pin1, {transformOrigin: "50% 100%"});
        t.set(pin2, {transformOrigin: "50% 100%"});
        t.set(pin3, {transformOrigin: "50% 100%"});
        t.set(pin4, {transformOrigin: "50% 100%"});
        t.set(pin5, {transformOrigin: "50% 100%"});

        t.set(txt1, {transformOrigin: "50% 5%"});
        t.set(txt2, {transformOrigin: "50% 30%"});

        buttonExit.addEventListener('mouseover', function () {
            t.to(cta_bg, .25, {backgroundColor: "rgba(211, 78, 255, 1)"});

        });
        buttonExit.addEventListener('mouseout', function () {
            t.to(cta_bg, .25, {backgroundColor: "rgba(0, 11, 56, 1)"});

        });


    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {

        var total = 1000;
        var container = document.getElementById("container"), w = window.innerWidth, h = window.innerHeight;

        for (var i = 0; i < total; i++) {
            var Div = document.createElement('div');
            t.set(Div, {
                attr: {class: 'dot'},
                x: R(-100, w),
                y: R(-100, -50),
                opacity: R(.25, 1)
            });
            container.appendChild(Div);
            animm(Div);
        }

        function animm(elm) {
            t.to(elm, R(16, 18), {y: h - 50, ease: Linear.easeNone, repeat: -1, delay: -150});
            t.to(elm, R(16, 18), {x: '+=50', repeat: -1, yoyo: true, ease: Sine.easeInOut});
        }

        function R(min, max) {
            return min + Math.random() * (max - min)
        }

        pintl1.from(pin1, .75, {y: "-=200", ease: Sine.easeIn}, "+=3.1")
            .to(pin1, .3, {scaleY:"-=.1", scaleX: "+=.1", ease: Sine.easeOut})
            .to(pin1, .5, {y: "-=10", scaleY: "+=.1", scaleX: "-=.1", ease: Sine.easeInOut}, "+=.05")
            .to(pin1, 1, {y: "+=10", ease: Sine.easeInOut, onComplete: function () {tl1.play()}});

        pintl2.from(pin2, .75, {y: "-=200", ease: Sine.easeIn}, "+=3.2")
            .to(pin2, .3, {scaleY:"-=.1", scaleX: "+=.1", ease: Sine.easeOut})
            .to(pin2, .5, {y: "-=10", scaleY: "+=.1", scaleX: "-=.1", ease: Sine.easeInOut}, "+=.05")
            .to(pin2, 1, {y: "+=10", ease: Sine.easeInOut, onComplete: function () {tl2.play()}});

        pintl3.from(pin3, .75, {y: "-=200", ease: Sine.easeIn}, "+=3.3")
            .to(pin3, .3, {scaleY:"-=.1", scaleX: "+=.1", ease: Sine.easeOut})
            .to(pin3, .5, {y: "-=10", scaleY: "+=.1", scaleX: "-=.1", ease: Sine.easeInOut}, "+=.05")
            .to(pin3, 1, {y: "+=10", ease: Sine.easeInOut, onComplete: function () {tl3.play()}});

        pintl4.from(pin4, .75, {y: "-=200", ease: Sine.easeIn}, "+=3.4")
            .to(pin4, .3, {scaleY:"-=.1", scaleX: "+=.1", ease: Sine.easeOut})
            .to(pin4, .5, {y: "-=10", scaleY: "+=.1", scaleX: "-=.1", ease: Sine.easeInOut}, "+=.05")
            .to(pin4, 1, {y: "+=10", ease: Sine.easeInOut, onComplete: function () {tl4.play()}});

        pintl5.from(pin5, .75, {y: "-=200", ease: Sine.easeIn}, "+=3.5")
            .to(pin5, .3, {scaleY:"-=.1", scaleX: "+=.1", ease: Sine.easeOut})
            .to(pin5, .5, {y: "-=10", scaleY: "+=.1", scaleX: "-=.1", ease: Sine.easeInOut}, "+=.05")
            .to(pin5, 1, {y: "+=10", ease: Sine.easeInOut, onComplete: function () {tl5.play()}});



        tltxt.to(txt1, .25, {opacity: 1}, "+=.75")
            .fromTo(txt1, .25, {y: "-=20", ease: Sine.easeIn}, {scaleX:"+=.05", scaleY:"-=.1", y: "+=25", ease: Sine.easeOut}, "-=.25")
            .to(txt1, .15, {scaleX:"-=.05", scaleY:"+=.1", y: "-=5", ease: Sine.easeIn}, "+=.1")

            .to(txt2, .25, {opacity: 1}, "+=1.5")
            .fromTo(txt2, .25, {y: "-=20", ease: Sine.easeIn}, {scaleX:"+=.05", scaleY:"-=.1", y: "+=25", ease: Sine.easeOut}, "-=.25")
            .to(txt2, .15, {scaleX:"-=.05", scaleY:"+=.1", y: "-=5", ease: Sine.easeIn}, "+=.1")

            .to(txt3, .25, {opacity: 1}, "+=2");


        tl1.to(pin1, 1, {y: '-=5', ease: Sine.easeInOut})
            .to(pin1, 1, {y: '+=5', ease: Sine.easeInOut});

        tl2.to(pin2, 1, {y: '-=5', ease: Sine.easeInOut})
            .to(pin2, 1, {y: '+=5', ease: Sine.easeInOut});

        tl3.to(pin3, 1, {y: '-=5', ease: Sine.easeInOut})
            .to(pin3, 1, {y: '+=5', ease: Sine.easeInOut});

        tl4.to(pin4, 1, {y: '-=5', ease: Sine.easeInOut})
            .to(pin4, 1, {y: '+=5', ease: Sine.easeInOut});

        tl5.to(pin5, 1, {y: '-=5', ease: Sine.easeInOut})
            .to(pin5, 1, {y: '+=5', ease: Sine.easeInOut});


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
