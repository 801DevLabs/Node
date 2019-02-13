const person = {
  name: 'Tom',
  age: 28,
  greet() {
    console.log('Hi I am ' + this.name);
  }
}

person.greet()