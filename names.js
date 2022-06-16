let size = parseInt(prompt("how many people do you know?"));
const names = [];
let z = "";
for (let x = 0; x < size; x ++) {
    z = prompt("Enter the person's full name: ");
    names.push(z);
}
let big = 0;
for (let y = 0; y < names.length; y ++) {
    if (names[y].substring(" ").length > big) {
        big = y;
    }
}
console.log("The person with the longest last name was " + names[big])