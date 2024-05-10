"use strict"

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
];

//this is us getting the total number of students
///let numberOfStudents = students.length

//let's loop over the student array
for( let i=0; i < students.length; i++) {

//console.log (students[i])
//start a running total for the scores to be stored in the total variable
    let total = 0;
//get the array for the specific student
    let currentStudentsScoresArray = students[i].scores
    let numberOfScoreForStudents = students[i].scores.length

    for (let i=0; i < numberOfScoreForStudents; i++){
        
        total += currentStudentsScoresArray[i];
    }

    let studentsAverage = total / numberOfScoreForStudents;

    console.log (`${students[i].name} has an average score of ${studentsAverage} `)

}

//or....

function calcStudentAverage (listOfStudents) {
    let numberOfStudents = listOfStudents.length

    //let's loop over the student array
    for( let i=0; i < numberOfStudents; i++) {
    
    //console.log (students[i])
    //start a running total for the scores to be stored in the total variable
        let total = 0;
    //get the array for the specific student
        let currentStudentsScoresArray = listOfStudents[i].scores
        let numberOfScoreForStudents = listOfStudents[i].scores.length
    
        for (let i=0; i < numberOfScoreForStudents; i++){
            
            total += currentStudentsScoresArray[i];
        }
    
        let listOfStudentsAverage = total / numberOfScoreForStudents;
    
        console.log (`${listOfStudents[i].name} has an average score of ${listOfStudentsAverage} `)
    
    }

}


