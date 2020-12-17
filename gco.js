const fs = require('fs');
const { Command } = require('commander');
const program = new Command();
const chalk = require('chalk');
const cartpath = './cart.json';
const unitPricePath = './unitPrices.json';
const saleRulePath = './saleRules.json';
const stateHelpers = require('./helpers/stateHelpers');
const getSalesRules = require('./helpers/getSalesRules');
const setSalesRules = require('./helpers/setSalesRules');
const printReceipt = require('./helpers/printReceipt').printReceipt;
const checkOut = require('./helpers/checkout').checkOutCart;
const formatUnitPrices = require('./helpers/formatUnitPrices').formatUnitPrices;

let cart = [];
let unitPrices = {};
let saleRules = {};

program
  .option('--add <item>', 'adds an item to your cart')
  .option('--cart', 'view cart')
  .option('--pricelist', 'list unit prices')
  .option('--price <item>', 'set a price for an item')
  .option('--amount <amount>', 'change the unit price for the selected item')
  .option('--checkout', 'recieve your itemized receipt')
  .option(
    '--quantity <quantity>',
    'used in conjunction with --price and --salename and --pricepoint to set a sale rule. Type --salerule for more help'
  )
  .option(
    '--salename <salename>',
    'used in conjunction with --price and --quantity and --pricepoint to set a sale rule type --salerule for more help'
  )
  .option(
    '--pricepoint <amount>',
    'used in conjunction with --price, --quantity and --salename to set a sale rule type --salerule for more help'
  )
  .option(
    '--salerule',
    `to create a new sale rule input the following commands- example: --price apple --quantity 3 --salename Threepak --pricepoint .75. This would create a 3 for .75 sale rule for apples.`
  );

program.parse(process.argv);

//cli commands for the interface
if (program.add) {
  stateHelpers.addToCart(cartpath, program.add);
  cart = stateHelpers.getCart(cartpath);
  console.log('in cart :', cart);
}

if (program.cart) {
  cart = stateHelpers.getCart(cartpath);
  console.log('Your current cart contains: ' + cart);
}

//gets all current prices
if (program.pricelist) {
  unitPrices = stateHelpers.getUnitPrices(unitPricePath);
  formatUnitPrices(unitPrices);
}

if (program.price && !program.amount && !program.pricepoint) {
  console.log(
    'Tip: To set the price for an item for example apples type: --price apple --amount 1.50'
  );
}

//set price for item and promotions
if (program.price && program.amount) {
  unitPrices = stateHelpers.getUnitPrices(unitPricePath);
  const previousAmount = unitPrices[program.price].currentPrice;
  stateHelpers.setUnitPrice(
    unitPrices,
    program.price,
    program.amount,
    unitPricePath,
    previousAmount
  );
  formatUnitPrices(unitPrices);
}

if (program.salerule) {
  console.log(`to create a new sale rule input the following commands- example: ${chalk.yellow(
    '--price'
  )} apple  ${chalk.yellow('--quantity')} 3  ${chalk.yellow(
    '--salename'
  )} Threepak ${chalk.yellow('--pricepoint')} .75. 
This would create a 3 for .75 sale rule for apples`);
}

if (
  program.price &&
  program.quantity &&
  program.salename &&
  program.pricepoint
) {
  console.log(
    program.price,
    program.quantity,
    program.salename,
    program.pricepoint
  );
  setSalesRules.setRule(
    program.price,
    program.quantity,
    program.salename,
    program.pricepoint,
    saleRulePath
  );
}

if (program.checkout) {
  //get the current cart
  cart = stateHelpers.getCart(cartpath);
  //get the unitprices
  unitPrices = stateHelpers.getUnitPrices(unitPricePath);
  //calculate the total using the cart and unitPrices
  const total = checkOut(cart, unitPrices);
  console.log('total is:', total);
  //build and print the final receipt
  console.log(printReceipt(total, cart, unitPrices));
}

// $ gco price apple 75 # this will be ignored since lowest price is 50

// $ gco price apple 50 # this will be preferred price for a single apple

// $ gco price apple --quantity 2 --name "Buy 1 get 1 free" 50 # This will be used if there are 2 apples
// (2 % 2 === 0)
// (This rule would apply after the Threepak offer)
// $ gco price apple --quantity 3 --name "Threepak" 75 # This will be used if there are 3 apples...
// (This rule would apply first in this scenario)
// (5 % 3 === 2)

// $ # apply the discount for the AVERAGE price of the items.

// $
// $ gco add apple
// $ gco add apple
// $ gco add apple
// $ gco add apple
// $ gco add apple
// $
// $ gco checkout
// ==========================================
// > Thank you for shopping at GroceryCo!
// Here are your items

//   APPLE x3 THREEPAK PROMOTION 3 @ $0.75
//   APPLE x2 BUY ONE GET ONE FREE @ $1.50

//   TOTAL: $2.25

// We look forward to your next visit!

// ==========================================
