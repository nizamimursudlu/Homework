'use strict';
/*------------------------------------------------------------------------------
1. Complete the function `rollTheDices()` by using `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dices continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  // TODO complete this function; use Promise.race() and rollDice()
  const arrayOfPromises = dices.map((el) => rollDice(el));

  return Promise.race(arrayOfPromises).then((values) => values);
}
// Refactor this function to use async/await and try/catch
async function main() {
  try {
    const response = await rollTheDices();
    const results = response;
    console.log('Resolved!', results);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}
main();

// ! Do not change or remove the code below
module.exports = rollTheDices;

// Refactor this function to use async/await and try/catch
