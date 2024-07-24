$(document).ready(function () {
    $("nav .taps>li").hover(function () {
        $(this).find(".drop").slideDown()
    }
        , function () {
            $(this).find(".drop").css("display", "none")
        })


    $(".categories .btn").hover(function () {
        let order = $(this).attr("target");
        let sCase = $(order).attr("case");
        console.log(sCase)
        if (sCase == "off") {
            $("nav .taps>li .big-drop .child .container .show .slide-con").slideUp();
            $("nav .taps>li .big-drop .child .container .show .slide-con").attr("case", "off");
            $(order).attr("case", "on");
            $("nav .taps>li .big-drop .child .container .show " + order).slideDown();
            console.log(order)
        }
    }, function () {
        cancel();
    }
    )


    function slideIn(slideBtn) {
        $("main .slide .banner-word").css({ "filter": "blur(0px)" })
        let btnTarget = slideBtn.attr("target")

        let h1 = btnTarget + " h1";
        let p = btnTarget + " p";
        titleH1 = $(h1).attr("text")
        subjectP = $(p).attr("text")

        lenH1 = titleH1.length - 1;
        lenP = subjectP.length - 1;

        h1Counter = 0;
        pCounter = 0;


        let slideOpen = setInterval(function () {
            $(btnTarget + " .layer").css({ "backdrop-filter": "blur(0px)" })
            if (h1Counter <= lenH1) {
                h1Counter++;
                end = titleH1.slice(0, h1Counter)
                $(h1).html(end)
            } else {
                $(btnTarget + " .banner-img").css({ "transform": "translateX(0%)", opacity: 1 })
                if (pCounter <= lenP) {
                    pCounter++;
                    end = subjectP.slice(0, pCounter)
                    $(p).html(end)
                } else {
                    $(btnTarget + " .btn-container>*").css({ "transform": "translateX(0%)" })
                    clearInterval(slideOpen)
                }
            }
        }, 50)


    }



    function slideOut() {
        $("main .slide .banner-img").css({ "transform": "translateX(110%)", opacity: 0 })
        $("main .slide .layer").css({ "backdrop-filter": "blur(30px)" })
        $("main .slide .banner-word").css({ "filter": "blur(100px)" })
        $("main .slide h1").html(" ")
        $("main .slide p").html(" ")

        $("main .slide").fadeOut()
    }



    $(".slides-btn-container .slide-btn").click(function () {
        let btnCase = $(this).attr("case");
        if (btnCase == "off") {
            $(".slides-btn-container .slide-btn").attr("case", "off");
            $(this).attr("case", "on");
            slideOut()
            if (slideOut) {
                let btnTarget = $(this).attr("target")
                $(btnTarget).css("display", "flex")
                slideIn($(this));
            }
        }
    })

    function openning(element) {
        let btnTarget = element.attr("target")
        $(btnTarget).css("display", "flex")
        slideIn(element)
    }

    openning($("main .first-slide-btn"))
})



// ############# clock


let date = new Date()
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
if (hours <= 10) {
    $(".clock .hours span").html("0" + hours);
} else if (12 >= hours > 10) {
    $(".clock .hours span").html(hours);
} else {
    $(".clock .hours span").html("0" + (hours - 12));
}

if (min.toString().length == 2) {
    $(".clock .min span").html(min);
} else {
    $(".clock .min span").html("0" + min);
}

if (sec.toString().length == 2) {
    $(".clock .sec span").html(sec);
} else {
    $(".clock .sec span").html("0" + sec);
}




setInterval(function () {

    let date = new Date()
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (hours <= 10) {
        $(".clock .hours span").html("0" + hours);
    } else if (12 >= hours > 10) {
        $(".clock .hours span").html(hours);
    } else {
        $(".clock .hours span").html("0" + (hours - 12));
    }

    if (min.toString().length == 2) {
        $(".clock .min span").html(min);
    } else {
        $(".clock .min span").html("0" + min);
    }

    if (sec.toString().length == 2) {
        $(".clock .sec span").html(sec);
    } else {
        $(".clock .sec span").html("0" + sec);
    }

}, 1000)


$(".more").click(function () {
    $(".floating-game-details").css({ "transform": "translateY(0px)", "opacity": "1" })
})
$(".close-btn").click(function () {
    $(".floating-game-details").css({ "transform": "translateY(100%)", "opacity": "0" })
})


// ################3

$(".character-store .characters .cards .card .small-info .bar").click(function () {
    let smallInfoCase = $(this).closest(".small-info").attr("case");
    if(smallInfoCase=="on"){
        $(this).closest(".small-info").attr("case","off");
        $(this).closest(".small-info").css("bottom","-29%")
    }else{
        $(this).closest(".small-info").attr("case", "on");
        $(this).closest(".small-info").css("bottom", "0px")
    }

    $(this).closest(".card").find(".btns button").toggleClass("out")
})

// #########

// $(".more-btn")