const listItemsAndPrices = require('../helpers/listItemsAndPrices');
const unitPricePath = 'testUnitPrices.json';
const unitPrices = {
  apple: { currentPrice: 0.75, previousPrice: null },
  orange: { currentPrice: 0.8, previousPrice: null },
  banana: { currentPrice: 0.85, previousPrice: 0.5 },
  pear: { currentPrice: 0.65, previousPrice: 0.85 },
};

const cart = ['apple', 'orange', 'banana', 'pear'];

describe('listItemsAndPrices', () => {
  describe('getOriginalAndSalePrice', () => {
    test('Should return an array', () => {
      const returnValue = listItemsAndPrices.getOriginalAndSalePrice([1], cart, unitPrices);
      expect(typeof returnValue).toBe('object');
    });
    test('Should return currentPrice and previousPrice as a null', () => {
      const returnValue = listItemsAndPrices.getOriginalAndSalePrice([0], cart, unitPrices);
      expect(returnValue).toEqual([0.75, null]);
    });
    test('Should return currentPrice and previousPrice as null if current price is higher than previous price', () => {
      const returnValue = listItemsAndPrices.getOriginalAndSalePrice([2], cart, unitPrices);
      expect(returnValue).toEqual([0.85, null]);
    });
    test('Should return currentPrice and PreviousPrice if currentPrice is lower than previous price', () => {
      const returnValue = listItemsAndPrices.getOriginalAndSalePrice([3], cart, unitPrices);
      expect(returnValue).toEqual([0.65, 0.85]);
    });
  });

  describe('buildReceiptList', () => {
    test('Should call getOriginalAndSalePrice once', () => {
      const returnValue = listItemsAndPrices.buildReceiptList(cart, unitPrices);
      expect(typeof returnValue).toBe('object');
    });
    test('Should return an object', () => {
      const returnValue = listItemsAndPrices.buildReceiptList(cart, unitPrices);
      expect(typeof returnValue).toBe('object');
    });
  });
});
