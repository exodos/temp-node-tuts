// const names = require("./4-names");
// const sayHi = require("./5-utils");
// const data = require("./6-alternative-flavor");
// require("./7-mind-grenade");
// console.log(names);

// console.log(data);

// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
