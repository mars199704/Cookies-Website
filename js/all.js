//  round text
$('.roundWord').arctext({radius: 140, dir: 1});

const nav = document.querySelector('nav')
const backgroundTitle = document.querySelector('.backgroundTitle')
const height = window.screen.height

window.addEventListener('scroll', function(){
  nav.classList.toggle('active', window.scrollY > 50)

  // not yet
  console.log(window.scrollY, height)
  backgroundTitle.classList.toggle('fixed', window.scrollY > (2.2 * height))
})


