// const myName = 'Danila'


// console.log(myName)


// const objectA = {
//   a: 10,
//   b: true
// }

// const copyOfA = objectA
// copyOfA.a = 20
// copyOfA.c = 'abc'
// // Added .c

// // console.log(copyOfA)
// console.log(copyOfA)

// const myCity = {
//   city: 'New York', 
// }

// myCity.popular = true
// console.log(myCity)

// myCity.country = 'USA'
// console.log(myCity)

// delete myCity.country
// console.log(myCity)

// const person = {
//   name: 'Bob',
//   age: 25
// }

// // const person2 = Object.assign({}, person)
// // const person2 = {...person}
// const person2 = JSON.parce(JSON.stringify(person))

// person2.name = 'Alice'


// console.log(person2.name) // 26
// console.log(person.name) // 25

// let a = 5
// let b = 3

// let c

// // c = a + b
// // console.log(c) // 8


// // c = a + b 
// // console.log(c) // 20

// function sum(a, b) {
//   const c = a + b 
//   console.log(c)
// }

// sum(a, b) // 8

// a = 8 
// b = 12 

// sum(a, b) // 20

// function myFn(a, b) {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }


// console.log(myFn(10, 3))

// const person0ne = {
//   name: 'Bob',
//   age: 21
// }

// function increasePersonAge(person) {
//   person.age += 1 
//   return person
// }

// increasePersonAge(person0ne)
// console.log(person0ne.age)

const personOne = {
  name: 'Bob',
  age: 21
}

increasePersonAge = (person) => {
  const updatedPerson = Object.assign({}, person)
  updatedPerson.age += 1
  return updatedPerson
}

// function increasePersonAge(person) {
//   const updatedPerson = Object.assign({}, person)
//   updatedPerson.age += 1
//   return updatedPerson
// }

const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age) // 21
console.log(updatedPersonOne.age) // 22

function printMyName() {
  console.log('Bogdan')
}

console.log('Start')
setTimeout(printMyName, 2000)
