/* 
Zadatak: 
1. Proslijedi broj preko konzole
2. Ako je broj djeljiv sa 3 ispisi Fizz
3. Ako je broj djeljiv sa 4 ispisi Buzz
4. Ako je broj djeljiv sa 3 i 4 ispisi FizzBuzz
*/

var inputNumber = +process.argv[2];

console.log("User inputed:", inputNumber);

if (inputNumber % 12 === 0) {
  console.log("FizzBuzz");
} else if (inputNumber % 3 === 0) {
  console.log("Fizz");
} else if (inputNumber % 4 === 0) {
  console.log("Buzz");
} else {
  console.log("Hmmm...");
}
