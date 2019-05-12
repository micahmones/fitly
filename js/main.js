//TODO:
//Write tips for:
//- shoulder exercises
//- arms exercises
//- leg exercises
// change illustration based on selected experience ?
// other features ?
// add checkboxes for exercises completion ?

// main package
var pkg = {
  xp: "",
  parts: [],
  exercises: [],
};

//BODY PART WORKOUT OBJECTS
var chest = [{
    name: "Barbell Bench Press",
    img: "benchpress_1",
    muscleA: "Chest",
    muscleB: "Shoulders",
    sets: "5",
    reps: "5",
    tip: `Lie flat on the bench.
    Grip the bar and retract the scapula.
    Unrack and hold above chest.
    Breathe in and lower the bar, touching the chest.
    Press upwards and squeeze.`
  },
  {
    name: "Cable Flyes",
    img: "cableflyes",
    muscleA: "Upper Chest",
    muscleB: "Lower Chest",
    sets: "3",
    reps: "12",
    tip: `Set both pulleys to above shoulder height.
    Grab both handles and step forward.
    Have a slight bend at the elbow and pull handles together in front of chest.
    Slowly retract back to starting position.`
  },
  {
    name: "Push-ups",
    img: "push-ups",
    muscleA: "Chest",
    muscleB: "Triceps",
    sets: "3",
    reps: "8",
    tip: `Lie prone on floor with hands shoulder width apart.
    Extend arms to push off the floor.
    Pause at top and keep body straight.
    Bend arms slowly until body is in starting position.`
  }
];

var back = [{
    name: "Conventional Deadlift",
    img: "deadlift",
    muscleA: "Back",
    muscleB: "Legs",
    sets: "5",
    reps: "5",
    tip: `Stand with you mid-foot under the barbell.
    Bend over and grab the bar with shoulder width grip.
    Bend your knees until your shins touch the bar.
    Lift your chest up, straighten your lower back and stand up.`
  },
  {
    name: "Lateral Pulldown",
    img: "latpulldown",
    muscleA: "Back",
    muscleB: "Biceps",
    sets: "3",
    reps: "12",
    tip: `Adjust seat, and grab handles shoulder width apart.
    Pull bar down to upper chest.
    Pause and slowly return to starting position.`
  },
  {
    name: "Seated Cable Row",
    img: "seatedrow",
    muscleA: "Back",
    muscleB: "Biceps",
    sets: "3",
    reps: "12",
    tip: `Grip handles and sit up straight.
    Retract your arms and shoulders to pull handle to mid torso.
    Pause and squeeze back muscles.
    Then slowly retract back to starting position. `
  }
];

var shoulders = [{
    name: "Dumbbell Shoulder Press",
    img: "db-ohp",
    muscleA: "Deltoids",
    muscleB: "Triceps",
    sets: "3",
    reps: "8",
    tip: `Bend your elbows and raise your upper arms to shoulder height.
    Make sure dumbbells are at ear level.
    Now Push the dumbbells up until each of the inner ends lightly touch.
    And slowly return to starting position.`
  },
  {
    name: "Lateral Raises",
    img: "latraises",
    muscleA: "Lateral Deltoid",
    muscleB: "Posterior Deltoid",
    sets: "3",
    reps: "12",
    tip: `Grasp dumbbells in front of your thighs with elbows slightly bent.
    Slightly Bend over with your hip and knees slightly bent.
    Now Raise your arms to the side until they're shoulder height.
    And return slowly back to starting position.`
  },
  {
    name: "Front Raises",
    img: "frontraises",
    muscleA: "Anterior Deltoid",
    muscleB: "Lateral Deltoid",
    sets: "3",
    reps: "12",
    tip: `Using overhand grip, hold the dumbbells with your arms fully extended down
    in front of your thighs.
    Now raise your arms straight in front of you until they are parallel to the floor.
    Pause at the top and slowly return to starting position.`
  }
];

