const findTheOldest = function(people) {
    people = people.map(function(person){
        if(!("yearOfDeath" in person)){
            person.yearOfDeath = new Date().getFullYear();
        }
        return person;
    })
    return people.sort((person1,person2) => {return ((person2.yearOfDeath-person2.yearOfBirth)-(person1.yearOfDeath-person1.yearOfBirth));})[0];
};

// Do not edit below this line
module.exports = findTheOldest;
