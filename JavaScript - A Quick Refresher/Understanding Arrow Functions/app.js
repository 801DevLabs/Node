const name = 'Tom'
let age = 28
const hasHobbies = true;

age = 29

const summerizeUser = (userName, userAge, userHasHobby) => {
  return (`Name is ${userName}, age is ${userAge} and user has hobbies: ${userHasHobby}`)
}

// const add = (a,b) => a + b

// const addOne = a => a + 1;

const addRandom = () => 1 + 2

// console.log(add(1,2))

// console.log(addOne(1))

console.log(addRandom());

console.log(summerizeUser(name, age, hasHobbies))