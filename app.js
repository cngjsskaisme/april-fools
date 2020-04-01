const intro = document.querySelector('.intro');
const overlay = intro.querySelector('.overlayer')
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
const sub2 = document.querySelector("#element1");
const sub3 = document.querySelector("#element2");
const sub4 = document.querySelector("#element3");

video.currentTime = 0;
video.currentTime = 0;
window.onload = () => {
    let bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    bannerNode.parentNode.removeChild(bannerNode);
    video.currentTime = 0;
    video.currentTime = 0;
 }

sub4.style.visibility = 'visible';

setTimeout(function(){
    video.currentTime = 0;
    video.currentTime = 0;
    document.querySelector(".loader").classList.add("hide");
    setTimeout(function(){document.querySelector(".loader").style.display="none";}, 1000);
    video.currentTime = 0;
}, 3000)

setTimeout(function(){
    document.body.style.overflow = 'auto'
}, 6000)

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 2400,
    triggerElement: intro,
    triggerHook: 0
})
    //.addIndicators()
    .setPin(intro)
    .addTo(controller);


let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 500;
});
    
setInterval(() => {
    if (Math.abs(scrollpos - delay) > 0.1){
        delay += (scrollpos - delay) * accelamount;

        video.currentTime = delay;
    }
}, 20);


let scene2 = new ScrollMagic.Scene({
    duration: 400,
    triggerElement: sub2,
    triggerHook: 0.3,
})
    .addTo(controller);

scene2.on("start", e => {
    sub2.style.visibility = 'visible';
    title = sub2.querySelector('.title');
    texter = sub2.querySelector('.text');
    title.classList.add('animated', 'fadeInUp');
    texter.classList.add('animated', 'fadeIn');
})

let scene3 = new ScrollMagic.Scene({
    duration: 400,
    triggerElement: sub3,
    triggerHook: 0.3,
})
    .addTo(controller);

scene3.on("start", e => {
    sub3.style.visibility = 'visible';
    title = sub3.querySelector('.title');
    texter = sub3.querySelector('.text');
    title.classList.add('animated', 'fadeInUp');
    texter.classList.add('animated', 'fadeIn');
})

$(document).ready(function() {
    $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : false,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    });
  });