let num = parseInt("Enter the number of people you know", radix);
let nameList = [];
for (let i = 0; i < num; i++) {
  let name = prompt("Enter full name");
  nameList.push(name);
}
let length = 0,
  longest;
nameList.forEach((e) => {
  const len = e.split(" ")[1].length;
  if (len > length) (length = len), (longest = e);
});
let total = 0;
console.log(longest);
nameList.forEach((n) => {
  total += nameList.n;
});
let avg = total / nameList.length;
console.log(nameList);

function lastNameLength(num) {
  return num.split(" ")[1].length;
}
