var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax({repeat: -1, paused: true});
    // var cartl = new TimelineMax();
    var pintl = new TimelineMax();
    var tltxt = new TimelineMax();

    // var car = document.getElementById('car');
    // var car_upper = document.getElementById('car_upper');
    var pin = document.getElementById('pin');
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
        t.set(pin, {y:"-=10", transformOrigin: "50% 100%"});

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
            t.to(elm, R(25, 30), {y: h - 50, ease: Linear.easeNone, repeat: -1, delay: -150});
            t.to(elm, R(25, 30), {x: '+=50', repeat: -1, yoyo: true, ease: Sine.easeInOut});
        }

        function R(min, max) {
            return min + Math.random() * (max - min)
        }

        pintl.from(pin, .25, {scale:"-=.2", opacity:0, ease: Sine.easeInOut}, "+=3.5")
            .to(pin, .25, {y:"+=10", ease: Sine.easeIn}, "+=.2")
            .to(pin, .25, {y:"-=5", ease: Sine.easeOut})
            .to(pin, .25, {y:"+=5", ease: Sine.easeIn})
            .to(pin, 1, {y: "-=5", ease: Sine.easeOut, onComplete: function () {tl1.play()}});



        tltxt.to(txt1, .25, {opacity: 1}, "+=.75")
            .fromTo(txt1, .25, {y: "-=20"}, {y: "+=23", ease: Sine.easeOut}, "-=.25")
            .to(txt1, .1, {y: "-=3", ease: Sine.easeInOut})

            .to(txt2, .25, {opacity: 1}, "+=1.25")
            .fromTo(txt2, .25, {y: "-=20"}, {y: "+=23", ease: Sine.easeOut}, "-=.25")
            .to(txt2, .1, {y: "-=3", ease: Sine.easeInOut})

            .to(txt3, .25, {opacity: 1}, "+=1")

            .to(cta, .25, {opacity: 1}, "+=.75")
            .fromTo(cta, .25, {y: "-=20"}, {y: "+=23", ease: Sine.easeOut}, "-=.25")
            .to(cta, .2, {y: "-=3", ease: Sine.easeInOut});


        tl1.to(pin, 1, {y: '+=5', ease: Sine.easeInOut})
            .to(pin, 1, {y: '-=5', ease: Sine.easeInOut});

        // t.to(car_upper, .1, {y: "+=.5", ease: Linear.easeNone, repeat: -1, yoyo:true});
        //
        // cartl.from(car, 1, {x: "+=150", ease: Sine.easeOut}, "+=4")
        //     .from(car_upper, .5, {rotation:-3, ease: Sine.easeOut}, "-=.5")
        //     .to(car_upper, .2, {rotation:+2, ease: Sine.easeInOut, repeat: 1, yoyo:true})
        //     .to(car, 1, {x: "-=250", ease: Sine.easeIn}, "+=2")
        //     .to(car_upper, .5, {rotation:3, ease: Sine.easeIn}, "-=1");



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
