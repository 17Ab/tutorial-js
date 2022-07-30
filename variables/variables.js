/* Rules :

> we can use numbers but not as first letter

> we can use special chars only $ and _

> we can use any characters

user_name : Snake Casing Rule

userName : Camel Casing Rule

*/



num = 4 //old feature. And js allows it but it's not the correct way to declare variables
let b = 5 

b = 6

const c = 9

var ab = 6
ab = 20

console.log(ab)
console.log('*'.repeat(50))

//////////////////////////////////////////////////////////

const  constVar = 20

// constVar = 30  // error we can't change const var

const constVar2 = {name: 'Bob', age: 20}

constVar2.name = 'Ab' // for object it's allowed 


console.log(constVar2)

console.log('*'.repeat(50))

////////////////////////////////////////////////////////////////

if (true) {
    var varVariable = "it's var"
}

console.log(varVariable)


if (true) {
    let letVariable = "it's let"
}

console.log(letVariable)        //error 

if (true) {
    const constVariable = "it's let"
}

console.log(constVariable)      //error

////////////////////////////////////////////////////////////

//we can't use let and const var's globally

//let and const are almost same