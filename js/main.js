//******************************************
//NAV MENU ELEMENTS
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

  //check if any submenus are open and closes them
  if (beginner.classList.contains("active")) {
    beginner.classList.toggle("active");
  }
  if (intermediate.classList.contains("active")) {
    intermediate.classList.toggle("active");
  }
  if (advanced.classList.contains("active")) {
    advanced.classList.toggle("active");
  }

  //toggles entire menu
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

//toggle for checkbox on click
//add this as an onclick function to checkboxes
var num = 0;
toggleBox = item => {
  item.classList.toggle("is-checked");

  

  startNew();
  console.log(checkBox);
}

var checkBox = []; //array to push checkboxes into upon click
var allCheckboxes = document.getElementsByClassName("checkbox");
//get all checkboxes on current page

//test popup to suggest to start a new session once all workouts are checked
startNew = () => {
  if(checkBox.length === allCheckboxes.length){
    alert("Start a new workout?");
  }
}