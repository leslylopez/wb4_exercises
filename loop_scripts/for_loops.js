"use strict"
let message = "i love loops";

for (let i = 0; i < 7; i++) {


    console.log(message);

}



let cars = ["ford", "mazda", "infinity", "acura", "chevy", "mercerdes"]

console.log(cars[5]);

let cars = ["ford", "mazda", "infinity", "acura", "chevy", "mercerdes"]

console.log(cars.length - 1);
//gets us mercedes bc length is 6 , subtracts 1 bc it's counted 0 ++ , mercedes is in 5 
let cars = ["ford", "mazda", "infinity", "acura", "chevy", "mercerdes"]
for (let i = 0; i < cars.length; i++) {

    console.log(cars[i]);

}



let cars = ["ford", "mazda", "infinity", "acura", "chevy", "mercerdes"]
for (let i = 0; i < cars.length; i++) {

    console.log(`this ${cars[i]} is a POS`);

}


let cars = ["ford", "mazda", "infinity", "acura", "chevy", "mercerdes"]
for (let i = 0; i < cars.length; i++) {

    if (cars[i] === "acura") {
        break;
    }

    console.log(`this ${cars[i]} is a POS`);

}
//use the length property in the condition, especially for long list , 
// It's always < bc the legth is always one more than the last index



let listOfNumbers = [1, 2, 3, 4]
let listOfStrings = ["lesly", "john"]

let employees = [
    {
        employeeId: 1,
        name: "lesly",
        payRate: 400
    },

    {

        employeeId: 2,
        name: "john",
        payRate: 600
    }


]

function displayEmployees(someListOfEmployees) {


    for (let i = 0; i < employees.length; i++) {

        console.log(`
    employeeId ${employees[i].employeeId}
    name ${employees[i].name}
    payRate ${employees[i].payRate}
    
    `)
    }

}

displayEmployees(employees);



//create a list of numbers we want to add togehter
//create a function that can take a list of numbers
//and add them together
let numbersList = [1, 15, 7, 99, 8];

function totalAList(listOfNumbers) {
    let total = 0;

    let lengthOfList = listOfNumbers.length


    for(let i=0; i<lengthOfList; i++){
        total += listOfNumbers[i];
    }

    return total;
}

console.log(totalAList (numbersList));





let numbersList = [1, 15, 7, 99, 8];

function totalAverageList(listOfNumbers) {
    let total = 0;

    let lengthOfList = listOfNumbers.length


    for(let i=0; i<lengthOfList; i++){
        total += listOfNumbers[i];
    }

    return total/lengthOfList;
}

console.log(totalAverageList (numbersList));