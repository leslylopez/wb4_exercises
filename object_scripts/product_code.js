"use strict"

//let parsePartCode = "supplierCode:productNumber-size" 
/*
let parsePartCode = {

    supplierCode: "IMB",
    productNumber: "456",
    size: "L",
};

function partCode (parse) {
    console.log (`
    Supplier Code: ${parse.supplierCode}
    Product Number: ${parse.productNumber}
    Size: ${parse.size}
    `)
}

partCode(parsePartCode);
*/



//let parseCode = "IMB:123-M"

function partCode (code) {

    let supplierCode = code.substring(1, code.indexOf(":"));
    let productNumber = code.substring (code.indexOf(":")+1 )
    let size = code.substring(code.indexOf("-")+1);
return {
    supplierCode: supplierCode,
    productNumber: productNumber,
    size: size
}

}

let product = "IMB:123-M"

let parsedCode = partCode(product);

console.log (`
Supplier Code: ${parsedCode.supplierCode}
Product Number: ${parsedCode.productNumber}
Size: ${parsedCode.size}
`);





let someNumber = 0


while(someNumber <=5) {

    console.log("eric");

    someNumber++

}
//**with while loops remember to create a variable to keep track of
let someNumber = 1


while(someNumber <=5) {

    console.log(someNumber);
//**with while loops you have to remember to increase the number
    someNumber++

}

let i = 1


while(i <=5) {

    console.log(i*5);
//**with while loops you have to remember to increase the number
    i++

}

//do while loop

do {
    console.log(i)
    i++
} while (i<5);

//*while loop may never run Not even once
//* do whileloop will run the code one time only . 
//only use when you need to do something one time to check . If it fails once then try again . example: connect to database server


//For loop
for ( let i = 0; i <=5; i++ ){

    console.log (i);
}

for ( let i = 0; i <=5; i++ ){

    console.log (i);
}


//all the pieces are together for for loop 
//Remember SEMICOLON 

for ( let i = 0; i <=5; i++ ){

    //console.log(i);
    if (i === 3 ){
        break;
        
    }
    console.log(i);
//breaks just helps stop the loop early
}

for ( let i = 0; i <=5; i++ ){

    console.log(i);
    if (i === 2 ){
        continue;
    }

//continue skips the number 2 
//continue is used for example only want even or odd numbers, skipping certain numbers or people to find and categorize ppl or numbers 
//breaks just helps stop the loop early
  
}
