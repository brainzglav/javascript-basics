/* function isPalindrome(input) {
  const sentence = input.toLowerCase().replace(/\s/g, "");

  for (let i = 0; i < (sentence.length - 1) / 2; i++) {
    const first = sentence[i];
    const second = sentence[sentence.length - 1 - i];

    if (first !== second) {
      return false;
    }
  }

  return true;
} */

function isPalindrome(input) {
  const sentence = input.toLowerCase().replace(/\s/g, "");
  const reverse = sentence.split("").reverse().join("");

  return sentence === reverse;
}

const inputs = ["Neven", "Teet", "Ana voli milovana", "tedsadsadsdsast"];

inputs.forEach((input) => console.log(isPalindrome(input)));
