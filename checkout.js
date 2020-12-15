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
      //user is done scanning
      if (item === 'done') {
        scanning = false;
        returnShoppingList();
      }

      //add help menu
      if (item === 'help') {
        console.log('help');
        askQuestion();
      }

      //push an item to the cart
      //and prompt user for next action
      if (scanning) {
        shoppingCart.push(item);
        askQuestion();
      }
    }
  );
};

const returnShoppingList = () => {
  console.log(shoppingCart);
  rl.close();
};

if (scanning) {
  askQuestion();
}

module.exports = {
  returnShoppingList,
  shoppingCart,
};
