let size = parseInt(prompt("how many people do you know?"));
const names = [];
let z = "";
for (let x = 0; x < size; x ++) {
    z = prompt("Enter the person's full name: ");
    names.push(z);
}
const name = {
    longest : "",
    shortest : "",
    range : 0
};
function findLongest(array) {
    let big = 0;
    let longest = "";
    for (let y = 0; y < array.length; y ++) {
        if (array[y].substring(" ").length > longest.length) {
            big = y;
            longest = array[y].substring(" ");
        }
    }
    console.log("The name with the longest last name is " + array[big]);
}
findLongest(names);

let sm = 20;
let bg = 0;
for (let f = 0; f < names.length; f ++) {
    if ((names[f].substring(" ").length - 1) <= sm) {
        sm = names[f].substring(" ").length - 1;
    }
    if (names[f].substring(" ").length >= bg) {
        bg = names[f].substring(" ").length - 1;
    }
}
console.log("The range of last name size was " + sm + " to " + bg + " letters.");
console.log("All names: ");
for (let h of names) {
    console.log(h);
}