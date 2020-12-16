const stateHelpers = require('../helpers/stateHelpers');
const cartpath = 'test.json'

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