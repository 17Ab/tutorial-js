let x = Number('123 Navin')
console.log(x)
// Output: NaN 

let y = parseInt('123 Navin')
console.log(y)
//output: 123

let z = parseInt('N123 Navin')
console.log(z)
//output: NaN

let a = String(123)
console.log(a, typeof(a))

console.log('*'.repeat(50))

let b 
console.log(b, typeof(b))
b = 8
console.log(b, typeof(b))
b = b + ""
console.log(b, typeof(b))
b = b - 2
console.log(b, typeof(b))
b = !b
console.log(b, typeof(b))