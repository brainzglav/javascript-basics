/* Primitivni tipovi podataka:
1. Number
2. String
3. Boolean
4. undefined
5. null
6.* Symbol 
7.* BigInt
*/

var inputParams = process.argv.slice(2);
var firstParam = inputParams[0];
var secondParam = inputParams[1];
var thirdParam = inputParams[2] || "No param passed";

//console.log(firstParam, secondParam, thirdParam, null);

/* if (firstParam) {
  console.log(`First param is truthy: ${firstParam}`);
}

if (secondParam) {
  console.log(`Second param is truthy: ${secondParam}`);
}

if (thirdParam) {
  console.log(`Third param is truthy: ${thirdParam}`);
} */

/* 
if (firstParam || (secondParam && thirdParam)) {
  console.log(
    `All params are truthy: ${firstParam} ${secondParam}`,
    thirdParam
  );
}
 */

//console.log(Boolean("0" || ("" && "Hello") || 0));

var allParams =
  firstParam && secondParam && thirdParam
    ? "All params are truthy"
    : "At least one param is falsy";

console.log(allParams);
