const findTheOldest = function (people) {
  // Calculate and add age to every person
  people = people.map((person) => {
    person.age = person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth
      : new Date().getFullYear() - person.yearOfBirth;
    return person;
  });
  const oldestAge = Math.max(...people.map((p) => p.age));
  return people.find((p) => p.age === oldestAge);
};

// Do not edit below this line
module.exports = findTheOldest;
