/* data structures in JS:
Primitive:

1. Number 
       sub : BigInt
2. String
3. Boolean
4. Null
5. Undefined 
6. Symbol

Object:

*/

let a = 8.5 //float Number
let b = 101010110234656242522453225 //int Number
let c = 101010110234656242522453225n //bigInt Number

let d = 101010110234656242522453225n * 200000n


console.log(a, b, c, d)

console.log(typeof(a), typeof(b), typeof(c), typeof(d))

console.log()


// String

ab = 'barber\vKing'

bc = "barber \"king\""

cd = 'barber\tking'

de = 'barber\nking'

ef = "barber 'king'"

fg = 'barberk\bking'

console.log(ab, bc, cd, de, ef, fg)

//Boolean

a1 = 5>6

console.log(a1)

//Null

let a2 = null //no object

//Undefined  - means not assigned

let a3

console.log(a3)

