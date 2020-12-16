const buildReceiptList = (total, cart, unitPrices) => {
  const list = {}
  console.log(unitPrices)
  //get each item in the array
  for(item in cart){
    if (list[cart[item]]) {
    list[cart[item]] = [quantity += 1, unitPrices[cart[item]]]
  } else {
    list[cart[item]] = [quantity = 1, unitPrices[cart[item]]]
  }
}
  //check if there are any pricing rules for that item
  return list;
}

module.exports = {buildReceiptList}