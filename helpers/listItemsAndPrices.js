const buildReceiptList = (cart, unitPrices) => {
  const list = {};
  //get each item in the array
  for (item in cart) {
    const [currentPrice, previousPrice] = getOriginalAndSalePrice(
      item,
      cart,
      unitPrices
    );
    if (list[cart[item]]) {
      list[cart[item]] = [(quantity += 1), currentPrice, previousPrice];
    } else {
      list[cart[item]] = [(quantity = 1), currentPrice, previousPrice];
    }
  }
  //check if there are any pricing rules for that item
  return list;
};

//get both currentPrice and previousPrice from our unitPrices
const getOriginalAndSalePrice = (item, cart, unitPrices) => {
  const currentItem = cart[item];
  const currentPrice = unitPrices[currentItem].currentPrice;
  const previousPrice = unitPrices[currentItem].previousPrice;

  //use null here to render was $ now $ conditionally on receipt
  if (previousPrice < currentPrice) {
    return [currentPrice, null];
  }
  return [currentPrice, previousPrice];
};

module.exports = { buildReceiptList, getOriginalAndSalePrice };
