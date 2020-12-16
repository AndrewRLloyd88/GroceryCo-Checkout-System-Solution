const buildReceiptList = require('./listItemsAndPrices').buildReceiptList
const printReceipt = (total, cart, unitPrices ) => {

const receiptList =  buildReceiptList(cart, unitPrices)
const tally = []
let list = ""
console.log(receiptList)

for(item in receiptList){
  let currentItem = `${item.toUpperCase()}`
  let quantity = `x${receiptList[item][0]}`
  let previousPrice = receiptList[item][2] ? receiptList[item][2] : null
  console.log("prevPrice :", previousPrice)
  
  list += `${currentItem} ${quantity} ${previousPrice === null ? '' : "was $" + previousPrice.toFixed(2)} ${previousPrice === null ? '$' + receiptList[item][1].toFixed(2) : "now $" + receiptList[item][1].toFixed(2) }` + "\n            "


}

const receipt = `
=========================================
Thank you for shopping at GroceryCo!\n
        Here are your items\n

            ${list}

            TOTAL: ${total}

  We look forward to your next visit!

=========================================`
return receipt;
}

module.exports = {printReceipt}