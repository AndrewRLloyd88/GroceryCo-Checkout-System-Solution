const stateHelpers = require('../helpers/stateHelpers');
const cartpath = 'testcart.json';
const unitPricePath = 'testUnitPrices.json';
const testUpdateUnitPricesPath = 'testUpdateUnitPrices.json';
const testUpdatePriceWithPreviousPath = 'testUpdatePriceWithPrevious.json';
const testUnitPrices = {
  apple: { currentPrice: 0.75, previousPrice: null },
  orange: { currentPrice: 0.8, previousPrice: null },
  banana: { currentPrice: 0.5, previousPrice: null },
  pear: { currentPrice: 0.95, previousPrice: 1.5 },
};

const testCurrentPrice = {
  apple: { currentPrice: 0.75, previousPrice: null },
  orange: { currentPrice: 0.8, previousPrice: null },
  banana: { currentPrice: 0.5, previousPrice: null },
  pear: { currentPrice: 0.95, previousPrice: 1.5 },
};

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
    test('Should return an object', () => {
      const returnValue = stateHelpers.setUnitPrice(
        testUnitPrices,
        'apple',
        2.5,
        testUpdateUnitPricesPath
      );
      expect(typeof returnValue).toBe('object');
    });
    test('Should set the currentPrice on the correct item and for the correct value a user inputs if previousPrice === null', () => {
      const returnValue = stateHelpers.setUnitPrice(
        testUnitPrices,
        'apple',
        2.5,
        testUpdateUnitPricesPath,
        0.75
      );
      expect(returnValue).toEqual({
        apple: { currentPrice: 2.5, previousPrice: 0.75 },
        orange: { currentPrice: 0.8, previousPrice: null },
        banana: { currentPrice: 0.5, previousPrice: null },
        pear: { currentPrice: 0.95, previousPrice: 1.5 },
      });
    });
    test('Should set the currentPrice and previousPrice correctly according to user input if there is a previous price listed', () => {
      const returnValue = stateHelpers.setUnitPrice(
        testCurrentPrice,
        'pear',
        0.55,
        testUpdatePriceWithPreviousPath,
        0.75
      );
      expect(returnValue).toEqual({
        apple: { currentPrice: 0.75, previousPrice: null },
        orange: { currentPrice: 0.8, previousPrice: null },
        banana: { currentPrice: 0.5, previousPrice: null },
        pear: { currentPrice: 0.55, previousPrice: 0.75 },
      });
    });
  });
});
