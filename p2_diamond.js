// P2. Diamond  (commit: "p2: diamond")
//
// node p2_diamond.js 5   prints a 5-wide diamond of '*'.
// n comes from process.argv[2]. Default: 5. Use only odd n.
//
//   *
//  ***
// *****
//  ***
//   *

const n = Number(process.argv[2] ?? 5);
// TODO: print the diamond with for / if and console.log.
// Hint: for row i, count the spaces and the stars separately.
// Hint: "*".repeat(3) gives "***".

if (n % 2 === 0) { //홀수만 가능
    console.log("n must be odd");
} else {
    for (let i = 1; i <= (n + 1) / 2; i++) {
        console.log(" ".repeat((n + 1) / 2 - i) + "*".repeat((i - 1) * 2 + 1));
    }

    for (let i = (n - 1) / 2; i > 0; i--) {
        console.log(" ".repeat((n + 1) / 2 - i) + "*".repeat((i - 1) * 2 + 1));
    }
}
// 2 1 0 1 2 공백
// 1 3 5 3 1 별