let t1 = parseFloat(prompt("What is the first test score?"));
let t2 = parseFloat(prompt("What is the second test score?"));
let t3 = parseFloat(prompt("What is the third test score?"));
let avg = (t1 + t2 + t3)/3;
console.log("Average: " + avg);
if (avg >= 92.5){
    console.log("Grade: A");
}
else if (avg >= 84.5 && avg < 92.5) {
    console.log("Grade: B");
}
else if (avg >= 77.5 && avg < 84.5) {
    console.log("Grade: C");
}
else if (avg >= 69.5 && avg < 77.5) {
    console.log("Grade: D");
}
else if (avg < 69.5) {
    console.log("Grade: F");
}
else {
    console.log("No grade.");
}