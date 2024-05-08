"use strict"

// name
// address
// city
// state
// zip


//create our person with some properties that describe person
let person = {

    name: "Lesly Lopez",
    address: "1234 easy street",
    city: "Dallas",
    state: "TX",
    zip: "75181"
};


//create a function that formats and prints an address for a contact to the console
//"contact" can be anything ,is paramater or placeholder of what gets passed in . 
function printContact(contact){

    console.log(`
    ${contact.name}
    ${contact.address}
    ${contact.city}, ${contact.state} ${contact.zip}
    `)

}

//run function
printContact(person);


