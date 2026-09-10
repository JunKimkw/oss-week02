// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

// (a)
const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

const oddScores = scores.filter(num => num%2 !== 0);
console.log("odd:", oddScores);

const doubleScores = oddScores.map(num => num * 2);
console.log("double:", doubleScores);

const descendingScores = doubleScores.sort((a,b) => b - a);
console.log("descending:", descendingScores);

const firstHalfScores = descendingScores.slice(0, Math.ceil(descendingScores.length/2));
console.log("first half:", firstHalfScores);

// (b)
const result = scores.filter(num => num % 2 !== 0)
.map(num => num * 2).sort((a,b) => b - a).slice(0, Math.ceil(oddScores.length / 2));

// (c)
console.log("Chain Method:", result);