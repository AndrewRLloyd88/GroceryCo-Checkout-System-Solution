const buildReceiptList = require('./listItemsAndPrices').buildReceiptList
const printReceipt = (total, cart, unitPrices ) => {

const receiptList =  buildReceiptList(cart, unitPrices)
console.log(receiptList)
const tally = []
let list = ""

for(item in receiptList){
  list += `${item.toUpperCase()} x${receiptList[item][0]} $${receiptList[item][1].toFixed(2)}` + "\n            "

}

// tally.push(`${item.toUpperCase()} x${receiptList[item][0]} $${receiptList[item][1].toFixed(2)}`)

const receipt = `
======================================
Thank you for shopping at GroceryCo!\n
        Here are your items\n

            ${list}

            TOTAL: ${total}

             Come again!

=======================================`
return receipt;
}

module.exports = {printReceipt}