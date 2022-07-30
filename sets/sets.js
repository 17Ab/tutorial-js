let set1 = new Set("bookkeeper")

console.log(set1);            //Set(6) { 'b', 'o', 'k', 'e', 'p', 'r' }

let set2 = new Set();

set2.add(3)
set2.add(3)
set2.add('ab')
set2.add('cd')

console.log(set2);            //Set(3) { 3, 'ab', 'cd' }

console.log(set2.has('ab'));  // true

set1.forEach((value, value1, set1) => {        // value and value1 are values (both are same), set1 = set
    console.log(value, value1, set1);
})


