/* for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
} */

/* for (var i = 0; i < 10; i += 2) {
  console.log(i);
} */

/* Zadatak: 
Napravi petlju koja prima unos iz konzole i izracunava faktorijel
5! = 5 * 4 * 3 * 2 * 1
*/

var inputNumber = 5;
var fact = 1;

for (var i = inputNumber; i > 1; i--) {
  fact *= i;
}

console.log(fact);
