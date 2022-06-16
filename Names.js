let numOfNames = parseInt(prompt("how many friends do you have"));
if (numOfNames>0){
    let firstNames = [];
    let lastNames = [];
    for (let i = 0;i<numOfNames;i++){
        firstNames.push(prompt("enter first name of person " + (i+1)));
        lastNames.push(prompt("enter last name of person " + (i+1)));
    }
    let longestLength = 0;
    let shortestLength = 999;
    let longestIndex = 0;
    let shortestIndex = 0;
    for(let j = 0; j<numOfNames;j++){
        if(lastNames[j].length>longestLength){
            longestLength = lastNames[j].length;
            longestIndex = j;
        }
        if(lastNames[j].length<shortestLength){
            shortestLength = lastNames[j].length;
            shortestIndex = j;
        }
    }
    console.log("person with longest last name: " + firstNames[longestIndex] + " " + lastNames[longestIndex]);
    console.log("the range of last name lengths was: " + (longestLength-shortestLength));
    for(let n = 0;n<numOfNames;n++){
        console.log(firstNames[n] + " " + lastNames[n]);
    }
}