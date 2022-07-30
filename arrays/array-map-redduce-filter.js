// let nums = [21, 20, 31, 30, 40]

// nums.filter(n =>               //filter : [ 20, 30, 40 ]
//     n%2 === 0)
//     .map(m => m*2)             // map : it will take a value and it will change it  [40, 60, 80]
//     .forEach(n => {            
//         console.log(n);        // 20  
//     })                         // 30
//                                // 40
        

let nums = [21, 20, 31, 30, 40]

let res = nums.filter(n =>               //filter : [ 20, 30, 40 ]
        n%2 === 0)
        .map(m => m*2)             // map : it will take a value and it will change it  [40, 60, 80]
        .reduce((a,b) => a+b)      // reduce : it will take many values and reduces to 1 value

console.log(res);                  // 180