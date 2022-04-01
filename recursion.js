function fact(num) {
  if (num === 1) {
    return 1;
  }

return fact(num - 1) * num;
}

console.log(fact(1));
console.log(fact(2));
console.log(fact(3));
console.log(fact(4));
console.log(fact(5));
