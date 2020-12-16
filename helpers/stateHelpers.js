const fs = require('fs');
let cart = [];

//used to get the current items stored in
const addToCart = (cartpath, item) => {
  if (fs.existsSync(cartpath)) {
    const rawdata = fs.readFileSync(cartpath);
    cart = JSON.parse(rawdata)
    cart.push(item)
    setCart(cart);
    return JSON.parse(rawdata);

  } 
  
  //if the cart.json file does not exist but a path is given
  if (cartpath && !fs.existsSync(cartpath)) {
    cart.push(item)
    setCart(cart);
    const rawdata = fs.readFileSync(cartpath);
    return JSON.parse(rawdata);

  } 
  
  if(!cartpath) {
    return;
  }
};

const getUnitPrices = (unitPricePath) => {
  if (fs.existsSync(unitPricePath)) {
    const rawPriceData = fs.readFileSync(unitPricePath);
    return JSON.parse(rawPriceData);
  }
};

const setCart = (item) => {
    console.log(item)
    const content = JSON.stringify(item);
    fs.writeFileSync('cart.json', content);
}

const getCart = (cartpath) => {
  if (fs.existsSync(cartpath)) {
    const rawCartData = fs.readFileSync(cartpath);
    return JSON.parse(rawCartData);
  }
}

module.exports = { addToCart, getUnitPrices, getCart };
