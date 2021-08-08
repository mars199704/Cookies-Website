const nav = document.querySelector("nav");
const backgroundTitle = document.querySelector(".backgroundTitle");
const height = window.screen.height;
const ham = document.querySelector(".ham");
const li = document.querySelectorAll("nav ul li");

ham.addEventListener("click", function () {
  ham.classList.toggle("open");
  nav.classList.toggle("open");
});

li.forEach((li) => {
  li.addEventListener("click", function () {
    ham.classList.remove("open");
    nav.classList.remove("open");
  });
});

window.addEventListener("scroll", function () {
  nav.classList.toggle("active", window.scrollY > 50);
});

//  header animation
var tlHead = new TimelineMax();
tlHead.from(".firstBackground", 0.5, { height: "100%" });
tlHead.to(".firstBackground", 0.5, { height: "0%", ease: Power2.easeInOut });
tlHead.from(".box", 1, { height: "100%" }, "=-1");
tlHead.to(".box", 1, { height: "0%" });
tlHead.from(".mainWords", 1, { opacity: 0 }, "=-.5");
tlHead.to(".mainWords", 1, { opacity: 1 });
tlHead.from(".logo", 1, { x: -100, opacity: 0 }, "=-1");
tlHead.to(".logo", 1, { x: 0, opacity: 1 });
tlHead.from(".navMain", 0.2, { y: -100, opacity: 0 }, "=-1");
tlHead.to(".navMain", 0.2, { y: 0, opacity: 1 });
tlHead.from(".navAbout", 0.2, { y: -100, opacity: 0 }, "=-1");
tlHead.to(".navAbout", 0.2, { y: 0, opacity: 1 });
tlHead.from(".navNews", 0.2, { y: -100, opacity: 0 }, "=-1");
tlHead.to(".navNews", 0.2, { y: 0, opacity: 1 });
tlHead.from(".navProducts", 0.2, { y: -100, opacity: 0 }, "=-1");
tlHead.to(".navProducts", 0.2, { y: 0, opacity: 1 });
tlHead.from(".navStore", 0.2, { y: -100, opacity: 0 }, "=-1");
tlHead.to(".navStore", 0.2, { y: 0, opacity: 1 });

tlHead.from(
  ".mainPicture",
  2,
  {
    rotation: 120,
    transformOrigin: "right top",
  },
  "=-1"
);
tlHead.to(".mainPicture", 2, {
  rotation: 0,
});

//  about page animation
var aboutController = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.from(".about", 0.5, { x: -300, opacity: 0 });
tl.to(".about", 0.5, { x: 0, opacity: 1 });
tl.from(".aboutWord", 0.5, { y: 300, opacity: 0 }, "=-1");
tl.to(".aboutWord", 0.5, { y: 0, opacity: 1 });

var scene1 = new ScrollMagic.Scene({
  triggerElement: ".aboutSection",
  triggerHook: 0,
})
  // .addIndicators({
  //   colorTrigger: "black",
  //   colorStart: "black",
  //   colorEnd: "black",
  // })
  .setTween(tl)
  .addTo(aboutController);

//  news page animation
var newsController = new ScrollMagic.Controller();
var tl2 = new TimelineMax();
tl2.from(".news", 0.5, { y: -300, opacity: 0 });
tl2.to(".news", 0.5, { y: 0, opacity: 1 });
tl2.from(".newsWord", 0.5, { x: -300, opacity: 0 }, "=-1");
tl2.to(".newsWord", 0.5, { x: 0, opacity: 1 });

var scene2 = new ScrollMagic.Scene({
  triggerElement: ".newsSection",
  triggerHook: 0,
})
  // .addIndicators({
  //   colorTrigger: "black",
  //   colorStart: "black",
  //   colorEnd: "black",
  // })
  .setTween(tl2)
  .addTo(newsController);

//  background title animation
var backgroundTitleController = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: ".background",
  triggerHook: 0,
})
  .setClassToggle(".backgroundTitle", "fixed")
  // .addIndicators()
  .addTo(backgroundTitleController);

var swiper = new Swiper(".playBox", {
  navigation: {
    nextEl: ".fa-step-forward",
    prevEl: ".fa-step-backward",
  },
});

// pause button
const pause = document.querySelector(".change i:nth-child(3)");
const cookies = document.querySelectorAll(".cookieImg");

pause.addEventListener("click", function () {
  this.classList.toggle("fa-play");
  this.classList.toggle("fa-pause");
  if (this.classList.contains("fa-pause")) {
    cookies.forEach((cookie) => {
      cookie.style.animationPlayState = "paused";
    });
  } else {
    cookies.forEach((cookie) => {
      cookie.style.animationPlayState = "running";
    });
  }
});
