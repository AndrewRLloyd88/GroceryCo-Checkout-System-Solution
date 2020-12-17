const fs = require('fs');
let _ = require('lodash');
const getSalesRules = require('./getSalesRules');

const setRule = (item, quantity, salename, pricepoint, rulesPath) => {
  //write in the sales rule to a json file
  buildRule(item, quantity, salename, pricepoint, rulesPath);

  const successMessage =
    'You have successfully added the threepak sale to the sales rules. Shoppers can now buy 3 apples for $0.75';

  return successMessage;
};

const buildRule = (item, quantity, salename, pricepoint, rulesPath) => {
  const ruleComponents = [item, quantity, salename, pricepoint];
  let rules = {};
  let ruletoadd = {};

  //does a rules file exist?
  rules = checkIfRuleFileExists(ruleComponents, rulesPath);
  console.log(rules);
  //if the rules file exists
  if (rules === undefined) {
    //get current rules
    rules = getSalesRules.getCurrentRules(rulesPath);
    console.log(rules);
    //build new rule
    ruletoadd = buildRuleObject(ruleComponents);
    console.log('ruletoadd: ', ruletoadd);
    //check if the item to add already exists
    if (_.isEqual(rules[item], ruletoadd[item])) {
      return rules;
    }
    //add new rule to current rules
    rules[item] += ruletoadd[item];
    //write rule into json file
    writeRule(rules, rulesPath);
    return rules;
  }

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
  return;
};

const buildRuleObject = (ruleComponents) => {
  const rule = {};
  const [item, quantity, salename, pricepoint] = ruleComponents;
  rule[item] = { quantity, salename, pricepoint };
  return rule;
};

module.exports = { setRule, buildRule, buildRuleObject };
