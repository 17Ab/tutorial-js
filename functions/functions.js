

function greet(a) {
    console.log('hii');
    return `Hello ${a}`
    
}
greet(30)
let a = greet(20)
console.log(a);

console.log('*'.repeat(20));



function add(num1, num2, num3 = 200 ){                           //parameters and num3 is default var
    console.log(num);
    var sum = num1 + num2 + num3

    console.log(sum)

}
num = 100
add(1,2)            //arguments

console.log('*'.repeat(20));




let dd = function (x, y){
    sub = x-y
    console.log(sub);
}

dd(2,2)