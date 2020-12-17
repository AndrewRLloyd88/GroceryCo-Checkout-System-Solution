const setSalesRules = require('../helpers/setSalesRules');
const rules = {};
const ruleComponents = ['apple', 3, 'threepak', 0.75];
const rulesPath = 'testrule.json';
const testAddRule = 'testaddRule.json';

describe('setSalesRules', () => {
  describe('setRule', () => {
    test('Should return a string to the user', () => {
      const returnValue = setSalesRules.setRule(
        'apple',
        3,
        'threepak',
        0.75,
        rulesPath
      );
      expect(typeof returnValue).toBe('string');
    });
    test('Should return a string to the user confirming the sales rule has been added', () => {
      const returnValue = setSalesRules.setRule(
        'apple',
        3,
        'threepak',
        0.75,
        rulesPath
      );
      expect(returnValue).toEqual(
        'You have successfully added the threepak sale to the sales rules. Shoppers can now buy 3 apples for $0.75'
      );
    });
  });
  describe('buildRuleObject', () => {
    test('Should return an object', () => {
      const returnValue = setSalesRules.buildRuleObject(ruleComponents);
      expect(typeof returnValue).toBe('object');
    });
    test('Should return an object containing the sales rules the user input', () => {
      const returnValue = setSalesRules.buildRuleObject(ruleComponents);
      expect(returnValue).toEqual({
        apple: { quantity: 3, salename: 'threepak', pricepoint: 0.75 },
      });
    });
  });
});
