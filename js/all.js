// Everything OK?
console.log('OK');

// Your Awesome Scripts
$('.roundWord').arctext({radius: 100, dir: 1});





window.addEventListener('scroll', function(){
  const nav = document.querySelector('nav')
  nav.classList.toggle('active', window.scrollY > 50)
})