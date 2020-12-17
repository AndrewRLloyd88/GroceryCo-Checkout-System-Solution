const fs = require('fs');

const getCurrentRules = (rulesPath) => {
  if (fs.existsSync(rulesPath)) {
    const rawdata = fs.readFileSync(rulesPath);
    cart = JSON.parse(rawdata);
    return JSON.parse(rawdata);
}
}

module.exports = {getCurrentRules}