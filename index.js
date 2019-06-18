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
  };
  let userStatus = {
    //IGNORE FOR NOW
  };
  function showInv() {
    for (const key in inv) {
      if (inv.hasOwnProperty(key)) {
        const element = inv[key];
        console.log(element);
      } else {
        console.log("you have nothing in your inventory!");
      }
    }
  }

  /*
FIRST ROOM ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
  begin();
  //TO DO: THIS WILL BE OUR START STATE, WITH KEYPAD, SIGN, ETC.
  async function begin() {
    let firstLoop = true;
    let answer = await ask(
      "You are standing on Main Street between Church and South Winooski. There is a door here. A keypad sits on the handle. On the door is a handwritten sign. \n"
    );
    while (firstLoop === true) {
      if (answer.includes("12345")) {
        stateTwo();
        firstLoop = false;
      } else if (answer.includes("read")) {
        answer = await ask(
          "The sign reads: 'Welcome to Burlington Code Academy'. Come on up. If the door is locked enter 12345. \n"
        );
      } else if (answer.includes("take") && answer.includes("sign")) {
        answer = await ask(
          "You cannot take the sign, it is bolted to the wall \n"
        );
      } else if (answer.includes("inv") || answer === "i") {
        showInv();
        answer = await ask("\n");
      } else {
        answer = await ask("Im sorry, I cannot " + answer + "\n");
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
    let answer2 = await ask(
      "Welcome to the foyer at Burlington Code Academy. In front of you is a set of stairs going up. In the corner is a copy of Seven Days. \n"
    );
    while (secondLoop === true) {
      if (answer2.includes("back") || answer2.includes("leave")) {
        begin();
        secondLoop = false;
      } else if (answer2.includes("take")) {
        answer2 = await ask("You have taken a copy of Seven Days \n");
        inv.newsPaper = "Seven Days";
      } else if (answer2.includes("stairs" || answer2.includes("upstairs"))) {
        stateThree();
        secondLoop = false;
      } else if (answer2.includes("inv") || answer2 === "i") {
        showInv();
        answer2 = await ask("\n");
      } else if (answer2.includes("read")) {
        console.log(
          "Seven Days features an article about how Johnson State's Rugby team was decimated by a group of 5th graders. \n"
        );
        answer2 = await ask("");
      } else {
        answer2 = await ask("I'm sorry, I cannot" + answer2 + "\n");
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
    let answer3 = await ask(
      "You are in the third floor hallway. To your right is a bathroom, down the hall is Eternity Web and the Burlington Coding Academy \n"
    );
    while (thirdLoop === true) {
      if (answer3.includes("eternity")) {
        stateSix();
        thirdLoop = false;
      } else if (
        answer3.includes("classroom") ||
        answer3.includes("academy") ||
        answer3.includes("coding")
      ) {
        stateFive();
        thirdLoop = false;
      } else if (answer3.includes("bathroom")) {
        stateFour();
        thirdLoop = false;
      } else if (answer3.includes("inv") || answer === "i") {
        showInv();
        answer3 = await ask("\n");
      } else {
        answer3 = await ask("Im sorry, I cannot " + answer3 + "\n");
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
    let answer4 = await ask(
      "Welcome to the bathroom. There's nothing interesting here. Perhaps you should go back to the hall. \n"
    );
    while (fourthLoop === true) {
      if (answer4.includes("hall")) {
        stateThree();
        fourthLoop = false;
      } else if (answer4.includes("inv") || answer === "i") {
        showInv();
        answer4 = await ask("\n");
      } else {
        answer4 = await ask("Im sorry, I cannot " + answer4 + "\n");
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
    let answer5 = await ask(
      "Welcome to the Burlington Coding Academy. In the back corner of the room you see Bobs elegant hat. You also see a copy of Sam's Vermont Tech cheat sheet."
    );
    while (fifthLoop === true) {
      if (answer5.includes("hall")) {
        stateThree();
        fifthLoop = false;
      } else if (answer5.includes("inv") || answer === "i") {
        showInv();
        answer5 = await ask("\n");
      } else {
        answer5 = await ask("Im sorry, I cannot " + answer5 + "\n");
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
    let answer6 = await ask(
      "Welcome to Eternity web. On the main desk you see a pile of change. \n"
    );
    while (sixthLoop === true) {
      if (answer6.includes("hall")) {
        stateThree();
        sixthLoop = false;
      } else if (answer.includes("inv") || answer === "i") {
        showInv();
        answer6 = await ask("\n");
      } else if (answer.includes("take") || answer.includes("change")) {
        inv.change = "Change";
        answer6 = await ask("You have taken the pile of change.");
      } else {
        answer6 = await ask("Im sorry, I cannot " + answer6 + "\n");
      }
    }
  }
  //Sparechange Lady
  async function stateSeven() {
    let seventhLoop = true;
    let answer7 = await ask("Fourth Room \n");
    while (seventhLoop === true) {
      if (answer7 == "right") {
        begin();
        seventhLoop = false;
      } else if (answer7 == "left") {
        stateEight();
        seventhLoop = false;
      } else if (answer7.includes("inv") || answer === "i") {
        showInv();
        answer7 = await ask("\n");
      } else {
        answer7 = await ask("Im sorry, I cannot " + answer7 + "\n");
      }
    }
  }
  //Mirabelles
  async function stateEight() {
    let eigthLoop = true;
    let answer8 = await ask("Fourth Room \n");
    while (eigththLoop === true) {
      if (answer8 == "right") {
        stateseven();
        eigthLoop = false;
      } else if (answer8.includes("inv") || answer === "i") {
        showInv();
        answer8 = await ask("\n");
      } else {
        answer8 = await ask("Im sorry, I cannot " + answer8 + "\n");
      }
    }
  }
  process.exit;
  //THIS CURLY BRACE ENDS THE MYFUNK FUNCTION. DO NOT MOVE OR DELETE
}
