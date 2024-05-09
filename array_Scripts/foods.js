"use strict"

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}

];

function totalTheMeals(mealsArray){

//keep variable to keep track of the total
    let total = 0;

//create a variable that keeps track of the legth of the array
let numberOfMeals = mealsArray.length  

    for (let i = 0; i < numberOfMeals; i++){
//same as total = total + mealsArray[i].price
    total += mealsArray[i].price

}



return total;


}
let lunchTotal =totalTheMeals(lunch);
let lunchTax = lunchTotal * (8/100);
let lunchTip = lunchTotal * (18/100)
let totalDue = lunchTotal + lunchTax + lunchTip;

//console.log(totalTheMeals(lunchTotal))
console.log("the lunch total was " + lunchTotal);
console.log("the tax was " + lunchTax.toFixed(2));
console.log("the lunch tip " + lunchTip.toFixed(2));
console.log("the luch total " + totalDue.toFixed(2));

