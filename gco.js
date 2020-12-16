const fs = require('fs');
const cartpath = './checkout.json'
const unitpricepath = './unitPrices.json'
const { Command } = require('commander');
const program = new Command();
const formatUnitPrices = require('./helpers/formatUnitPrices').formatUnitPrices

let cart = [];
let unitprices = {};

program
.option('--add <shopping>', 'output extra debugging')
.option('--cart', 'view cart')
.option('--price', 'listed unit prices')
.option('--checkout', 'recieve your itemized receipt')


program.parse(process.argv);

if (program.add) {
  if (fs.existsSync(cartpath)) {
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
console.log('Your current cart contains: ')
const rawdata = fs.readFileSync('checkout.json')
let currentCart = JSON.parse(rawdata);
console.log(currentCart);
};


if (program.price) {
  if (fs.existsSync(unitpricepath)) {
    const rawPriceData = fs.readFileSync('unitPrices.json')
    unitprices = JSON.parse(rawPriceData);
  }
  formatUnitPrices(unitprices)
}

if (program.checkout) {
  //getCart()
  //getUnitPrices()
  //checkOut()
  //printReceipt()
}

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