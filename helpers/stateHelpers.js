const fs = require('fs');
let cart = [];
let priceList = {}

//Setters and getters for cart
const addToCart = (cartpath, item) => {
  if (fs.existsSync(cartpath)) {
    const rawdata = fs.readFileSync(cartpath);
    cart = JSON.parse(rawdata);
    cart.push(item);
    setCart(cart);
    return JSON.parse(rawdata);
  }

  //if the cart.json file does not exist but a path is given
  if (cartpath && !fs.existsSync(cartpath)) {
    cart.push(item);
    setCart(cart);
    const rawdata = fs.readFileSync(cartpath);
    return JSON.parse(rawdata);
  }

  if (!cartpath) {
    return;
  }
};

const setCart = (item) => {
  const content = JSON.stringify(item);
  fs.writeFileSync('cart.json', content);
};

const getCart = (cartpath) => {
  if (fs.existsSync(cartpath)) {
    const rawCartData = fs.readFileSync(cartpath);
    return JSON.parse(rawCartData);
  }
};

//setters and getters for unitPrices
const getUnitPrices = (unitPricePath) => {
  if (fs.existsSync(unitPricePath)) {
    const rawPriceData = fs.readFileSync(unitPricePath);
    return JSON.parse(rawPriceData);
  }
};

const setUnitPrice = (unitPrices, item, amount, pricePath, previousAmount) => {

priceList = unitPrices;

priceList[item] = {currentPrice: parseFloat(amount), previousPrice: parseFloat(previousAmount)}


const content = JSON.stringify(priceList);
  fs.writeFileSync(pricePath, content);

  if (fs.existsSync(pricePath)) {
    const rawPriceData = fs.readFileSync(pricePath);
    return JSON.parse(rawPriceData);
  }

}

module.exports = { addToCart, getUnitPrices, getCart, setUnitPrice };
