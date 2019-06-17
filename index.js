/*
BOILERPLATE STUFF DO NOT TOUCH ++++++++++++++++++++++++++++++++++++++++++++++++++
*/
const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
/*
END BOILERPLATE STUFF +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

//DO NOT CHANGE MYFUNK
myFunk();
async function myFunk() {
//OBJECTS GO HERE!!!!!!!!!!!!!
let inv = {
//IGNORE FOR NOW
}
let userStatus = {
//IGNORE FOR NOW
}
/*
FIRST ROOM ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
begin();
//TO DO: THIS WILL BE OUR START STATE, WITH KEYPAD, SIGN, ETC.
async function begin() {
  let firstLoop = true;
  let answer = await ask('You are standing on Main Street between Church and South Winooski. There is a door here. A keypad sits on the handle. On the door is a handwritten sign. \n');
  while (firstLoop === true) {
    if (answer.includes('12345')) {
      stateTwo();
      firstLoop = false;
    } else if (answer.includes('read')) {
      answer = await ask("The sign reads: 'Welcome to Burlington Code Academy'. Come on up. If the door is locked enter 12345. \n")
    }
    else {
      answer = await ask('');
    }
  }
}
/* 
END FIRST ROOM/BEGIN SECOND ROOM ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
async function stateTwo() {
  //TO DO: THIS WILL BE OUR SECOND STATE, IN THE FOYER WITH SEVEN DAYS
  let secondLoop = true;
  let answer2 = await ask('Welcome to the foyer at Burlington Code Academy. In front of you is a set of stairs going up. In the corner is a copy of Seven Days. \n')
  while (secondLoop === true) {
    if (answer2.includes('back') || answer2.includes('leave')) {
      begin();
      secondLoop = false;
    } else if (answer2.includes('take')) {
      answer2 = await ask('You have taken a copy of Seven Days \n')
      inv.newsPaper = 'Seven Days';
    } else if (answer2.includes('stairs' || answer2.includes('upstairs'))) {
      stateThree();
      secondLoop = false;
    } else {
      answer2 = await ask("I'm sorry, I cannot " + answer2)
    }
  }
}
/*
SECOND ROOM ENDS/BEGIN THIRD ROOM ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
async function stateThree() {
  //TO DO: THIS WILL BE THE THIRD FLOOR HALLWAY
  let thirdLoop = true;
  let answer3 = await ask('Third Room \n')
  while (thirdLoop === true) {
    if (answer3 == 'backward') {
      stateTwo();
      thirdLoop = false;
    } else if (answer3 == 'forward') {
      stateFour();
      thirdLoop = false;
    }
  }
}
/*
THIRD ROOM ENDS/FOURTH ROOM BEGINS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
async function stateFour() {
  //THIS WILL BE THE BATHROOM
  let fourthLoop = true;
  let answer4 = await ask('Fourth Room \n')
  while (fourthLoop === true) {
    if (answer4 == 'backward') {
      stateThree();
      fourthLoop = false;
    }
  }
}
/*
FOURTH ROOM ENDS/FIFTH ROOM BEGINS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
async function stateFive() {
  //THIS WILL BE THE CLASSROOM
  let fifthLoop = true;
  let answer5 = await ask('Fourth Five \n')
  while (fifthLoop === true) {
    if (answer5 == 'backward') {
      stateFour();
      fourthLoop = false;
    }
  }
}
/*
FIFTH ROOM ENDS/SIXTH ROOM BEGINS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
async function stateSix() {
  //THIS WILL BE ETERNITY WEB
  let sixthLoop = true;
  let answer6 = await ask('Fourth Room \n')
  while (sixthLoop === true) {
    if (answer6 == 'backward') {
      stateFive();
      sixthLoop = false;
    }
  }
}
/*
THE FOLLOWING WILL BE USED FOR FUTURE FUNCTIONALITY +++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//A new state!
async function stateSix() {
  //THIS WILL BE ETERNITY WEB
  let sixthLoop = true;
  let answer6 = await ask('Fourth Room \n')
  while (sixthLoop === true) {
    if (answer6 == 'backward') {
      stateFive();
      sixthLoop = false;
    }
  }
}
//Another new state
async function stateSix() {
  //THIS WILL BE ETERNITY WEB
  let sixthLoop = true;
  let answer6 = await ask('Fourth Room \n')
  while (sixthLoop === true) {
    if (answer6 == 'backward') {
      stateFive();
      sixthLoop = false;
    }
  }
}
*/
process.exit;
//THIS CURLY BRACE ENDS THE MYFUNK FUNCTION. DO NOT MOVE OR DELETE
}

/* 
FUNCTION MASTER LIST
begin = Outside of BTVCA door. Church and main.
stateTwo = The foyer inside BTVCA
*/