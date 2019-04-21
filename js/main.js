// main package
var pkg = {
  firstChoice: "",
  secondChoice: "",
};

var optBeginner = [
  {
    title: "Full Body Challenge",
    subtitle: "Train all major muscle groups through primary compound exercises.",
    img: "fullbody"
  },
  {
    title: "Upper Body Challenge",
    subtitle: "Target the upper body muscle groups through compound exercises.",
    img: "upperbody"
  },
  {
    title: "Lower Body Challenge",
    subtitle: "Target the lower body muscle groups through compound exercises.",
    img: "lowerbody"
  }
];

const handle = {
  set: function (obj, props, value) {
    if(props == "firstChoice"){
      if(pkg.firstChoice == "Beginner"){
      }
    }
  }
};

const prox = new Proxy(pkg, handle);


ExperienceSet = item => {
  const firstChoice = item.firstElementChild.innerHTML;

  pkg.firstChoice = firstChoice;
  prox.firstChoice = pkg.firstChoice;

  console.log(pkg.firstChoice)
  console.log("Hello")

  window.location = "workouts.html"
  localStorage.setItem("pkg", JSON.stringify(pkg));
}

ExperienceSetUI = arr => {
  for (let i = 0; i < arr.length; i++) {
    const items = `
    <div class="option-container wrap">
      <div class="center">
        <img class="option-icon" src="/imgs/icons/.svg" />
      </div>
      <div class="option-main" onclick="ExperienceSet(this)">
        <h3>${arr[i].title}</h3>
        <p>${arr[i].subtitle}</p>
      </div>
    </div>`;

    document.getElementsByClassName("body-content")[0].innerHTML += items
  }
}

var spkg = localStorage.getItem("pkg");
if (spkg) {
  console.log(spkg);
  pkg = JSON.parse(spkg); //associates default package with one that is stored
  console.log(pkg)
  if(pkg.firstChoice == "Beginner"){
    ExperienceSetUI(optBeginner)
  }
}

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

//this works if you click the buttons in order


toggleBox = (item) => {
  item.classList.toggle("is-checked");
  var allChecks = document.querySelectorAll(".checkbox");

  for (var i = 0; i < allChecks.length; i++) {
    if (allChecks[i].classList.contains("is-checked")) {
      if (checkBox.indexOf(i) == -1) {
        checkBox.push(i);
        if (checkBox.length == allCheckboxes.length) {
          startNew()
        }
      }
    } else if (checkBox.includes(i) == true) {
      checkBox.pop(i);
    }
  }

  console.log(checkBox);
}

var checkBox = []; //array to push checkboxes into upon click
var allCheckboxes = document.getElementsByClassName("checkbox");
//get all checkboxes on current page

//test popup to suggest to start a new session once all workouts are checked
startNew = () => {
  alert("Start a new workout?");
}

/*
var checkBox = document.querySelectorAll("input[type=checkbox]");

toggleBox = () => {

  if (checkBox.every(check)) {
    alert("Hi")
  }
}

function check(){
  checkBox.checked == true;
}
*/