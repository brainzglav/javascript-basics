console.log("Start");
const global = "Im in global scope";

function helloWorld(first, second) {
  const goodbye = "everyone";

  console.log(`Hello ${first} and ${second}!`);
  console.log(`Goodbye ${goodbye}`);
  console.log(global);

  /* innerFunction();

  function innerFunction() {
    console.log({ global, goodbye, first, second });
  } */
}

helloWorld("World", "others", "Hmmm");
helloWorld("others");
helloWorld();
