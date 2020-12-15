const fs = require('fs');
const path = './checkout.json'
const { Command } = require('commander');
const program = new Command();

let cart = [];

program
.option('-add, --add <shopping>', 'output extra debugging')
.option('-cart, --cart', 'view cart')
.option('-price, --pizza-type <type>', 'flavour of pizza');


program.parse(process.argv);

if (program.add) {
  if (fs.existsSync(path)) {
    const rawdata = fs.readFileSync('checkout.json')
    cart = JSON.parse(rawdata);
  }
  cart.push(program.add)
  console.log(`${program.add} added`);
  const content = JSON.stringify(cart);
  fs.writeFileSync('checkout.json', content);
  console.log("in cart :", cart)
}


if (program.cart) {
console.log('in cart')
const rawdata = fs.readFileSync('checkout.json')
let currentCart = JSON.parse(rawdata);
console.log(currentCart);
};


if (program.pizzaType) console.log(`- ${program.pizzaType}`);

// scenario 1.
// $ gco price orange 75
// $ gco price orange 50
// $
// $ gco add orange
// $ gco add apple
// $
// $ gco checkout
// > Thank you for shopping at GroceryCo!
// Here are your items

//   APPLE $0.75
//   ORANGE $0.50

//   TOTAL: $1.25

// Come again!