let map = new Map()

map.set('ab', 'cd')
map.set('vc', 'ec')

console.log(map);       // Map(2) { 'ab' => 'cd', 'vc' => 'ec' }

map.forEach((v, k) => {             // first argument = value and second argument = key
    console.log(k, ':', v);
})



//optional

for (let [k, v] of map){
    console.log(k, ':', v);
}