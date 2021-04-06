//  round text
$('.roundWord').arctext({radius: 140, dir: 1});

const nav = document.querySelector('nav')
const backgroundTitle = document.querySelector('.backgroundTitle')
const height = window.screen.height

window.addEventListener('scroll', function(){
  nav.classList.toggle('active', window.scrollY > 50)

  // not yet
  console.log(window.scrollY, height)
})


var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.from("#about", 1, {x:-300, opacity:0});
tl.to("#about", 1, {x:0, opacity:1});
tl.from(".aboutWord", 1, {y:300, opacity:0}, "=-1");
tl.to(".aboutWord", 1, {y:0, opacity:1});

var scene = new ScrollMagic.Scene({
  triggerElement: ".aboutSection",
  triggerHook: 0
})
  // .addIndicators({
  //   colorTrigger: "black",
  //   colorStart: "black",
  //   colorEnd: "black",
  // })
  .setTween(tl)
  .addTo(controller);


var controller2 = new ScrollMagic.Controller();
var tl2 = new TimelineMax();
tl2.from("#news", 1, {y:-300, opacity:0});
tl2.to("#news", 1, {y:0, opacity:1});
tl2.from(".newsWord", 1, {x:-300, opacity:0}, "=-1");
tl2.to(".newsWord", 1, {x:0, opacity:1});


var scene = new ScrollMagic.Scene({
  triggerElement: ".newsSection",
  triggerHook: 0
})
  // .addIndicators({
  //   colorTrigger: "black",
  //   colorStart: "black",
  //   colorEnd: "black",
  // })
  .setTween(tl2)
  .addTo(controller2);


var controller3 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: ".background",
  triggerHook: 0
})
.setClassToggle(".backgroundTitle", "fixed") 
// .addIndicators() 
.addTo(controller3);