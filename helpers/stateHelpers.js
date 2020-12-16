const fs = require('fs');

//used to get the current items stored in 
const getCart = (cartpath) => {
  if (fs.existsSync(cartpath)) {
    const rawdata = fs.readFileSync(cartpath)
    return JSON.parse(rawdata);
  } else {
    return
  }
}

module.exports = {getCart}