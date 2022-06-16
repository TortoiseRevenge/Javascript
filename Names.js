let numOfNames = parseInt(prompt("how many friends do you have"));
if (numOfNames>0){
    let names = [];
    for (let i = 0;i<numOfNames;i++){
        names.push((prompt("enter first name of person " + (i+1))));
    }
    function longestName(array){
    let longestLength = 0;
    let shortestLength = 999;
    let longestIndex = 0;
    for(let j = 0; j<array.length;j++){
        if(array[j].split(" ")[1].length>longestLength){
            longestLength = array[j].split(" ")[1].length;
            longestIndex = j;
        }
        if(array[j].split(" ")[1].length<shortestLength){
            shortestLength = array[j].split(" ")[1].length;
        }
    }
    return [array[longestIndex],(longestLength-shortestLength)]
    }
    results = longestName(names);
    console.log("Person with the longest name: " + results[0]);
    console.log("Range of last name lengths: " + results[1]);
}