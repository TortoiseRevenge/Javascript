let num = parseInt("Enter the number of people you know", radix);
let nameList = [];
for (let i = 0; i < num; i++) {
  let name = prompt("Enter full name");
  nameList.push(name);
}
let length = 0,
  longest;
arr.forEach((e) => {
  const len = e.split(" ")[1].length;
  if (len > length) (length = len), (longest = e);
});
console.log(longest);
