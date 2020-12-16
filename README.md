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

## User Stories

- A User must be able to imput a single unsorted list of items into a command line interface
- The user must recieve an itemzed receipt and total price as an output
- An item may be priced individually

# Base Prices

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

## Scenario 3

```$ gco price orange 75 # this will be ignored since lowest price is 50

$ gco price orange 50 # this will be preferred price for single oranges

$ gco price orange --quantity 2 --name "Buy 1 get 1 free" 50 # This will be used if there are 2 oranges

$ gco price orange --quantity 3 --name "Threepak" 75 # This will be used if there are 3 oranges...

$ # Note.... apply the discount for the AVERAGE price of the items.

$
$ gco add orange
$ gco add apple
$
$ gco checkout
> Thank you for shopping at GroceryCo!
Here are your items

  APPLE $0.75
  ORANGE $0.50

  TOTAL: $1.25

Come again!

====
```

## Design Considerations

- What format do the pricing rules need to be in?
- How do we design the pricing rules?
- Future Considerations - how to scale and add new pricing rules in the future.
- What items do we want to allow a pre-determined set of items in an array or any items within reason?
- How do we apply multiple offers at the same time?
- Need to limit the ability to checkout before pricing is added?

## Dependencies

- Jest
- Commander
- FS
- ChalkJS

## Criteria

The solution will be examined from these perspectives:

- good design
- readability
- maintenance
- testing
- operational-ness
- aesthetics
