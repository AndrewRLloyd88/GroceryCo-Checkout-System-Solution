const fs = require('fs');
const { Command } = require('commander');
const program = new Command();
const cartpath = './cart.json'
const unitPricePath = './unitPrices.json'
const stateHelpers = require('./helpers/stateHelpers');
const printReceipt = require('./helpers/printReceipt').printReceipt
const checkOut = require('./helpers/checkout').checkOutCart
const formatUnitPrices = require('./helpers/formatUnitPrices').formatUnitPrices

let cart = [];
let unitPrices = {};

program
.option('--add <item>', 'adds an item to your cart')
.option('--cart', 'view cart')
.option('--pricelist', 'list unit prices')
.option('--price <item>', 'set a price for an item')
.option('--amount <amount>', 'change the unit price for the selected item')
.option('--checkout', 'recieve your itemized receipt')


program.parse(process.argv);

//cli commands for the interface
if (program.add) {
  stateHelpers.addToCart(cartpath, program.add)
  cart = stateHelpers.getCart(cartpath)
  console.log("in cart :", cart)
}

if (program.cart) {
  cart = stateHelpers.getCart(cartpath)
  console.log('Your current cart contains: ' + cart)
};

//gets all current prices
if (program.pricelist) {
  unitPrices = stateHelpers.getUnitPrices(unitPricePath);
  formatUnitPrices(unitPrices)
}

if(program.price && !program.amount){
  console.log('Tip: To set the price for an item for example apples type: --price apple --amount 1.50')
}

//set price for item and promotions
if (program.price && program.amount) {
  console.log(program.price)
  console.log(program.amount)
  const previousAmount = unitPrices[program.price].currentPrice
  stateHelpers.setUnitPrice(unitPrices, program.price, program.amount, previousAmount)
  formatUnitPrices(unitPrices)
}

if (program.checkout) {
  cart = stateHelpers.getCart(cartpath)
  unitPrices = stateHelpers.getUnitPrices(unitPricePath)
  const total = checkOut(cart, unitPrices)
  console.log('total is:', total)
  console.log(printReceipt(total, cart, unitPrices))
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