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

// remember the StateMachine lecture
// https://bootcamp.burlingtoncodeacademy.com/lessons/cs/state-machines
let states = {
  roomOne: { canChangeTo: ["roomTwo"] },
  roomTwo: { canChangeTo: ["roomThree"] },
  roomThree: { canChangeTo: ["roomOne"] }
};

let currentState = "green";

function enterState(newState) {
  let validTransitions = states[currentState].canChangeTo;
  if (validTransitions.includes(newState)) {
    currentState = newState;
  } else {
    throw "Invalid state transition attempted - from " +
      currentState +
      " to " +
      newState;
  }
}
//Include Johnson State Rugby Easter Egg
start();
async function start() {
  const welcomeMessage = `182 Main St.
You are standing on Main Street between Church and South Winooski.
There is a door here. A keypad sits on the handle.
On the door is a handwritten sign. \n`;
  var answer = await ask(welcomeMessage);
  var answer = answer.toLowerCase();
/*
---------------------------------------------------------------------------------
*/
while (answer !== '12345') {
  if (answer.includes('12345')) {
    console.log("Welcome to the foyer at burlington code academy.");
  } else if (answer.includes('read sign')) {
    console.log("The sign says 'Welcome to Burlington Code Academy! Come on up to the third floor. If the door is locked, use the code 12345.'");
    var answer = await ask('');
  } else if (answer.includes('take')) {
    console.log("The sign is bolted to the wall, you bonehead! There is nothing to take at this location.");
    var answer = await ask('');
  } else {
    console.log("Im sorry, I cannot " + answer);
    var answer = await ask('');
  }
}
/*
----------------------------------------------------------------------------------
*/
  //while (answer !== 'go up' || answer == 'go down' || 'go') {
    
  //}
  process.exit();
}
