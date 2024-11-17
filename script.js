//Locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//SELECTION AND VARIABLES
let miniCircle = document.querySelector("#mini-circle")
let elemImg = document.querySelectorAll(".elem")

var timeout;


//Mouse Skew
function mouseChapta() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", (dets) => {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev)
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)

        xprev = dets.clientX
        yprev = dets.clientY


        mouseFollower(xscale, yscale)

        timeout = setTimeout(() => {
            miniCircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
        }, 100);



    })
}


//Mouse Follower
function mouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", (moves) => {
        miniCircle.style.transform = `translate(${moves.clientX}px, ${moves.clientY}px) scale(${xscale}, ${yscale})`
    })
}

//First Page Animation
function firstPageAnim() {
    var tl = gsap.timeline()

    tl.from("#nav", {
        y: '-10',
        duration: 1.5,
        opacity: 0,
        ease: Expo.easeInOut,
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            stagger: .2,
            delay: -1,
        })

        .from("#herofooter", {
            y: -15,
            duration: 1.5,
            opacity: 0,
            delay: -1,



        })


}

//IMAGE HOVER 

elemImg.forEach((elem) => {
    var imgHover = elem.querySelector("img")

    elem.addEventListener("mousemove", (dets) => {
        var diff = dets.clientY - elem.getBoundingClientRect().top * 1.5

        gsap.to(imgHover, {
            opacity: 1,
            ease: Power1,
            left: dets.clientX,


        })



    })

    elem.addEventListener("mouseleave", () => {
        gsap.to(imgHover, {
            opacity: 0,
        })



    })



})

// firstPageAnim()
mouseFollower()
mouseChapta()

