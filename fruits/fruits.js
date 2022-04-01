function isFruit(article) {
  return !!EFruitPrice[article];
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
const fruits = articles.filter(isFruit);
const fruits1 = articles.filter((article) => isFruit(article));

console.log({ fruits, fruits1 });
