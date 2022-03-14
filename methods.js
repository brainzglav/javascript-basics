function createBull(bullName, height, weight) {
  const bull = {
    name: bullName,
    height,
    weight,
    moo: function () {
      console.log(`${this.name} says moooooo!`);
    },
    bullCategory: function () {
      if (this.height > 1.8 && this.weight > 850) {
        return `${this.name} is a heavyweight bull`;
      }

      return `${this.name} is a useless bull`;
    },
  };

  bull.moo();

  return bull;
}

const bik1 = createBull("Bikonja", 1.5, 800);
const bik2 = createBull("Mercedes", 1.9, 900);
const bik3 = createBull("Tornado", 1.8, 850);

console.log(bik1.bullCategory());
console.log(bik2.bullCategory());
console.log(bik3.bullCategory());
