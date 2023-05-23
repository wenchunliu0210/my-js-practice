const person = {
  myName: 'Jojo'
}
Object.freeze(person)

person.myName = 'Wen'

console.log('Name: ', person.myName) // 'Jojo'

const newName = person.myName
console.log('New Name: ', newName) // 'Jojo'

const newName2 = person.myName = 'Chun'
console.log('New Name 2: ', newName2) // 'Chun'

;(function () {
  const d = e = 'Hello World'
})()
console.log('E: ', e) // 'Hello World' (window property)

var a = 10
console.log(++a * a) // 121
console.log(a) // 11

var a = 10
console.log(a++ * a) // 110
console.log(a) // 11

var a = 10
console.log(++a * a++)
console.log(a)
