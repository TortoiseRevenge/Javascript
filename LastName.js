let num = prompt("How many people do you know?");
const lastName = [];
let char;
let rep;
let compare = 1;
let index;
for (i = 1; i <= num; i++) {
    let name = prompt("Enter first and last name: ");
    lastName.push(name);
}
for (i = 0; i < lastName.length; i++) {
    const surName = lastName[i].split();
    for (i = 1; i < surName.length; i+2) {
        rep = parseString(surName[i]);
        char = rep.length;
        if (char > compare) {
            compare = char
            index = i; 
        }
    }
}