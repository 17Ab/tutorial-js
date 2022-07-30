//push
//pop
//shift
//unshift


let ab = [10, 20, 30]

console.log(ab.length);

ab.push(40)                  // pushing element 40 into the last position of the array

console.log(ab.push(50));    // it prints length of an array  // Adding element 50 into the last position of the array

console.log(ab);             // [10, 20, 30, 40, 50]

console.log(ab.pop())        // prints the element going to remove that is last element of the array // it won't take any arguments

console.log(ab);             // [10, 20, 30, 40]

console.log(ab.shift())      // prints the element going to remove that is first element of the array // it won't take any arguments

console.log(ab);             // [20, 30, 40]

console.log(ab.unshift(10))  // it prints length of an array  // Adding element 50 into the first position of the array

console.log(ab);             // [ 10, 20, 30, 40 ]

console.log(ab.splice(2, 2));  // removes 2 elements from 2nd position  // prints elements going to remove

console.log(ab);             // [10, 20]

console.log(ab.splice(0, 2, 100, 200, 300));        // from third argument all are gonna be inserted 

console.log(ab);             // [100, 200, 300]