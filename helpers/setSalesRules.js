const fs = require('fs');
let _ = require('lodash');
const getSalesRules = require('./getSalesRules');

const setRule = (item, quantity, salename, pricepoint, rulesPath) => {
  let salesRules = {};
  //write in the sales rule to a json file
  buildRule(item, quantity, salename, pricepoint, rulesPath);

  salesRules = getSalesRules.getCurrentRules(rulesPath);

  const successMessage = `You have successfully added the ${salename} sale to the sales rules. Shoppers can now buy ${quantity} ${item}s for $${pricepoint}`;
  return successMessage;
};

const buildRule = (item, quantity, salename, pricepoint, rulesPath) => {
  const ruleComponents = [item, quantity, salename, pricepoint];
  let rules = {};
  let ruletoadd = {};

  // does a rules file exist?
  rules = checkIfRuleFileExists(ruleComponents, rulesPath);
  console.log(rules);
};

const writeRule = (rule, rulesPath) => {
  const content = JSON.stringify(rule);
  fs.writeFileSync(rulesPath, content);
};

const checkIfRuleFileExists = (ruleComponents, rulesPath) => {
  if (!fs.existsSync(rulesPath)) {
    const rule = buildRuleObject(ruleComponents);
    writeRule(rule, rulesPath);
  }
  const rule = buildRuleObject(ruleComponents);
  return;
};

const buildRuleObject = (ruleComponents) => {
  const rule = {};
  const [item, quantity, salename, pricepoint] = ruleComponents;
  rule[item] = [{ quantity, salename, pricepoint }];
  return rule;
};

module.exports = { setRule, buildRule, buildRuleObject };