var arms = [{
    name: "Dumbbell Curl",
    img: "db-curl",
    muscleA: "Bicep",
    muscleB: "Forearm",
    sets: "3",
    reps: "8",
    tip: `Using underhand grip, hold the dumbbells straight down and keep
    your elbows tucked next to your torso.
    Now retract your forearms until the dumbbells reach shoulder level.
    Pause at the top and slowly return to starting position.`
  },
  {
    name: "Tricep Pushdown",
    img: "tricep-pushdown",
    muscleA: "Triceps",
    muscleB: "Deltoids",
    sets: "3",
    reps: "12",
    tip: `Adjust the pulley so handles are at your chest level.
    Grasp handles and tuck elbows next to your torso.
    Now extend your forearms down until your arms are straight.
    Pause at the bottom and slowly return to starting position.`
  },
  {
    name: "Dumbbell Hammer Curl",
    img: "db-hammer",
    muscleA: "Bicep",
    muscleB: "Forearm",
    sets: "3",
    reps: "8",
    tip: `Hold the dumbells with your arms fully extended down to your sides.
    The palms of your hands should be facing towards your torso.
    Now retract your forearms until the dumbbells reach shoulder level.
    Pause at the top and slowly return to starting position.`
  }
];

var legs = [{
    name: "Squat",
    img: "squat",
    muscleA: "Legs",
    muscleB: "Glutes",
    sets: "5",
    reps: "5",
    tip: `Begin with the barbell supported on top of your traps.
    Keep your chest up, face forward, and place your feet hip shoulder width apart.
    Descend by flexing your knees, this will make your knees move forwards.
    Keep your knees aligned with your feet and keep your torso as upright as possible.
    Continue down until your glutes are parallel to the floor.
    Pause at the bottom and slowly return to starting position.`
  },
  {
    name: "Leg Press",
    img: "leg-press",
    muscleA: "Quadriceps",
    muscleB: "Hamstrings",
    sets: "3",
    reps: "8",
    tip: `Adjust the seat and plant your feet shoulder width apart on the leg press pad.
    Now push through your heel and midfoot and lower the safety bars.
    Curl your legs until they are 90 degrees.
    DO NOT straighten your legs when pushing!
    Finally, pause at the top and slowly return to starting position.`
  },
  {
    name: "Leg Curls",
    img: "leg-curls",
    muscleA: "Hamstrings",
    muscleB: "Glutes",
    sets: "3",
    reps: "8",
    tip: `Adjust machine to fit your size.
    Now using your hamstrings, curl your legs as close to your glutes as possible.
    Pause at the top and slowly return to starting position.`
  }
];

//proxy useless for now unless doing UI changes
/*const handle = {
  set: function (obj, props, value) {
  }
};

const prox = new Proxy(pkg, handle);*/

ExperienceSet = item => {
  const xp = item.firstElementChild.innerHTML;

  pkg.xp = xp;
  pkg.parts = [];
  pkg.exercises = [];
  //emptying other pkg values to remove other workouts
  //when navigating via ham menu

  window.location.assign("parts.html");
  localStorage.setItem("pkg", JSON.stringify(pkg));
}

PartsSet = item => {
  item.classList.toggle("active"); //toggles bg color to light blue on click

  const lastDiv = item.lastElementChild;
  const part = lastDiv.firstElementChild.innerHTML;
  //search for which body part was selected by name

  if (pkg.exercises.indexOf(part) == -1) {
    //checks if body part was already selected
    //push into pkg if not found
    if(part == "Chest"){
      pkg.parts.push(chest);
      pkg.exercises.push(part);
    }
    if (part == "Back") {
      pkg.parts.push(back);
      pkg.exercises.push(part);
    }
    if (part == "Shoulders") {
      pkg.parts.push(shoulders);
      pkg.exercises.push(part);
    }
    if (part == "Arms") {
      pkg.parts.push(arms);
      pkg.exercises.push(part);
    }
    if (part == "Legs") {
      pkg.parts.push(legs);
      pkg.exercises.push(part);
    }
  } else {
    const index = pkg.exercises.indexOf(part); //gets index location of body part in the array
    pkg.parts.splice(index, 1);
    pkg.exercises.splice(index, 1);
    //removes body part from pkg if found
  }

  console.log(part);
  console.log(pkg);

  localStorage.setItem("pkg", JSON.stringify(pkg));
}


