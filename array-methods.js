/* 
const fn = function () {};
const arFn = () => {};
 */

function userFactory(name, className, grade) {
  return {
    name,
    className,
    grade,
    hasPassed: () => {
      if (grade > 1) {
        return true;
      }

      return false;
    },
  };
}

const users = [
  userFactory("Bikonja", "Javascript", 3),
  userFactory("Mercedes", "HTML", 5),
  userFactory("Mercedes", "CSS", 5),
  userFactory("Tornado", "HTML", 1),
  userFactory("Torpedo", "Javascript", 4),
];
const userNames = users.map((user) => user.name);
/* 
const namesAndGrades = users.map((user) => {
  return { name: user.name, grade: user.grade };
});
 */

/* const namesAndGrades = users.map(({ name, grade }) => ({
  name,
  grade: grade + 1,
  hmmm: "What is this?",
})); */

// Map vraca niz s jednakim brojem clanova kao i niz na kojem se izvrsava
const namesAndGrades = users.map(({ name, grade }, index) => ({
  index,
  name,
  grade,
}));

/* 
const namesAndGrades = [];

for (let i = 0; i < users.length; i++) {
  const { name, grade } = users[i];

  namesAndGrades.push({ name, grade });
}
*/

//console.log(namesAndGrades);

/* 
const passedUsers = [];

for (let i = 0; i < users.length; i++) {
  const user = users[i];

  if (user.grade > 1 && user.className === "Javascript") {
    passedUsers.push(user);
  }
}
 */

//Filter vraca niz koji ne mora imat jednak broj clanova kao i pocetni niz.
//Ukoliko nikoji clan ne zadovolji uvjet rezultat je prazni niz
/* 
const passedUsers = users.filter(
  ({ grade, className }) => grade > 1 && className === "Javascript"
);

console.log(passedUsers.map(({ name }) => name));
 */

const mercedes = users.find(({ name }) => name === "Mercedes");
const allMercedes = users.filter(({ name }) => name === "Mercedes");
// const benve = users.find(({ name }) => name === "Benve") || "Missing user!";

//console.log(allMercedes);

/* 
for (let i = 0; i < users.length; i++) {
  const { name, grade } = users[i];

  console.log(`${name} has ${grade}`);
} 
*/

users.forEach(({ name, hasPassed }) =>
  console.log(`${name} has`, hasPassed() ? "passed" : "failed")
);
