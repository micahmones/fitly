//******************************************
//PRIMARY ELEMENTS
//******************************************
var menu = document.querySelector(".menu"),
    toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
  toggle.classList.toggle("menu-open");
  toggleMenu()
};

function toggleMenu() {
  menu.classList.toggle("active");
};

//toggle.addEventListener("click", toggleToggle, false);
//toggle.addEventListener("click", toggleMenu, false);


//******************************************
//OBJECTS AND HOLDERS
//******************************************

//array holding objects and info for all exercises
//could split up if they are too many exercises if you want
//e.g: push, pull, full body, etc
var exercises = [bench_press];

//just an example
var bench_press = {
  name: "Bench Press",
  desc: "Lay flat, fuck up your shoulders, and don't do full range.",
  img: "bench.jpg"
};

//******************************************
//UI STATES
//******************************************



//******************************************
//FUNCTIONS TO CHANGE STATES
//******************************************



//******************************************
//FUNCTIONS TO CHANGE UI
//******************************************

//testing this
function goBack() {
  window.history.back();
}

//fading in listener on homepage
document.addEventListener('DOMContentLoaded', setTimeout(
  function () {
    setTimeout(function () {
      document.getElementsByClassName('body-content')[0].classList.remove('fade');
    }, 150); // delay for fitly logo
    setTimeout(function () {
      document.getElementsByClassName('blue-btn')[0].classList.remove('fade')
    }, 2000); // delay for get started button
  }, 100)); // overall delay upon page load