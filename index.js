const readLine = require('readline-sync');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}; //Allows the code to pause, with promisies, of course.

function chicken(){
  console.log(`You selected CHICKEN SANDWITCH `);
  console.log(`The Price Is $5.25`);
}

function beef(){
  console.log(`You selected BEEF SANDWITCH`);
  console.log(`The Price Is $6.25`);
}

function tofu(){
  console.log(`You selected TOFU SANDWITCH`);
  console.log(`The Price Is $5.75`);
}

function choose(){
  let choice = Number(readLine.question('What Will It Be, CHICKEN, TOFU, or BEEF? (1/2/3): '))
  if (choice == 1){
    console.clear();
    sleep(500).then(() => {
    chicken();
                let confirm = readLine.question(`Confirm Order? (y/n): `) //Ask to confirm order
    if (confirm == 'y'){
  console.log(`Thanks for ordering, please wait for your meal. Have a good day!`); //If yes, pick up order
} else if (confirm == 'n'){
  console.clear();
  choose(); //If no, run again.
} else {
      console.log(`Incorrect input, please try again.`);
      console.clear
      choose(); //Anything else, run again.
}
  })  
  } else if (choice == 2) {
    console.clear();
    sleep(500).then(() => {
    tofu();
                let confirm = readLine.question(`Confirm Order? (y/n): `) //Ask to confirm order
    if (confirm == 'y'){
  console.log(`Thanks for ordering, please wait for your meal. Have a good day!`); //If yes, pick up order
} else if (confirm == 'n'){
  console.clear();
  choose(); //If no, run again.
} else {
      console.log(`Incorrect input, please try again.`);
      console.clear
      choose(); //Anything else, run again.
}
  })
    
  }
  else if (choice == 3){
    console.clear();
    sleep(500).then(() => {
    beef();
          let confirm = readLine.question(`Confirm Order? (y/n): `) //Ask to confirm order
    if (confirm == 'y'){
  console.log(`Thanks for ordering, please wait for your meal. Have a good day!`); //If yes, pick up order
} else if (confirm == 'n'){
  console.clear();
  choose(); //If no, run again.
} else {
      console.log(`Incorrect input, please try again.`);
      console.clear
      choose(); //Anything else, run again.
}
    });
    }
}

choose();

