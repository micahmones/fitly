//******************************************
//PRIMARY ELEMENTS
//******************************************
var menu = document.querySelector(".menu"),
    toggle = document.querySelector(".menu-toggle"),
    beginner = document.querySelector(".beginner-dropdown"),
    intermediate = document.querySelector(".intermediate-dropdown"),
    advanced = document.querySelector(".advanced-dropdown");

function toggleToggle() {
  toggle.classList.toggle("menu-open");
  toggleMenu()
};

function toggleMenu() {

  //check if any submenus are open and closes
  if (beginner.classList.contains("active")) {
    beginner.classList.toggle("active");
  }
  if (intermediate.classList.contains("active")) {
    intermediate.classList.toggle("active");
  }
  if (advanced.classList.contains("active")) {
    advanced.classList.toggle("active");
  }
  
  //close entire menu
  menu.classList.toggle("active");
};

//add active state to second level of the menu
function toggleBeginner() {
  beginner.classList.toggle("active");
};

function toggleIntermediate() {
  intermediate.classList.toggle("active");
}

function toggleAdvanced() {
  advanced.classList.toggle("active");
}


//******************************************
//OBJECTS AND HOLDERS
//******************************************


//******************************************
//UI STATES
//******************************************



//******************************************
//FUNCTIONS TO CHANGE STATES
//******************************************



//******************************************
//FUNCTIONS TO CHANGE UI
//******************************************

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