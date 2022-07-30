let nums = [10, 20, 30, 40, 50]

nums.forEach(n => {
    console.log(n);
})

console.log((nums));


let arr1 = [50, 60, 70, 80]

nums.forEach((m, i, arr1) => {            //m = value, i = index num, arr1 = array  ex: (10 0 [ 10, 20, 30, 40, 50 ])
    console.log(m*2, i, arr1);
})