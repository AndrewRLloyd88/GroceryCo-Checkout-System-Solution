const fs = require('fs');

const setRule = (item, quantity, salename, pricepoint, rulesPath) => {
//write in the sales rule to a json file
buildRule(item, quantity, salename, pricepoint, rulesPath)

const successMessage = 'You have successfully added the threepak sale to the sales rules. Shoppers can now buy 3 apples for $0.75'

return successMessage;
}

const buildRule = (item, quantity, salename, pricepoint, rulesPath) => {
  const ruleComponents = [item, quantity, salename, pricepoint]
  const rules = {}
  const ruletoadd = {}

  //does a rules file exist?
 checkIfRuleFileExists(ruleComponents, rulesPath)
  //get current rules

  //build new rule

  //add new rule to current rules

  //return 


  return rules;
}

const writeRule = (rule, rulesPath) => {
  const content = JSON.stringify(rule);
  fs.writeFileSync(rulesPath, content);
}

const checkIfRuleFileExists = (ruleComponents, rulesPath) => {
  if(!fs.existsSync(rulesPath)){
    const rule = buildRuleObject(ruleComponents)
    writeRule(rule, rulesPath)
  }
  return
}


const buildRuleObject = (ruleComponents) => {
  const rule = {}
  const [item, quantity, salename, pricepoint] = ruleComponents
    rule[item] = {quantity, salename, pricepoint}
  return rule
}

module.exports = {setRule, buildRule, buildRuleObject}