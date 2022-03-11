/* 
Prebroji broj zagrada i je li svaka zagrada 
ima otvorenu i zatvorenu zagradu 
*/

const message = "[]]sdd())(b{}aa}{d";
let parentheses = 0;
let square = 0;
let curly = 0;

for (let i = 0; i < message.length; i++) {
  const char = message[i];

  switch (char) {
    case "(":
      parentheses++;
      continue;
    case ")":
      parentheses--;
      continue;
    case "[":
      square++;
      continue;
    case "]":
      square--;
      continue;
    case "{":
      curly++;
      continue;
    case "}":
      curly--;
      continue;
    default:
      console.log("Char is not a bracket");
  }
}

console.log(parentheses, square, curly);
