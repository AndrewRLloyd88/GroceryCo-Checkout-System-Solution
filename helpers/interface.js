// const getInput = async () => {
//   const foo = await rl.question('What do you think of Node.js? ');
//     rl.close();
//     return foo;
//   };


// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const getInput = () => {



//  rl.question(
//     'Welcome to GroceryCo please scan in your items, if you are done scanning type done. ', (item) => {
//       //user is done scanning
//       return item;
//       rl.close()
//     })
//   }



const readline = require ('readline-promise');

readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

let bar = null;

rlp.questionAsync('Foo?').then(answer => {
  bar = answer;
  return bar;
});

module.exports = {getInput}
