const fs = require('fs');

const getCart = (cartpath) => {
  if (fs.existsSync(cartpath)) {
    const rawdata = fs.readFileSync('checkout.json')
    return JSON.parse(rawdata);
  } else {
    return
  }
}

module.exports = {getCart}