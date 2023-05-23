/**
 * ASI stands for Automatic Semicolon Insertion.
 * There are exceptional condition where ASI does not work correctly.
 * 1. When a new line starts with '/' or '[' or '(' ---> Report error
 * 2. When a new line starts with '+' or '-' or '*' or '%'   ---> Won't report error but may get an unexpected result.
 * 3. When a new line starts with ',' or '.' ---> Won't report error but may get an unexpected result.
 */
console.log('Hello')
[1, 2, 3].forEach(num => { // TypeError: Cannot read properties of undefined (reading '3')
  console.log(num)
})

var a = 1
var b = a // TypeError: a is not a function
(a + b).toString()

var a = 1
var b = a // TypeError: a is not a function
(function () {
  console.log('hi')
})()

// var a = 1
// var b = a
// /test/.test(b) // SyntaxError: Unexpected token .

var a = 2
var b = a
+a
console.log(b) // 4

var a = 2
var b = a
.toString()
console.log(b) // '2'

var c = 1
, d = 3

console.log(d) // d will be defined as 3

;(function () {
  console.log('Hello World!')
})()

var a = 10
(a + 10).toString() // TypeError: 10 is not a function
