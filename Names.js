let num = parseInt(prompt("how many friends do you have"));
if (num>0){
    let firstNames = [];
    let lastNames = [];
    for (let i = 0;i<num;i++){
        firstNames.push(prompt("enter first name of person " + (i+1)));
        lastNames.push(prompt("enter last name of person " + (i+1)));
    }
    console.log(firstNames);
    let longestLength = 0;
    let longestIndex = 0;
    for(let j = 0; j<num;j++){
        if(j.length>longestLength){
            longestLength = j.length;
            longestIndex = j;
        }
    }
    console.log(firstNames[longestIndex] + " " + lastNames[longestIndex]);
}