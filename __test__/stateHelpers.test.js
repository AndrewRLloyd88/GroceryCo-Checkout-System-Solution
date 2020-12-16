const stateHelpers = require('../helpers/stateHelpers');
const cartpath = 'testcart.json'
const unitPricePath = 'testUnitPrices.json'

describe("getCart", () => {
  test("Should return an array containing our cart items if the correct cartpath is passed in", () => {
      const returnValue = stateHelpers.getCart(cartpath)
      expect( returnValue ).toEqual( ["pear", "pear", "pear", "apple", "apple", "apple", "orange"] );
   });

   test("Should return undefined if no cartpath is passed in", () => {
    const returnValue = stateHelpers.getCart()
    expect( returnValue ).toEqual( undefined );
 });
});

describe("getPrices", () => {
  test("Should return an object containing our prices if the correct pricepath is passed in", () => {
      const returnValue = stateHelpers.getUnitPrices(unitPricePath)
      expect( returnValue ).toEqual( {
        "apple": 0.75,
        "orange": 0.8,
        "banana": 0.5,
        "pear": 0.95
      } );
   });

   test("Should return undefined if no cartpath is passed in", () => {
    const returnValue = stateHelpers.getUnitPrices()
    expect( returnValue ).toEqual( undefined );
 });
});