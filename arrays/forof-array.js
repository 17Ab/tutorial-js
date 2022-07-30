let num  = []

num[0] = 5
num[99] = 9
console.log(num);                              // [ 5, <98 empty items>, 9 ]

for(let n of num){
    console.log(n);                            // num[n]
}


// for(let key in num){
//     console.log(key);                       //num.key
// }


// for(let key in num){
//     console.log(num[key]);                             
// }


