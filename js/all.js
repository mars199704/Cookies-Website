const nav = document.querySelector('nav')
const backgroundTitle = document.querySelector('.backgroundTitle')
const height = window.screen.height
const mainPictureBackground = document.querySelectorAll('.mainPictureBackground img')

window.addEventListener('scroll', function(){
  nav.classList.toggle('active', window.scrollY > 50)
})

//  header animation
var tlHead = new TimelineMax();
tlHead.from(".firstBackground", .5, {height:"100%"});
tlHead.to(".firstBackground", .5, {height:"0%", ease: Power2.easeInOut});
tlHead.from(".box", 1, {height:"100%"}, "=-1")
tlHead.to(".box", 1, {height:"0%"})
tlHead.from(".mainWords", 1, {opacity: 0}, "=-.5")
tlHead.to(".mainWords", 1, {opacity: 1})
tlHead.from(".logo", 1, {x: -100, opacity:0}, "=-1")
tlHead.to(".logo",1, {x: 0, opacity:1})
tlHead.from(".navMain", .2, {y:-100,opacity:0}, "=-1")
tlHead.to(".navMain",.2, {y:0, opacity:1})
tlHead.from(".navAbout", .2, {y:-100,opacity:0}, "=-1")
tlHead.to(".navAbout",.2, {y:0, opacity:1})
tlHead.from(".navNews", .2, {y:-100,opacity:0}, "=-1")
tlHead.to(".navNews",.2, {y:0, opacity:1})
tlHead.from(".navProducts", .2, {y:-100,opacity:0}, "=-1")
tlHead.to(".navProducts",.2, {y:0, opacity:1})
tlHead.from(".navStore", .2, {y:-100,opacity:0}, "=-1")
tlHead.to(".navStore",.2, {y:0, opacity:1})

tlHead.from(".mainPicture", 2, {
  rotation: 120,
  transformOrigin:"right top"
}, "=-1")
tlHead.to(".mainPicture",2, {
  rotation:0,
})




//  about page animation
var aboutController = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.from("#about", .5, {x:-300, opacity:0});
tl.to("#about", .5, {x:0, opacity:1});
tl.from(".aboutWord", .5, {y:300, opacity:0}, "=-1");
tl.to(".aboutWord", .5, {y:0, opacity:1});

var scene = new ScrollMagic.Scene({
  triggerElement: ".aboutSection",
  triggerHook: 0
})
  .addIndicators({
    colorTrigger: "black",
    colorStart: "black",
    colorEnd: "black",
  })
  .setTween(tl)
  .addTo(aboutController);


//  news page animation
var newsController = new ScrollMagic.Controller();
var tl2 = new TimelineMax();
tl2.from("#news", .5, {y:-300, opacity:0});
tl2.to("#news", .5, {y:0, opacity:1});
tl2.from(".newsWord", .5, {x:-300, opacity:0}, "=-1");
tl2.to(".newsWord", .5, {x:0, opacity:1});


var scene = new ScrollMagic.Scene({
  triggerElement: ".newsSection",
  triggerHook: 0
})
  .addIndicators({
    colorTrigger: "black",
    colorStart: "black",
    colorEnd: "black",
  })
  .setTween(tl2)
  .addTo(newsController);


//  background title animation
var backgroundTitleController = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: ".background",
  triggerHook: 0
})
.setClassToggle(".backgroundTitle", "fixed") 
// .addIndicators() 
.addTo(backgroundTitleController);


var swiper = new Swiper('.playBox', {
  navigation: {
    nextEl: '.fa-step-forward',
    prevEl: '.fa-step-backward',
  },
});