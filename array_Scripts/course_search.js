"use strict"

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

//set a varibale that tellls us how many courses we have to help with the loop 
let numberOfCourses = courses.length;

//loop over the course
for (let i = 0; i < numberOfCourses; i++) {

    if (courses[i].CourseId === "PROG200") {
        console.log(`the ${courses[i].CourseId} start date is ${courses[i].StartDate}`);
    }

    if (courses[i].CourseId === "PROJ500") {
        console.log(`the ${courses[i].CourseId} title is  ${courses[i].Title}`);
    }

    if (courses[i].Fee <= 50) {
        console.log(`the ${courses[i].CourseId} title is  ${courses[i].Title} and is under $50`);
    }
//if course we're on meet in "classroom 1" print the title
    if (courses[i].Location === "Classroom 1") {
        console.log(`the ${courses[i].CourseId} title is  ${courses[i].Title} and meets in Classroom 1`);
    }

}

console.log("---------class in Classroom 1 ------------")

//proceed create a loop just asking one question , a seperate loop to organize data
//all classroom from classroom 1 , seperated from bigger loop

