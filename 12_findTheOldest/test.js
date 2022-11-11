function findTheOldest() {
  let people = [
        {
          name: "Carly",
          yearOfBirth: 2018,
          yearOfDeath: 0,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ]

  let test = [];

    for (i = 0; i < people.length; i++){
      if(people[i].yearOfDeath === 0){
        people[i].yearOfDeath = 2020;
      }
        age = people[i].yearOfDeath - people[i].yearOfBirth;
        people[i].age = age;
        test[i] = age;
    }
    for (i = 0; i < people.length; i++){  
      if(people[i].age === Math.max(...test)) {
      return people[i].name
      }
    }
};
 
console.log(findTheOldest());

// Do not edit below this line
module.exports = findTheOldest;
