import './style.css'
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "https://cdn.jsdelivr.net/gh/studio-freight/lenis@latest/bundled/lenis.js"
// import {gsap} from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"
// import "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"


document.querySelector('#app').innerHTML = `
<main>
<h1>art.jkbro.dev</h1>

<section>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</section>

<section>
    <div class="img"></div>
    <div class="img"></div>
    <div class="img"></div>
    <div class="img"></div>
    <div class="img"></div>
    <div class="img"></div>
    <div class="img"></div>
    <div class="img"></div>
    <div class="img"></div>
</section>

<section></section>
</main>
`

// setupCounter(document.querySelector('#counter'))



gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const tl = gsap
    .timeline({
        scrollTrigger: {
            trigger: ".img",
            scrub: true,
        },
    })
    .to(".img", {
        stagger: 0.2,
        y: -700,
        scrub: true,
    });
