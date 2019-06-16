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
let inventory = {

}
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
//Need option to go left or right as well. Right is muddywaters which will be closed and left is sparechange lady
let myStart = true
while (myStart == true) {
  if (answer.includes('12345')) {
    myStart = false;
    foyer();
    //break;
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
}
//Muddy Waters
//Need to be able to go left back to 182 Main St, or start.
let inMuddyWaters = true;

async function muddywaters() {
  const welcomeMuddyWaters = `Muddy Waters is closed \n`;
  var answer2 = await ask(welcomeMuddyWaters);
  var answer2 = answer2.toLowerCase();
  {
      console.log(inventory);
    } 
  }
  //Spare change Lady
  //Go left results in going to Mirabelles, going right goes to 182 or start here. You will also be able to give sparechange to the lady.
  let inSpareChange = true;

  async function sparechange() {
    const welcomeSpareChange = `SpareChange message (this is repeating) \n`;
    var answer2 = await ask(welcomeSpareChange);
    var answer2 = answer2.toLowerCase();
    while (inSpareChange = true) {
      if (answer2.includes('take')) {
         console.log('You gave spare change to the kind lady who never takes a vacation')
            inventory.sevenDays = true;
            answer2 = await ask('');
          } else if (answer2.includes('stairs')) {
            let inSpareChange = false;
          } else if (answer2.includes('inventory') || answer2 == 'i') {
            console.log(inventory);
          } 
        }
//Mirabelles
//Go right to go to sparechange lady. Allow person to get food to eliminate state hunger. Coffee, pastry, cake
let inMirabelles = true;

  async function mirabelles() {
    const welcomeMirabelles = `Mirabelles message (this is repeating) \n`;
    var answer2 = await ask(welcomeMirabelles);
    var answer2 = answer2.toLowerCase();
    while (inMirabelles = true) {
      if (answer2.includes('take')) {
         console.log('What would you like to eat?')
            inventory.sevenDays = true;
            answer2 = await ask('');
          } else if (answer2.includes('stairs')) {
            let inMirabelles = false;
          } else if (answer2.includes('inventory') || answer2 == 'i') {
            console.log(inventory);
          } 
        }  
  //Foyer
//Backwards goes back to street, fowards goes upstairs

let inFoyer = true;

async function foyer() {
  const welcomeFoyer = `Foyer message (this is repeating) \n`;
  var answer2 = await ask(welcomeFoyer);
  var answer2 = answer2.toLowerCase();
  while (inFoyer = true) {
    if (answer2.includes('take')) {
      console.log('You have taken a copy of Seven Days')
      inventory.sevenDays = true;
      answer2 = await ask('');
    } else if (answer2.includes('stairs')) {
      let inFoyer = false;
    } else if (answer2.includes('inventory') || answer2 == 'i') {
      console.log(inventory);
    } 
  }

//upstairs 
//left goes into bathroom, right goes into eternity office, forward goes into classroom, backwards goes to foyer
  let inUpstairs = true;

async function upstairs() {
  const welcomeUpstairs = `Upstairs message (this is repeating) \n`;
  var answer2 = await ask(welcomeUpstairs);
  var answer2 = answer2.toLowerCase();
  {
      console.log(inventory);
    } 
  }
  //Eternity
  //Right goes to upstairs
  async function eternity() {
    const welcomeEternity = `Eternity message (this is repeating) \n`;
    var answer2 = await ask(welcomeEternity);
    var answer2 = answer2.toLowerCase();
    while (inEternity = true) {
      if (answer2.includes('take')) {
        console.log('You have stolen sparechange from the Eternity office')
        inventory.spareChange = true;
        answer2 = await ask('');
      } else if (answer2.includes('stairs')) {
        let inEternity = false;
      } else if (answer2.includes('inventory') || answer2 == 'i') {
        console.log(inventory);
      } 
    }

    //bathroom
    //to leave go left to upstairs, need to be able to drop seven days for others to read on the shitter
    async function bathroom() {
      const welcomeBathroom = `Bathroom message (this is repeating) \n`;
      var answer2 = await ask(welcomeBathroom);
      var answer2 = answer2.toLowerCase();
      while (inBathroom = true) {
        if (answer2.includes('take')) {
          console.log('You have left a copy of seven days for others to read on the crapper')
          inventory.sevenDays = true;
          answer2 = await ask('');
        } else if (answer2.includes('stairs')) {
          let inBathroom = false;
        } else if (answer2.includes('inventory') || answer2 == 'i') {
          console.log(inventory);
        } 
      }
//Classroom
//backwards goes back to upstairs. Need to be able to sit down, pair up, and get hungry
async function classroom() {
  const welcomeBathroom = `Bathroom message (this is repeating) \n`;
  var answer2 = await ask(welcomeBathroom);
  var answer2 = answer2.toLowerCase();
  while (inBathroom = true) {
    if (answer2.includes('take')) {
      console.log('You have taken a copy of Seven Days')
      inventory.sevenDays = true;
      answer2 = await ask('');
    } else if (answer2.includes('stairs')) {
      let inBathroom = false;
    } else if (answer2.includes('inventory') || answer2 == 'i') {
      console.log(inventory);
    } 
  }
/*
----------------------------------------------------------------------------------
*/
  //while (answer !== 'go up' || answer == 'go down' || 'go') {
    
  //}
  process.exit();
}
