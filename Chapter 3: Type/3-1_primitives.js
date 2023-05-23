/**
 * JS 7 primitives:
 * Number
 * String
 * Boolean
 * null
 * undefined
 * Symbols
 * BigInt
 */

// let num = 10
// num.name = 'Wen'
// console.log(num) // 10
// console.log(num.name) // undefined

// let string = 'Jojo'
// string.name = 'Wen'
// console.log(string) // 'Jojo'
// console.log(string.name) // undefined

// etc.

// let NULL = null
// NULL.name = 'Wen' // TypeError: Cannot set properties of null (setting 'name')
// console.log(NULL)
// console.log(NULL.name)

// let undef = undefined
// undef.name = 'Wen' // TypeError: Cannot set properties of undefined (setting 'name')
// console.log(undef)
// console.log(undef.name)

const rule = /ab*c/
console.log(rule.test('accccc')) // true
console.log(typeof rule)  // 'object'
