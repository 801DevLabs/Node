var name = 'Tom'
var age = 28
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby){
  return (`Name is ${userName}, age is ${userAge} and user has hobbies: ${userHasHobby}`)
}

console.log(summarizeUser(name, age, hasHobbies))