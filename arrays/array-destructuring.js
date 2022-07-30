let ab = [10, 20, 30, 40]

let [a, b, c, d] = ab

console.log(a, b, c, d);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let bc = [100, 200, 300, 400]

let [e, f, , h] = bc         //to skip use comma

console.log(e, f, h);

let cd = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000]

let [i, j, , ...k] = cd

console.log(i, j, k);
console.log(k);




