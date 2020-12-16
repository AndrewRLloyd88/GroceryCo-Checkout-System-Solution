const chalk = require('chalk');

const formatUnitPrices = (obj) => {
  // console.log(obj)
for(price in obj){
  const currentItem = obj[price]
  const currentItemPrice = currentItem.currentPrice
  const previousItemPrice = currentItem.previousPrice
  console.log(`${price}: ${previousItemPrice ? (chalk.green('now: $' + currentItemPrice.toFixed(2))) : currentItemPrice.toFixed(2)} ${previousItemPrice ? (chalk.red('was: $' + previousItemPrice.toFixed(2))) : ''}`)
}
}

module.exports = {formatUnitPrices}