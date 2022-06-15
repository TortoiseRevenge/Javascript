let total = 0;
for (let i = 0;i<3;i++){
    total += parseFloat(prompt("enter score"));
}
let average = total/3;
console.log(average);
if (average>=90 ){
    console.log("average score of " + average + " grade: A")
}
else if(average<90 && average>=80){
    console.log("average score of " + average + " grade: B");
}
else if(average<80 && average>=70){
    console.log("average score of " + average + " grade: C");
}
else if(average<70 && average>=60){
    console.log("average score of " + average + " grade: D");
}
else{
    console.log("average score of " + average + " grade: F");
}