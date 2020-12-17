# GroceryCo-Checkout-System-Solution

## Overview

GroceryCo wants to develop a checkout system. Their pricing schemes are defined such as apples cost `75 cents` each three apples cost `$2.00`
Implement a checkout system which handles their pricing schemes.

## Details

- Write a console program which takes as input an unsorted list of single items from a shopping cart and performs a `check-out`: printing an itemized receipt and total price.
- Item prices can be defined in several ways.
- An item may be priced individually.
- For example, the 'Apple' item might cost 75 cents.
- Item prices may also be based on quantity purchased
  For example, as a promotion, you may buy three `Apples` for `$2.00`.
  Other promotions could be `buy one get one free” or “buy one, get one for 50% off`
- The checkout should be able to accept items in any order and calculate the price appropriately.
  For example, an Apple might be scanned, followed by 2 Oranges, and then an Apple again.
- Prices and promotions often change at the last minute. Each time a checkout transaction begins, the system should accept a set of pricing rules for all items.
  Note that there may be multiple pricing rules.
  Submit your solution via a GitHub repository. Include a README with any necessary information.
  The solution may use third party libraries but must be supplied.
- Submissions are due three (3) days from receipt of this exercise.

## Criteria

The solution will be examined from these perspectives:

- good design
- readability
- maintenance
- testing
- operational-ness
- aesthetics

## User Stories

- A User must be able to input a single unsorted list of items into a command line interface
- The user must recieve an itemzed receipt and total price as an output
- An item may be priced individually
- A user must be able to re-declare price values
- A user should be able to see items currently in their cart
- A user should be able to access a list of all current and previous prices

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the npm install command.
3. cd into the root directory of the project and type node gco --help to view a list of command line options.

## Dependencies

- Jest
- Commander
- FS
- ChalkJS
- Lodash

## Commands

Options:

--add [item]

adds an item to your cart

--cart

view current items in cart

--pricelist

![Printed Receipt](./docs/pricelistfeature.png 'Optional Title')

list current unit prices

--price [item]

set a price for an item - used in conjunction with --amount (see below)

--amount [amount]

change the unit price for the selected item - used in conjunction with --price (see below)

<b>Set the price of an item </b>

-- price [item] --amount [amount]

--checkout

recieve your itemized receipt

-h, --help

display the help menu listing all commands
<br>
<br>

# Base Prices and 'inventory'

- Contained in unitPrices.json

```
{
  "apple": {
    "currentPrice": 0.75, "previousPrice": null
    },
  "orange": {
    "currentPrice": 0.8, "previousPrice": null
    },
  "banana": {
    "currentPrice": 0.5, "previousPrice": null
    },
  "pear": {
    "currentPrice": 0.95, "previousPrice": null
    }
}
```

# Scenarios

## Scenario 1

```
==========================================
$ node gco.js price orange 75
$ node gco.js price orange 50
$
$ node gco.js add orange
$ node gco.js add apple
$
$ node gco.js checkout

> Thank you for shopping at GroceryCo!
> Here are your items

APPLE $0.75
ORANGE $0.50

TOTAL: $1.25

We look forward to your next visit!

==========================================

```

![Printed Receipt](./docs/scenario1.png 'Optional Title')

## Scenario 2

```
==========================================
$ node gco.js --price pear .95
$
$ node gco.js --add pear
$ node gco.js --add orange
$ node gco.js --add banana
$ node gco.js --add pear
$ node gco.js --add orange
$ node gco.js --add pear
$ node gco.js --add apple
$ node gco.js --add pear
$ node gco.js --add apple
$ node gco.js --add banana
$ node gco.js --add pear
$ node gco.js --add apple
$
$ node gco.js --checkout

> Thank you for shopping at GroceryCo!
> Here are your items

APPLE x3  $0.75
ORANGE x2  $0.80
BANANA x2  $0.50
PEAR x5 was $1.50 now $0.95

We look forward to your next visit!

==========================================

```

![Printed Receipt](./docs/receipt_s2.png 'Optional Title')

## Scenario 3 - Unfinished

```
$ gco price apple 75 # this will be ignored since lowest price is 50

$ gco price apple 50 # this will be preferred price for a single apple

$ gco price apple --quantity 2 --name "Buy 1 get 1 free" 50 # This will be used if there are 2 apples
(2 % 2 === 0)
(This rule would apply after the Threepak offer)

$ gco price apple --quantity 3 --name "Threepak" 75 # This will be used if there are 3 apples...
(This rule would apply first in this scenario)
(5 % 3 === 2)

$ # apply the discount for the AVERAGE price of the items.

$
$ gco add apple
$ gco add apple
$ gco add apple
$ gco add apple
$ gco add apple
$
$ gco checkout
==========================================
> Thank you for shopping at GroceryCo!
Here are your items

  APPLE x3 THREEPAK PROMOTION 3 @ $0.75
  APPLE x2 BUY ONE GET ONE FREE @ $1.50

  TOTAL: $2.25

We look forward to your next visit!

==========================================
```

## Design Considerations

- What format do the pricing rules need to be in?
- How do we design the pricing rules?
- What items do we want to allow? A pre-determined set of items in an array or any items within reason?
- Could a 50% off ALL items be accounted for?

## Future Considerations

- How to scale available inventory and add new pricing rules.
- How do we apply multiple offers at the same time? Average or using modulo (%) to group clusters of items together by quantity
- Limit the ability to checkout before pricing is added?
- validating inputs

* Commands - commander takes care of some of this
* Negative numbers currently --1.10 is allowed
* Text e.g. pineapple (does not currently have a price in the system)
* Code injection protection (template literals)

## Future Implementations

- Fix user added sales rules
- Implement sales schemes
- Add sequential serialized ID to categorized items and listed items on receipt

## Test Coverage

| File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| --------------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files             | 77.53   | 45.45    | 76.92   | 77.53   |
| getSalesRules.js      | 100     | 50       | 100     | 100     | 4                 |
| listItemsAndPrices.js | 93.75   | 75       | 100     | 93.75   | 7                 |
| setSalesRules.js      | 86.67   | 50       | 80      | 86.67   | 29-30,35-36       |
| stateHelpers.js       | 59.46   | 35.71    | 60      | 59.46   | 7-24,29-30        |

#

## Challenges

- Having to research how the commander library works from scratch
- Attempting to use readline and mock readline with Jest was not a good place to start. It was very difficult to mock the readline interface to write any meaningful tests. This along with researching potential other libraries cost approximately the first 5 hours of development time on the project.

- Formatting text to look good in the CLI is tricky, hence turning to experimenting with chalk and considering use of Boxen https://www.npmjs.com/package/boxen library

- Handling state management in Node. I made the choice to use FS and JSON to hold the state of the cart, prices and deals. This decision and implementation ultimately aided testing in Jest.
