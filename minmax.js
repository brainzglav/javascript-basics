/* Zadatak: 
1. Napisi funkciju koja vraca najmanji element niza
2. Napisi funkciju koja vraca najveci element niza
1. Napisi funkciju koja vraca zbroj najmanjeg i najveceg elementa niza
 */

function min(numbers) {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];

    if (number < min) {
      min = number;
    }
  }

  return min;
}

function max(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];

    if (number > max) {
      max = number;
    }
  }

  return max;
}

function minMax(numbers) {
  return min(numbers) + max(numbers);
}

const numbers = [2, 5, 3, 6, 8, 4, 9, 1, 2, 4, 6, 3, 7, 8];
const minNumber = min(numbers);
const maxNumber = max(numbers);

console.log(minMax(numbers));
