var isBool = Boolean(false);

/* 
console.log(
  Boolean(0),
  Boolean(1),
  Boolean(-1),
  Boolean("Hello"),
  Boolean(""),
  Boolean("0")
); */

// AND

//console.log(0 && 0, 0 && 1, 1 && 0, 1 && 1);
/* console.log(
  Boolean("Hello") && Boolean("World"),
  Boolean("Hello") && Boolean("")
); */
//console.log(true && "Hello world");

// OR

/* console.log(0 || 0, 0 || 1, 1 || 0, 1 || 1);
console.log(false || "Hello world"); */

// NEGATION

//console.log(!0, !1, !!1, Boolean(5), !!5);

/* if (false) {
  console.log("First");
} else {
  console.log("Second");
} */

/* if (false) {
  console.log("First");
} else if (false) {
  console.log("Second");
} */

var isLowerThanFive = 4 + 5;

/* if (isLowerThanFive <= 5) {
  console.log("It is!");
} else {
  console.log("No its not!");
} */

/* if (isLowerThanFive == 9) {
  console.log("It is!");
} else {
  console.log("No its not!");
} */

/* if ("9" === 9) {
  console.log("It is!");
} else {
  console.log("No its not!");
} */

/* console.log(true ? "Hello" : "World");
console.log(false ? "Hello" : "World"); */

// NEMOJTE!
/* console.log(false ? "Hello" : "World" ? "Hmmm" : "What?");
console.log(false ? "Hello" : false ? "Hmmm" : "What?"); */

var someValue = isLowerThanFive < 5 ? "Hello" : "World";

//console.log(someValue);

//console.log(isLowerThanFive < 5 ? "Hello" : console.log("World"));

/* if (isLowerThanFive < 5) {
  console.log("Lower than five");
} else if (isLowerThanFive === 5) {
  console.log("Equals five");
} else if (isLowerThanFive > 5) {
  console.log("Larger than five");
} */

var str = "ello";

switch (str) {
  case "hello":
    console.log("hello");
    break;
  case "Hello":
    console.log("Hello");
    break;
  case "Hell":
    console.log("Hell");
    break;
  default:
    console.log("Default");
}
