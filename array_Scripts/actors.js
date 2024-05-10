"use strict"


let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },

    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

let numberOfAcademyMembers = academyMembers.length


for (let i = 0; i < numberOfAcademyMembers; i++) {

    if (academyMembers[i].memID === 187) {
        console.log(`${academyMembers[i].name} is member 187`)

    }
    //how many members have been in at least 3 films

    if (academyMembers[i].films.length >= 3) {

        console.log(`${academyMembers[i].name} has been in more than 3 films`)

    }

    if (academyMembers[i].name.indexOf("Bob") === 0) {

        console.log(`${academyMembers[i].name} is in the name my name starts with Bob`)

    }

    let listOfMemberFilms = academyMembers[i].films.length

     for (let j=0; j < listOfMemberFilms ; j++ ) {

     if (academyMembers[i].films[j].indexOf("A") === 0 ) {
         console.log (`${academyMembers[i].name} has films that start with A : ${academyMembers[i].films[j]}`)
     }

}
}
