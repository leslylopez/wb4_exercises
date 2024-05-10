"use strict"

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Hersheys", price: 6.79 },
    { product: "Nerds", price: 4.89 },
    { product: "Gummy Bears", price: 5.89 },
    { product: "Gummy Worms", price: 8.79 },
    { product: "Dots", price: 3.89 },
    { product: "Lollipop", price: 1.79 },
    // TODO: fill the array with 10 candies of various
    // price ranges
];

let numberOfCandy = products.length;

for (let i = 0; i < numberOfCandy; i++) {

    if (products[i].price < 4) {

        console.log(`Candy ${products[i].product} is less than $4`)
    }

    if (products[i].product.indexOf("M&Ms") !== -1 ) {
  
        console.log (`Candy ${products[i].product} has word M&M `)
    } 

    if (products[i].product.indexOf("Swedish Fish") === 0) {
        console.log (`We carry Swedish Fish`)
    }

   
}

