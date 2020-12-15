const checkout = require('../checkout');
const readline = require('../__mocks__/readline')

jest.mock("readline");

describe("checkout", () => {
    test("shoppingCart should equal ['apple'] when cli input is 'apple', 'done' ", () => {
        const returnValue = checkout.shoppingCart
        expect( returnValue ).toEqual( ['apple'] );
     });
 });


 describe("checkout", () => {
    test("shoppingCart should equal ['apple'] when cli input is 'apple', 'done' ", () => {
        const returnValue = checkout.shoppingCart
        expect( returnValue ).toEqual(["one"]);
     });
 });