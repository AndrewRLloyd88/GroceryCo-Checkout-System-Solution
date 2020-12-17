const checkOutCart = (cart, unitPrices) => {
  let total = 0;
  console.log(cart);
  console.log(unitPrices);

  //happy path checking if item is in the unitPriif(unitPrices
  for (item of cart) {
    const currentItem = unitPrices[item];
    console.log(item.padStart(8));
    if (currentItem) {
      total += currentItem.currentPrice;
    }
  }

  return total.toFixed(2);
};

module.exports = { checkOutCart };
