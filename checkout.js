const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//holds the shopping cart
const shoppingCart = [];
//declare a boolean to see if we are done entering items
let scanning = true;

//ask initial question to user
const askQuestion = () => {
  rl.question(
    'Welcome to GroceryCo please scan in your items, if you are done scanning type done. ',
    (item) => {
      console.log(item);
      if (item === 'done') {
        rl.close();
      } else {
        shoppingCart.push(item);
        askNextQuestion();
      }
    }
  );
};

//asks this question the next time around
const askNextQuestion = () => {
  rl.question(
    'Please scan in your next item, if you are done scanning type done. ',
    (item) => {
      console.log(item);
      if (item === 'done') {
        rl.close();
      } else {
        shoppingCart.push(item);
        askQuestion();
      }
    }
  );
};

if (scanning) {
  askQuestion();
} else {
  rl.close();
}

//return the itemized grocery list with totals here
rl.on('close', () => {
  console.log(shoppingCart);
  process.exit(0);
});
