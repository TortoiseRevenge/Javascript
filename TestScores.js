let score1 = prompt("Enter test score.");
let score2 = prompt("Enter test score.");
let score3 = prompt("Enter test score.");
console.log((score1 + score2 + score3) / 3);
let average = (score1 + score2 + score3) / 3;
if (average >= 92.5) {
  console.log("A");
} else if (average >= 84.5) {
  console.log("B");
} else if (average >= 77.5) {
  console.log("C");
} else if (average >= 69.5) {
  console.log("D");
} else {
  console.log("F");
}
