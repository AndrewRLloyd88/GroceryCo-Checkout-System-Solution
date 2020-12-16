const formatUnitPrices = (obj) => {
for(price in obj){
  console.log(`${price}: $${obj[price].toFixed(2)}`)
}
}

module.exports = {formatUnitPrices}