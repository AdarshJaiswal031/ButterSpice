gsap.registerPlugin(ScrollTrigger);
class Animator {
    animateWhenVisible(id, fn) {
        ScrollTrigger.create({
            trigger: id,
            start: "top 80%",
            onEnter: fn,
            once: true
        });
    }

    animateFromBottom(id, props = {}) {
        this.animateWhenVisible(id, () => {
            gsap.from(id, {
                delay: 0.4,
                opacity: 0,
                duration: 1,
                y: 60,
                ...props
            });
        })
    }

    animateScale(id, props = {}) {
        this.animateWhenVisible(id, () => {
            gsap.from(id, {
                delay: 0.4,
                opacity: 0,
                duration: 1.2,
                scale: 0.7,
                ...props
            });
        })
    }

    animateDirection(id, props = {}) {
        this.animateWhenVisible(id, () => {
            gsap.to(id, {
                opacity: 1,
                duration: 3,
                ...props
            });

        });
    }

    animateHeight01(id, props = {}) {
        this.animateWhenVisible(id, () => {
            gsap.to(id, {
                duration: 1.2, // animation duration in seconds
                y: "100%",
                ...props
            });

        });
    }
    shiftImg(id, index, val, len, props = {}) {
        this.animateWhenVisible(id, () => {
            gsap.to(id, { left: "-" + (val * index) + "rem", duration: 1, ...props });
        });
    }

    drawer(id, element) {
        id.addEventListener("mouseover", () => {
            this.animateHeight01(element, { duration: 0.5 })
        })
        id.addEventListener("mouseleave", () => {
            this.animateHeight01(element, { y: "-100%", duration: 0.5 })
        })
    }

}
let an = new Animator();

const dotLeft = document.getElementsByClassName("dot-left")
const dotRight = document.getElementsByClassName("dot-right")
const coverImg = document.getElementsByClassName("cover-img")
const scaleAnimate = document.getElementsByClassName("scale-animate")
const drawerHover = document.getElementsByClassName("drawer-hover")

//------- childrenRunnder -> ./utils.js file
childrenRunner(dotLeft, an.animateDirection.bind(an), { x: -10 })
childrenRunner(dotRight, an.animateDirection.bind(an), { x: 10 })
childrenRunner(coverImg, an.animateHeight01.bind(an))
childrenRunner(scaleAnimate, an.animateScale.bind(an))

Array.from(drawerHover).forEach((item) => {
    const element = item.children[1];
    console.log(element)
    an.drawer(item, element)
})







