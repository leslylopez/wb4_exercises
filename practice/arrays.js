"use strict"

let namesArray = ["eric", "alec", "italy", "candice", "rohan"];
//*the .length could be problematic
// namesArray[namesArray.length] = "katalina";
// namesArray[namesArray.length] = "adriana";
// namesArray[namesArray.length] = "wilfredo";

namesArray.push("katalina");
namesArray.push("adriana");
namesArray.push("wilfredo");
namesArray.push("cash", "is", "king");

console.log(namesArray);
//to delete last
namesArray.pop();
//to delete first list of array
namesArray.shift();
//splice to delete something in the middle but have to specify
console.log(namesArray);


let teams = ["Red Sox", "Rangers", "Blue Jays", "Astros", "White Sox", "Rangers"];

//indexOf finds the first instance of what we are looking for
//last indexOf would give us 5
let index = teams.indexOf("Rangers"); // returns 1
//if it didn't find it, it will give us -. if index was -1 , we didn't find it 
if (index === -1) {
    console.log("Item not found");
    //otherwise we found it we get index
} else {
    console.log("Item at position: " + index);
}





let menu = [
    { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
    { id: 2, item: "Burger", category: "Meal", price: 7.29 },
    { id: 3, item: "Salad", category: "Meal", price: 8.29 },
    { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
    { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

//givena menu and a category for items on the menu
//return a new list (array) of just the items that match that category
function getMenuItemsInCategory(menu, category) {
    //start by creating an empty list to hold our matches
    let matching = [];
    //number of fitems on the menu
    let numItems = menu.length;

    //loop over the menu item, if th emenu item we are on matches the category
    //passes into the function then add it to the matching array
    for (let i = 0; i < numItems; i++) {
//it's saying or asking "does this index have menu item? yes or no. if yes run , if no it's gonna be empty"
        if (menu[i].category === category) {
            //add that menu item
            matching.push(menu[i]);
        }
    }
    return matching;
}
// show all the drinks
let drinksArray = getMenuItemsInCategory(menu, "Drink");
let mealsArray = getMenuItemsInCategory(menu, "Meal");


console.log(mealsArray);

for (let i=0; i < mealsArray.length; i++) {


}



// let numDrinks = drinks.length;
// for (let i = 0; i < numDrinks; i++) {
//     console.log(drinks[i].item +
//         " $" + drinks[i].price.toFixed(2));
// }