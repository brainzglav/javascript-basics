function isFruit(article) {
  return !!EFruitPrice[article];
}

/* function calculateBasketPrice(fruitBasket) {
  let sum = 0;

  for (let i = 0; i < fruitBasket.length; i++) {
    const fruit = fruitBasket[i];

    sum += EFruitPrice[fruit];
  }

  return sum;
} */

const calculateBasketPrice = (fruitBasket) =>
  fruitBasket.reduce((sum, fruit) => sum + EFruitPrice[fruit], 0);

/* function buyFruit(availableFruits, budget) {
  const fruitBasket = [];

  for (let i = 0; i < availableFruits.length; i++) {
    const fruit = availableFruits[i];
    const price = EFruitPrice[fruit];

    if (!fruitBasket.includes(fruit) && budget >= price) {
      fruitBasket.push(fruit);
      budget -= price;
      availableFruits.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < availableFruits.length; i++) {
    const fruit = availableFruits[i];
    const price = EFruitPrice[fruit];

    if (budget >= price) {
      fruitBasket.push(fruit);
      budget -= price;
      availableFruits.splice(i, 1);
      i--;
    }

    if (budget === 0) {
      return fruitBasket;
    }
  }

  return fruitBasket;
} */

function buyFruit(articles, budget, prices) {
  const fruitBasket = [];
  const availableFruits = articles.filter(isFruit);
  const remainingFruits = [...availableFruits];

  availableFruits.forEach((fruit, i) => {
    const price = prices[fruit];

    if (!fruitBasket.includes(fruit) && budget >= price) {
      fruitBasket.push(fruit);
      budget -= price;
      remainingFruits.splice(i, 1);
    }
  });

  remainingFruits.forEach((fruit) => {
    const price = prices[fruit];

    if (budget >= price) {
      fruitBasket.push(fruit);
      budget -= price;
    }
  });

  return fruitBasket;
}

/* function isFruit(article) {
  return Object.keys(EFruitPrice).includes(article);
} */

const articles = require("./articles.json");
const EFruitPrice = {
  jabuka: 4,
  kruska: 5,
  banana: 3,
  naranca: 6,
  jagoda: 8,
};
//const fruits1 = articles.filter((article) => isFruit(article));
/* 
console.log({ fruits });

console.log(calculateBasketPrice(fruits)); */

const bought = buyFruit([...articles], 50, EFruitPrice);

console.log({ bought }, calculateBasketPrice(bought));
