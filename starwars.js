/* https://edabit.com/challenge/Ac8GiJBAzEJYmcqyF */

//How translations work

/* const en = {
  hello_world: "Hello world",
};

const cro = {
  hello_world: "Alooooo",
}; */

function relationToLuke(person) {
  switch (person) {
    case "Darth Vader":
      return "father";
    case "Leia":
      return "sister";
    case "Han":
      return "brother in law";
    case "R2D2":
      return "droid";

    default:
      return null;
  }
}

function createName(array) {
  return array.toString().replace(/\,/g, " ");
}

//const relation = relationToLuke("Leia");

const relationObject = {
  "Darth Vader": "father",
  Leia: "sister",
  Han: "brother in law",
  R2D2: "droid",
};
const params = process.argv.slice(2);
const name = createName(params);
const relation = relationObject[name];

if (relation) {
  console.log(`Luke, I am your ${relation}`);
} else {
  console.log("I dont know who I am");
}