WorkoutSetUI = arr => {
  var xp; //variable to set how many exercises to push into the workout page
  
  //sets amount of exercises to put in workout based on xp level
  if(pkg.xp == "Beginner"){
    xp = 1; //1 exercises added per body part
  }
  if(pkg.xp == "Intermediate"){
    xp = 2; //2 exercises added per body part
  }
  if(pkg.xp == "Advanced"){
    xp = 3; //3 exercises added per body part
  }

  arr.forEach(item => { //looping through body part selection
                        //array level 1

    for (let i = 0; i < xp; i++) { //looping through exercises based on xp variable
                                    //array level 2
      const items = `
        <div class="exercise-container wrap drop-shadow">
          <div class="exercise-subcontainer">
            <div>
              <img class="exercise-icon" src="imgs/icons/${item[i].img}.svg" alt="${item[i].img}">
            </div>
            <div class="exercise-info align-left">
              <div>
                <h2>${item[i].name}</h2>
                <div class="muscle-container">
                  <span class="muscle-group">${item[i].muscleA}</span>
                  <span class="muscle-group">${item[i].muscleB}</span>
                </div>
              </div>
              <div class="exercise-center">
                <img class="small-icon" src="imgs/icons/sets.svg" alt="sets">
                <span>${item[i].sets} sets</span>
                <img class="small-icon" src="imgs/icons/reps.svg" alt="sets">
                <span>${item[i].reps} reps</span>
              </div>
            </div>
          </div>
          <div class="exercise-subcontainer">
            <div class="exercise-tips">
              <h2>QUICK TIPS</h2>
              <p>${item[i].tip}</p>
            </div>
          </div>
        </div>`;

      document.getElementsByClassName("exercises")[0].innerHTML += items;
      document.getElementsByTagName("h5")[0].innerHTML = pkg.xp; //set workout xp level name
    }
  });
}

PartsSetUI = item => {
  const items = `
  <div class="wrap flex align-left">
    <h2 class="demi">${item.title}</h2>
    <h6 class="text-left">${item.subtitle}</h6>
  </div>`;

  document.getElementsByClassName("parts")[0].innerHTML = items;
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

  var xpLevel = [{
      title: "Beginner",
      subtitle: "Please select the body parts that you would like to add to train this session."
    },
    {
      title: "Intermediate",
      subtitle: "Please select the body parts that you would like to add to train this session."
    },
    {
      title: "Advanced",
      subtitle: "Please select the body parts that you would like to add to train this session."
    },
  ];

  //setting header title of parts page based on
  //experience selection
  if (document.title == "Muscle Groups - Fitly") {
    if (pkg.xp == "Beginner") {
      PartsSetUI(xpLevel[0])
    }
    if (pkg.xp == "Intermediate") {
      PartsSetUI(xpLevel[1])
    }
    if (pkg.xp == "Advanced") {
      PartsSetUI(xpLevel[2])
    }
  }

  if (document.title == "Workout - Fitly") {
    WorkoutSetUI(pkg.parts)
    console.log(pkg.parts)
  }
}

//******************************************
//NAV MENU ELEMENTS
//******************************************
var menu = document.querySelector(".menu");
var toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
  toggle.classList.toggle("menu-open");
  toggleMenu()
};

function toggleMenu() {
  menu.classList.toggle("active");
};

workoutPage = () => {
  window.location.assign("workout.html")
}

clearStorage = () => {
  localStorage.clear();
}