const getSalesRules = require('../helpers/getSalesRules');
const rules = {};
const rulesPath = 'testGetRule.json';

describe('getSalesRules', () => {
  describe('getCurrentRules', () => {
    test('Should retrieve an object', () => {
      const returnValue = getSalesRules.getCurrentRules(rulesPath);
      expect(typeof returnValue).toBe('object');
    });
    test('Should return an object containing the current rules', () => {
      const returnValue = getSalesRules.getCurrentRules(rulesPath);
      expect(returnValue).toEqual({
        apple: {
          quantity: 3,
          salename: 'threepak',
          pricepoint: 0.75,
        },
      });
    });
  });
});
