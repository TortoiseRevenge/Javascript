let num = prompt("How many people do you know?");
const lastName = [];
for (let i = 1; i <= num; i++) {
    let name = prompt("Enter first and last name: ");
    lastName.push(name);
}
longestLast(lastName);

function longestLast(array1 = []) {
    array2 = [];
    array3 = [];
    for (let i = 0; i < array1.length; i++) {
        array2 = array1[i].split(" ");
        array3.push(array2);
        for (let o = 1; o < array3.length; o+2) {
            let compare = 1;
            if (array3[o].length > compare) {
                compare = array3[o];
            }
        }
    }
    console.log("The name with the longest last name is: " + compare);
}