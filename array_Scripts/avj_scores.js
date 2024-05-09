"use strict"
//create variables holding arrays with the scores
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
//function to alculate the average from a list of numbers
function getAverage(scoresArray) {
    //create a variable to keep track of our total of all the numbers in the array
    let total = 0;
    //getting the legth of the list and assigning the variable
    let lengthOfList = scoresArray.length

    //some loop here that adds the scores together 

    for (let i = 0; i < lengthOfList; i++) {

        total += scoresArray[i];

    }

    return total / scoresArray.length

}
//display average of both seperatly 
console.log(getAverage(myScores));
console.log ("my scores average" + Math.round(getAverage(myScores)));

console.log(getAverage(yourScores));
console.log ("your scores average " + Math.round(getAverage(yourScores)));
