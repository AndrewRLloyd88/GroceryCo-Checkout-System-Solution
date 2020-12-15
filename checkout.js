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
        //increase total
        //add a line item to receipt saying here's sales
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





///////////////////////////////////////////////////////////////////////////////////////
//have a function called getInput([apple, pear])

//secondary loop unordered list add items 1 at a time
//addItem() calls another function or functions to deal with sales
//shoppingCart should be a mutable list
//receipt array could be a shallow copy of an array or object
//input object or itemobject pass string into constructor


// const getInput = async () => {
//   const foo = await rl.question('What do you think of Node.js? ');
//     rl.close();
//     return foo;
//   });
  
// }

//const isValidInput = () => {
  //store input
// permutations make sure input is valid
// }

//process list

// iterate through list
//processItem()
// scanItem - processApple() - getAppleSales()<void> randomly generated

//printReceipt()