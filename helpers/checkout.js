const checkOutCart = (cart, unitPrices) => {
let total = 0;
console.log(cart)
console.log(unitPrices)

//happy path checking if item is in the unitPriif(unitPrices
for(item of cart){
  console.log(item.padStart(8))
  if(unitPrices[item]){
    total += unitPrices[item]
  }
}


return total.toFixed(2);
}

module.exports = {checkOutCart}