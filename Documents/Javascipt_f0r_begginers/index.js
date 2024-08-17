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

const person = {
  name: 'Bob',
  age: 25
}

const person2 = Object.assign({}, person)

person2.age = 26

console.log(person2.age) // 26
console.log(person.age) // 25 
