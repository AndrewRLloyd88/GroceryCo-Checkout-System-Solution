const fs = require('fs');

const getCurrentRules = (rulesPath) => {
  if (fs.existsSync(rulesPath)) {
    const rawdata = fs.readFileSync(rulesPath);
    return JSON.parse(rawdata);
  }
};

module.exports = { getCurrentRules };
