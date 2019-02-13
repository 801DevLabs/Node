const name = 'Tom'
let age = 28
const hasHobbies = true;

age = 29

function summarizeUser(userName, userAge, userHasHobby){
  return (`Name is ${userName}, age is ${userAge} and user has hobbies: ${userHasHobby}`)
}

console.log(summarizeUser(name, age, hasHobbies))