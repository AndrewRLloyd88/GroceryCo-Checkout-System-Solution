const stateHelpers = require('../helpers/stateHelpers');
const cartpath = 'testcart.json';
const unitPricePath = 'testUnitPrices.json';
const unitPrices = {
    "apple": { "currentPrice": 0.75, "previousPrice": null },
    "orange": { "currentPrice": 0.8, "previousPrice": null },
    "banana": { "currentPrice": 0.5, "previousPrice": null },
    "pear": { "currentPrice": 0.95, "previousPrice": 1.5 }
}

describe('stateHelpers', () => {
  describe('getCart', () => {
    test('Should return an array containing our cart items if the correct cartpath is passed in', () => {
      const returnValue = stateHelpers.getCart(cartpath);
      expect(returnValue).toEqual([
        'pear',
        'pear',
        'pear',
        'apple',
        'apple',
        'apple',
        'orange',
      ]);
    });

    test('Should return undefined if no cartpath is passed in', () => {
      const returnValue = stateHelpers.getCart();
      expect(returnValue).toEqual(undefined);
    });
  });

  describe('getPrices', () => {
    test('Should return an object containing our prices if the correct pricepath is passed in', () => {
      const returnValue = stateHelpers.getUnitPrices(unitPricePath);
      expect(returnValue).toEqual({
        apple: { currentPrice: 0.75, previousPrice: null },
        orange: { currentPrice: 0.8, previousPrice: null },
        banana: { currentPrice: 0.5, previousPrice: null },
        pear: { currentPrice: 0.95, previousPrice: null },
      });
    });

    test('Should return undefined if no cartpath is passed in', () => {
      const returnValue = stateHelpers.getUnitPrices();
      expect(returnValue).toEqual(undefined);
    });
  });

  describe('setUnitPrice', () => {
    test('Should return an array', () => {
    const returnValue = stateHelpers.setUnitPrice(unitPrices, 'apple', 1.50);
      expect(typeof returnValue).toBe('object');
    });
  });
});
