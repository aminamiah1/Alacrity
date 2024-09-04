export const calculateAverageAge = (people) => {
    let totalAge = 0
    for (let i = 0; i < people.length; i++){ //loops through the array
        totalAge = totalAge + people[i].age; //adds each person's age to total age
        //this is executed at every loop - it acceses the age property of the person then adds it to total age 
    }
    return totalAge / people.length //calculates avergae by getting total age and dividing it by amount of people
}

export const findOldestPerson = (people) => {
    let oldestPerson = people[0] //it assumes the first person is the oldest 
    for (let i = 1; i < people.length; i++){
        if (people[i].age > oldestPerson.age){ //if we find someone older than the 
            oldestPerson = people[i]; //then it updates oldest person to the new older person
        }
    }
    return oldestPerson;
}

export const findYoungestPerson = (people) => {
    let youngestPerson = people[0]; //assumes the first person is youngest
    for (let i = 1; i < people.length; i++) {
        youngestPerson = people[i]; //if we find someone younger then update youngest to the new younger person
    }
}
return youngestPerson;
//returns youngest