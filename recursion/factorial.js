//factorial using recursion

function fact(n){
    if(n===0){
        return 1;
    }else {
        return n * fact(n-1);
    }
}

let result = fact(5)

console.log(result);
console.log('*'.repeat(50));

// === and == and =

let a = 5
let b = "5"

if (a===b){
    console.log('true');           //same value and same type ex: 5 === 5
} else if (a==b) {
    console.log('elif true');      //anything which is equal ex: 5 == '5' or 5 == 5

} else if (a=6) {
    console.log('= true');         
}