/* How I see it: */

/* 
if (true) {
  var i = 5;
}
*/

/* How Javascript engine sees it: */

/* 
var i;

if (true) {
  i = 5;
}
*/

/* 
let i;

if (true) {
  i = 5;
}

console.log(i);
 */

/* 
let sum = 0;
const fixedValue = 5;

//console.log(i);

for (let i = 0; i < 10; i++) {
  sum += fixedValue;
}

//console.log(i);
console.log(sum);

for (let i = 0; i < 10; i++) {
  sum += fixedValue;
}

console.log(sum);
 */

const fixed = 5;
let sum = 0;

if (fixed < 6) {
  sum += fixed;
}

const message = `Sum is: ${sum}`;

console.log(message);
